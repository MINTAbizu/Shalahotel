import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, Spinner, Alert, Container } from "react-bootstrap";

const AdminBookingTable = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  // ✅ Fetch all bookings from backend
  const fetchBookings = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get("http://localhost:5000/api/getbookings"); // Adjust URL
      setBookings(res.data.bookings || []);
    } catch (err) {
      setError("Failed to fetch bookings. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
 console.log(bookings.fullName)
  // 🗑️ Delete booking
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this booking?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/bookings/${id}`);
      setMessage("Booking deleted successfully!");
      setBookings(bookings.filter((b) => b._id !== id));
    } catch (err) {
      setError("Failed to delete booking. Please try again.");
    }
  };
 

  // ⏳ Load bookings on mount
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <Container className="mt-4">
      <h3 className="text-center mb-4 fw-bold">📘 Booking Management</h3>

      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}

      {loading ? (
        <div className="text-center mt-5">
          <Spinner animation="border" />
        </div>
      ) : (
        <div className="table-responsive bg-white p-3 rounded shadow-sm">
          <Table striped bordered hover responsive className="align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>User name</th>
                <th>Room Type</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Guests</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length > 0 ? (
                bookings.map((b, i) => (
                  <tr key={b._id}>
                    <td>{i + 1}</td>
                    <td>{b.fullName}</td>
                    <td>{b.roomtype}</td>
                    <td>{new Date(b.checkInDate).toLocaleDateString()}</td>
                    <td>{new Date(b.checkOutDate).toLocaleDateString()}</td>
                    <td>{b.guests}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDelete(b._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center text-muted py-4">
                    No bookings available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default AdminBookingTable;
