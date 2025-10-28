import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { ListItemIcon } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { StatusContext } from '../Admin/context/StatusContext'; // Make sure this file exists

function Inventory() {
  const { setStatusData } = useContext(StatusContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // ✅ Fetch all items from backend
  useEffect(() => {
    const fetchItems = async () => {
      try {
        // Backend route is GET /api/items/
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
        aggregateStatus(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };

    // Aggregate and normalize status counts for dashboard summary
    const aggregateStatus = (items) => {
      const statusCounts = items.reduce((acc, item) => {
        const normalizedStatus = normalizeStatus(item.status);
        acc[normalizedStatus] = (acc[normalizedStatus] || 0) + 1;
        return acc;
      }, {});
      setStatusData(statusCounts);
    };

    const normalizeStatus = (status) => {
      if (!status) return 'Unknown';
      switch (status.toLowerCase()) {
        case 'out-stock':
          return 'Out of Stock';
        case 'low-stock':
          return 'Low Stock';
        case 'in-stock':
          return 'In Stock';
        default:
          return status;
      }
    };

    fetchItems();
  }, [setStatusData]);

  // ✅ Delete item by ID (DELETE /api/items/:id)
  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this item?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/items/${itemId}`);
        setItems(items.filter(item => item._id !== itemId));
        alert('Item deleted successfully');
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Failed to delete the item');
      }
    }
  };

  // ✅ Handle View (e.g., navigate or show modal)
  const handleView = (itemId) => {
    console.log('View item with ID:', itemId);
    // Optional: navigate(`/items/${itemId}`);
  };

  // ✅ Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  // ✅ UI
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Inventory Management</h1>
        <Link to={'/ItemRegisteration'}>
          <button className="btn btn-primary">+ Add Item</button>
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Unit</th>
              <th>Cost</th>
              <th>Quantity</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {currentItems.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.unit}</td>
                <td>{item.cost}</td>
                <td>{item.quantity}</td>
                <td>{item.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => handleView(item._id)}
                  >
                    <VisibilityIcon fontSize="small" /> View
                  </button>

                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>

                  <ListItemIcon>
                    <EditIcon fontSize="small" />
                  </ListItemIcon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <div className="pagination mt-3 d-flex justify-content-center align-items-center">
        <button onClick={prevPage} disabled={currentPage === 1} className="btn btn-secondary me-2">
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="btn btn-secondary ms-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Inventory;
