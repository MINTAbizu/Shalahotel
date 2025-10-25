import Card from '@mui/material/Card'
import React from 'react'
import '../Stayservi/serveses.css'

function Serveses() {
  const serveseData = [
    { id: 1, title: 'Room Service', description: 'Enjoy 24/7 room service with a variety of delicious meals and beverages delivered right to your door.', icon: 'bi bi-bell-fill', price: '50$' },
    { id: 2, title: 'Laundry Service', description: 'Convenient laundry services to keep your wardrobe fresh and clean during your stay.', icon: 'bi bi-shirt-fill', price: '100$' },
    { id: 3, title: 'Concierge Service', description: 'Our concierge team is here to assist you with reservations, recommendations, and any special requests.', icon: 'bi bi-person-fill', price: '100$' },
    { id: 4, title: 'Spa and Wellness', description: 'Relax and rejuvenate with our spa treatments and wellness programs designed for your comfort.', icon: 'bi bi-heart-pulse-fill', price: '100$' },
  ]

  return (
    <div className="servesescontainer bg-light container-fluid py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="mb-1">Stay Services</h1>
          <p className="mb-0 text-muted">Premium services to make your stay comfortable.</p>
        </div>

        {/* Bootstrap responsive columns */}
        <div className="row g-4">
          {serveseData.map((service) => (
            <div key={service.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
              <Card className="service-card shadow-sm p-3 flex-fill d-flex flex-column">
                <div className="service-icon mb-3">
                  <i className={`${service.icon} fs-1 text-primary`} aria-hidden="true"></i>
                </div>

                <h3 className="service-title mb-1">{service.title}</h3>
                <div className="service-price mb-2">{service.price}</div>
                <p className="service-description mb-3">{service.description}</p>

                <div className="mt-auto">
                  <button className="service-cta btn btn-warning btn-sm w-100">Request now</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Serveses
