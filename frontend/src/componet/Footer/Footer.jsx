import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <div className="hotel-name">
              <h3>Shala Hotel & Restaurant</h3>
              <p className="small text-muted">Comfort, style and great service.</p>
            </div>

            <div className="contact-info mt-3">
              <div className="d-flex align-items-start mb-2">
                <i className="bi bi-geo-alt-fill icon me-2" aria-hidden="true"></i>
                <div>
                  <div className="muted-label">Address</div>
                  <div>123 Main Street, City, Country</div>
                </div>
              </div>

              <div className="d-flex align-items-start mb-2">
                <i className="bi bi-telephone-fill icon me-2" aria-hidden="true"></i>
                <div>
                  <div className="muted-label">Phone</div>
                  <div>+123 456 7890</div>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <i className="bi bi-envelope-fill icon me-2" aria-hidden="true"></i>
                <div>
                  <div className="muted-label">Email</div>
                  <div>email@gmail.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <h4>Quick Links</h4>
            <ul className="list-unstyled quick-links">
              <li><a href="/services"><i className="bi bi-tools me-2"></i>Hotel Services</a></li>
              <li><a href="/menu"><i className="bi bi-card-list me-2"></i>Our Menu</a></li>
              <li><a href="/about"><i className="bi bi-info-circle me-2"></i>About Us</a></li>
              <li><a href="/contact"><i className="bi bi-chat-dots me-2"></i>Contact</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <h4>Newsletter</h4>
            <p className="small text-muted">Subscribe for latest offers and updates.</p>

            <form className="newsletter-form d-flex gap-2" onSubmit={(e)=>e.preventDefault()}>
              <input type="email" className="form-control form-control-sm" placeholder="Enter email" aria-label="email" />
              <button className="btn btn-cta btn-sm" type="submit">Subscribe</button>
            </form>

            <div className="mt-3">
              <h5 className="mb-2">Follow Us</h5>
              <div className="social d-flex gap-2">
                <a className="social-btn" href="#" aria-label="facebook"><i className="bi bi-facebook"></i></a>
                <a className="social-btn" href="#" aria-label="twitter"><i className="bi bi-twitter"></i></a>
                <a className="social-btn" href="#" aria-label="instagram"><i className="bi bi-instagram"></i></a>
                <a className="social-btn" href="#" aria-label="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div className="writte-reviews pt-3">
              <p>writte feed backs </p>
              <button className='reviews rounded '>Write-reviews</button>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3 footer-col">
            <h4>Opening Hours</h4>

            <div className="hours-list small ">
              <div><strong>Restaurant:</strong> Mon–Fri 7:00–5:00</div>
              <div><strong>Weekend:</strong> Sat–Sun 8:00–12:00</div>
              <div className="mt-2"><strong>Check-in:</strong> 1:00 — <strong>Check-out:</strong> any-time</div>
            </div>

            <div className="mt-3 recognitions">
              <h5 className="mb-2">Recognitions</h5>
              <div className="d-flex gap-2">
                <span className="award badge bg-light text-dark"><i className="bi bi-award-fill"></i></span>
                <span className="award badge bg-light text-dark"><i className="bi bi-award-fill"></i></span>
                <span className="award badge bg-light text-dark"><i className="bi bi-award-fill"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center mt-4 pt-3 border-top">
          <div className="">&copy; {new Date().getFullYear()} Shala Hotel & Restaurant. All rights reserved.</div>
          <div className="d-flex gap-3 mt-2 mt-md-0">
            <a href="/privacy" className="large ">Privacy Policy</a>
            <a href="/terms" className="large ">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
