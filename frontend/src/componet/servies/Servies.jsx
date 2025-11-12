import React from 'react';
import './servies.css';

function Servies() {
  return (
    <div className="serviescontiner container py-5  shadow rounded-5 p-4 text-center h-50 bg-light text-dark">
      <div className="row justify-content-center g-4">
        {/* Location Card */}
        <div className="col-12 col-md-4">
          <div className="serviescard shadow rounded-5 p-4 text-center h-100 bg-light text-dark">
            <div className="location-icon mb-3">
              <i className="bi bi-geo-alt-fill fs-3 text-primary"></i>
            </div>
            <h3>Location</h3>
            <p>Shashmanee</p>
          </div>
        </div>

        {/* Working Hours Card */}
        <div className="col-12 col-md-4">
          <div className="serviescard shadow rounded-5 p-4 text-center h-100 bg-light text-dark">
            <div className="call-icon mb-3">
              <i className="bi bi-clock-fill fs-3 text-primary"></i>
            </div>
            <h3>Working Hours</h3>
            <p>24/7</p>
          </div>
        </div>

        {/* Premium Quality Card */}
        <div className="col-12 col-md-4">
          <div className="serviescard shadow rounded-5 p-4 text-center h-100 bg-light text-dark">
            <div className="quality-icon mb-3">
              <i className="bi bi-star-fill fs-3 text-primary"></i>
            </div>
            <h3>Premium Quality</h3>
            <p>Top-notch services guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Servies;
