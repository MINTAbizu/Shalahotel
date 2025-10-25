// ...existing code...
import React, { useState } from 'react'
// import './productavailabelare.css'

function ProductAvailabelarse() {
  const [locationType, setLocationType] = useState('table') // 'table' or 'room'
  const [tableNumber, setTableNumber] = useState('')
  const [step, setStep] = useState(1) // 1 = choose location, 2 = customer info
  const [customer, setCustomer] = useState({ name: '', email: '', phone: '' })

  const deliveryFee = locationType === 'room' ? 5 : 0

  const canConfirmLocation = () => {
    if (locationType === 'table') return tableNumber.trim().length > 0
    return true
  }

  const handleConfirmLocation = () => {
    if (!canConfirmLocation()) return
    setStep(2)
  }

  const handleCustomerChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value })
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    // Replace with real payment processing
    alert(`Processing payment for ${customer.name}\nLocation: ${locationType}${locationType==='table'?` (Table ${tableNumber})`:''}\nDelivery fee: ${deliveryFee} ETB`)
  }

  return (
    <div className="productarea-wrapper container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="productarea card shadow-sm p-3">
            {step === 1 && (
              <>
                <div className="title d-flex align-items-center gap-3 mb-3">
                  <div className="location-icon">
                    <i className="bi bi-geo-alt-fill" aria-hidden="true"></i>
                  </div>
                  <div>
                    <h3 className="mb-0">Select Location</h3>
                    <small className="text-muted">Choose where you'd like to receive the order</small>
                  </div>
                </div>

                <div className="options mb-3">
                  <div className="form-check option-item">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="locationType"
                      id="tableOption"
                      value="table"
                      checked={locationType === 'table'}
                      onChange={() => setLocationType('table')}
                    />
                    <label className="form-check-label" htmlFor="tableOption">
                      Table
                    </label>
                  </div>

                  <div className="form-check option-item mt-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="locationType"
                      id="roomOption"
                      value="room"
                      checked={locationType === 'room'}
                      onChange={() => setLocationType('room')}
                    />
                    <label className="form-check-label d-flex align-items-center" htmlFor="roomOption">
                      Room
                      <span className="ms-2 delivery small text-muted">+ {deliveryFee} ETB delivery</span>
                    </label>
                  </div>
                </div>

                {locationType === 'table' && (
                  <div className="tabelnumbers mb-3">
                    <label htmlFor="tableNumber" className="form-label">Enter table number</label>
                    <input
                      id="tableNumber"
                      className="form-control"
                      type="text"
                      placeholder="Please enter table number"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                    />
                  </div>
                )}

                <div className="d-flex gap-2 justify-content-end">
                  <button className="btn btn-secondary" onClick={() => { setTableNumber(''); setLocationType('table') }}>
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleConfirmLocation}
                    disabled={!canConfirmLocation()}
                  >
                    Confirm location
                  </button>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="mb-3">
                  <h5 className="mb-1">Customer information</h5>
                  <small className="text-muted">Enter details to process payment</small>
                </div>

                <form onSubmit={handlePaymentSubmit} className="row g-3">
                  <div className="col-12">
                    <label className="form-label">Full name</label>
                    <input name="name" required className="form-control" value={customer.name} onChange={handleCustomerChange} />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Email</label>
                    <input name="email" type="email" required className="form-control" value={customer.email} onChange={handleCustomerChange} />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label">Phone</label>
                    <input name="phone" type="tel" required className="form-control" value={customer.phone} onChange={handleCustomerChange} />
                  </div>

                  <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                      <small className="text-muted">Location</small>
                      <div className="text-end">
                        <div>{locationType === 'table' ? `Table ${tableNumber}` : 'Room (delivery)'}</div>
                        <div className="text-muted small">Delivery fee: {deliveryFee} ETB</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 d-flex gap-2 justify-content-between">
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setStep(1)}>Back</button>
                    <button type="submit" className="btn btn-warning">Proceed to payment</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductAvailabelarse
// ...existing code...