import React, { useState } from 'react'
import './book.css'
import { Rating } from '@mui/material'

function Book() {
  const availableRooms = [
    { id: 1, name: 'Deluxe Room', price: 150, image: 'https://via.placeholder.com/80', rating: 4.5 },
    { id: 2, name: 'Standard Room', price: 100, image: 'https://via.placeholder.com/80', rating: 3.8 },
    { id: 3, name: 'Suite', price: 250, image: 'https://via.placeholder.com/80', rating: 4.9 },
  ]

  const [checkInDate, setCheckInDate] = useState('')
  const [checkOutDate, setCheckOutDate] = useState('')
  const [guests, setGuests] = useState(1)
  const [roomtype, setRoomType] = useState('single')
  const [specialRequests, setSpecialRequests] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [fullNameError, setFullNameError] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!fullName.trim()) {
      setFullNameError('Full name is required')
      return
    } else {
      setFullNameError('')
    }

    if (!phone.trim()) {
      setPhoneError('Phone number is required')
      return
    } else {
      setPhoneError('')
    }

    const formData = {
      checkInDate,
      checkOutDate,
      guests,
      roomtype,
      specialRequests,
      fullName,
      phone
    }

    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      console.log(data)
      setMessage('Booking successful!')
    } catch (error) {
      console.error('Error:', error)
      setMessage('Booking failed. Please try again.')
    }
  }

  return (
    <section className="bookcontainer container-fluid my-5 bg-light py-5">
      <div className="container">
        <h2 className="mb-2">Book your stay</h2>
        <p className="mb-4 text-muted">Comfortable rooms · Great location · Best rates</p>

        <div className="row g-4 align-items-start">
          {/* RIGHT SIDE — FORM */}
          <div className="col-12 col-lg-7">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-3">Reservation</h3>

                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12 col-md-6">
                    <label className="form-label">Check In</label>
                    <input
                    required
                      type="date"
                      className="form-control"
                      value={checkInDate}
                      onChange={(e) => setCheckInDate(e.target.value)}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Check Out</label>
                    <input
                      type="date"
                      required
                      className="form-control"
                      value={checkOutDate}
                      onChange={(e) => setCheckOutDate(e.target.value)}
                    />
                  </div>

                  <div className="col-6 col-md-4">
                    <label className="form-label">Guests</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      className="form-control"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      required
                    />
                  </div>

                  <div className="col-6 col-md-8">
                    <label className="form-label">Room type</label>
                    <select
                      className="form-select"
                      value={roomtype}
                      onChange={(e) => setRoomType(e.target.value)}
                      required
                    >
                      <option value="single">Single Room</option>
                      <option value="double">Double Room</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Special requests</label>
                    <textarea
                      rows="3"
                      className="form-control"
                      placeholder="Any special requests?"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                    />
                  </div>

                  <h4>Contact Information</h4>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                    {fullNameError && <small className="text-danger">{fullNameError}</small>}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    {phoneError && <small className="text-danger">{phoneError}</small>}
                  </div>

                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-warning w-100">
                      Book Now
                    </button>
                  </div>

                  {message && <p className="text-center mt-2">{message}</p>}
                </form>
              </div>
            </div>
          </div>

          {/* LEFT SIDE — ROOM LIST */}
          <div className="col-12 col-lg-5">
            <div className="book-left-side p-4 rounded-3 text-dark">
              <h3 className="mb-3">Available Rooms</h3>
              <p className="mb-4">Explore our range of comfortable and well-equipped rooms.</p>

              {availableRooms.map((room) => (
                <div
                  key={room.id}
                  className="room-card mb-3 p-3 bg-white rounded-2 shadow-sm d-flex align-items-center"
                >
                  <img
                    src={room.image}
                    alt={room.name}
                    className="room-image me-3 rounded"
                    width="80"
                    height="80"
                  />
                  <div>
                    <h5 className="mb-1">{room.name}</h5>
                    <Rating name="read-only" value={room.rating} precision={0.5} readOnly size="small" />
                    <p className="mb-0 text-muted">${room.price} per night</p>
                    <div className="d-flex gap-2 mt-2">
                      <button className="btn btn-sm btn-outline-warning">Book Now</button>
                      <button className="btn btn-sm btn-outline-secondary">View Details</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Book
