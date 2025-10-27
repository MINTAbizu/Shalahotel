import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { ListItemIcon } from '@mui/material';

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const customersPerPage = 10;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/getuser'); // your route for getAllUsers
        setCustomers(res.data.users || []);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  // 🗑️ Delete user
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this user?');
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:5000/api/deleteuser/${id}`);
        setCustomers(customers.filter((user) => user._id !== id));
        alert('User deleted successfully');
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user');
      }
    }
  };

  // ✏️ Edit (navigate to an update page or open modal)
  const handleEdit = (id) => {
    console.log('Edit user with ID:', id);
    // You can navigate to `/edituser/${id}` or open a modal
  };

  // 👁️ View (for example open modal or redirect)
  const handleView = (id) => {
    console.log('View user with ID:', id);
  };

  // 🔍 Search by name or email
  const filteredCustomers = customers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLast = currentPage * customersPerPage;
  const indexOfFirst = indexOfLast - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-12">
          <div className="customer-management shadow-sm p-4 bg-white rounded">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>👥 Customer Management</h2>
              <input
                type="text"
                placeholder="Search by name or email"
                className="form-control w-25"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCustomers.length > 0 ? (
                    currentCustomers.map((user, index) => (
                      <tr key={user._id}>
                        <td>{index + 1 + (currentPage - 1) * customersPerPage}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          <button
                            className="btn btn-outline-primary btn-sm me-2"
                            onClick={() => handleView(user._id)}
                          >
                            <VisibilityIcon /> View
                          </button>
                          <button
                            className="btn btn-outline-success btn-sm me-2"
                            onClick={() => handleEdit(user._id)}
                          >
                            <EditIcon /> Edit
                          </button>
                          <button
                            className="btn btn-outline-danger btn-sm"
                            onClick={() => handleDelete(user._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No users found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pagination mt-3 d-flex justify-content-center align-items-center">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="btn btn-secondary me-2"
              >
                Previous
              </button>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="btn btn-secondary ms-2"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
