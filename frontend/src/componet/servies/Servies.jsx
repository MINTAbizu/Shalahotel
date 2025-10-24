import React from 'react'
import './servies.css'
function Servies() {
  return (
    <div>
        <div className="serviescontiner">
            <div className="serviescard d-flex justify-content-center align-items-center gap-4 bg-dark color-light p-4">
                <div className="location shadow rounded-5 p-3 text-center ">
  <div className="location-icon mb-2">
    <i className="bi bi-geo-alt-fill fs-3 text-primary" aria-hidden="true"></i>
  </div>
  <h3>Location</h3>
  <p>Shashmanee</p>
                 </div>

                <div className="working-hour shadow rounded-5 p-3 location">
                    <div className="call-icon">
                        <i className="bi bi-clock-fill"></i>
                    </div>
                    <h3>Working Hours</h3>
                    <p>24/7</p>
                </div>
               
                <div className="premium-quality shadow rounded-5 p-3 location">
                    <div className="quality-icon">
                        <i className="bi bi-star-fill"></i>
                    </div>
                    <h3>Premium Quality</h3>
                    <p>Top-notch services guaranteed</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Servies
