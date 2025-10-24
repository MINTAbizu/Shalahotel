import Card from '@mui/material/Card'
import React from 'react'
import  '../Stayservi/serveses.css'
function Serveses() {
    const serveseData = [
        {
            id: 1,
            title: 'Room Service',
            description: 'Enjoy 24/7 room service with a variety of delicious meals and beverages delivered right to your door.',
            icon: 'bi bi-bell-fill',
            price: '50$',
        },
        {
            id: 2,
            title: 'Laundry Service',
            description: 'Convenient laundry services to keep your wardrobe fresh and clean during your stay.',
            icon: 'bi bi-shirt-fill',
              price: '100',
        },
        {
            id: 3,
            title: 'Concierge Service',
            description: 'Our concierge team is here to assist you with reservations, recommendations, and any special requests.',
            icon: 'bi bi-person-fill',
              price: '100',
        },
        {
            id: 4,
            title: 'Spa and Wellness',
            description: 'Relax and rejuvenate with our spa treatments and wellness programs designed for your comfort.',
            icon: 'bi bi-heart-pulse-fill',
              price: '100',
        },

    ];

  return (
    <div>
        <div className="servesescontainer bg-light  container-fluid">
            <div className="servesestitle text-center p-4 color-dark  ">
                <h1 >Stay serve</h1>
                <p>somthing</p>
            </div>
            <div className="servesesdescrption text-center p-4 color-dark ">
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.br <br />
                 Suscipit molestias,</h2>
            </div>
            <div className="servese-type">
                <div className="serves-card d-flex justify-content-center align-items-center  gap-3 p-4">
                    {serveseData.map((service) => (
                        <Card key={service.id} className="service-card shadow p-4 m-3">
                            <div className="service-icon mb-3">
                                <i className={`${service.icon} fs-1 text-primary `} aria-hidden="true"></i>
                            </div>
                            <h3 className="service-title mb-2">{service.title}</h3>
                            <h3>{service.price}</h3>
                            <p className="service-description">{service.description}</p>
                            <button className=' shadow rounded '>Request now</button>
                        </Card>
                    ))}

                </div>
               
            </div>
        </div>
      
    </div>
  )
}

export default Serveses
