import React from 'react'
import './book.css'
import { Rating } from '@mui/material'

function Book() {
  const availableRooms = [
    { id: 1, name: 'Deluxe Room', price: 150, image: 'https://via.placeholder.com/80' },
    { id: 2, name: 'Standard Room', price: 100, image: 'https://via.placeholder.com/80' },
    { id: 3, name: 'Suite', price: 250, image: 'https://via.placeholder.com/80' ,Rating:4 },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    // handle booking logic here
    alert('Booking submitted (demo)')
  }

  return (
    <section className="bookcontainer container-fluid my-5  bg-light py-5 ">
      <div className="container">
        <h2 className="mb-2">Book your stay</h2>
        <p className="mb-4 text-muted">Comfortable rooms · Great location · Best rates</p>

        <div className="row g-4 align-items-start">

              {/* right: reservation form */}
          <div className="col-12 col-lg-7">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="book-header mb-3">
                  <h3 className="h5 mb-1">Reservation</h3>
                  <p className="text-muted mb-0">Choose dates, guests and room type.</p>
                </div>

                <form className="row g-3" onSubmit={handleSubmit}>
                  <div className="col-12 col-md-6">
                    <label htmlFor="check-in" className="form-label">Check In</label>
                    <input type="date" id="check-in" name="check-in" className="form-control" />
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="check-out" className="form-label">Check Out</label>
                    <input type="date" id="check-out" name="check-out" className="form-control" />
                  </div>

                  <div className="col-6 col-md-4">
                    <label htmlFor="guest" className="form-label">Guests</label>
                    <input type="number" id="guest" name="guest" min="1" max="10" defaultValue={1} className="form-control" />
                  </div>

                  <div className="col-6 col-md-8">
                    <label htmlFor="room" className="form-label">Room type</label>
                    <select id="room" name="room" className="form-select">
                      <option value="single">Single Room</option>
                      <option value="double">Double Room</option>
                      <option value="suite">Suite</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label htmlFor="special-requests" className="form-label">Special requests</label>
                    <textarea id="special-requests" name="special-requests" rows="3" placeholder="Any special requests?" className="form-control" />
                  </div>
                  {/* contact information */}
                    <h2>Contact-Information</h2>
                    <div className="col-12 col-md-6">
                      
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input type="text" id="full-name" name="full-name" className="form-control" required />
                  </div>
                    <div className="col-12 col-md-6">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" name="email" className="form-control" required />
                  </div>
                 
                    <div className="col-12 col-md-6">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" id="phone" name="phone" className="form-control" required />
                  </div>



                  <div className="col-12 d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary btn-lg w-100 w-md-auto">Book Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* left: available rooms / promo */}
          <div className="col-12 col-lg-5">
            <div className="book-left-side p-4 rounded-3 text-dark">
              <h3 className="mb-3">Available Rooms</h3>
              <p className="mb-4">Explore our range of comfortable and well-equipped rooms designed to make your stay memorable.</p>

              {availableRooms.map((room) => (
                <div key={room.id} className="room-card mb-3 p-3 bg-white rounded-2 shadow-sm d-flex align-items-center">
                  <img src={room.image} alt={room.name} className="room-image me-3 rounded" width="80" height="80" />
                  <div>
                    <h5 className="mb-1">{room.name}</h5>
                    <small className='rounded-2 shadow-sm'>{room.Rating}</small>
                    <p className="mb-0 text-muted">${room.price} per night</p>
                     <div className="book-btn  d-flex gap-3 p-2 ">
                    <button className='rounded-2 shadow-sm'>Book-now</button>
                    <button className='rounded-2 shadow-sm'>View-DEtails</button>
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
