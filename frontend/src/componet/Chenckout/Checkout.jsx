import React from 'react';
import { useStateValue } from '../../Staateprovider/Stateprovider';
// import { useStateValue } from '../Staateprovider/Stateprovider';
import CheckoutProduct from '../Chenckout/CheckoutProduct';
import { Link } from 'react-router-dom';

function Checkout() {
    const [{ basket }] = useStateValue();
    
    return (
        <div className='container-fluid checkout-container'>
            <div className="row">
                <div className="col-12">
                    <div className="checkout-title">
                        <h1>Your Shopping Cart</h1>
                        {basket.length === 0 && (
                            <p className="empty-cart-message">Your cart is empty</p>
                        )}
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="checkout-products">
                        {basket.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                price={item.price}
                                description={item.description}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                
                <div className="col-12 col-md-4">
                    <div className="checkout-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-item">
                            <span>Subtotal ({basket.length} items):</span>
                            <span>${basket.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                        </div>
                        <div className="summary-item">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-item total">
                            <span>Total:</span>
                            <span>${basket.reduce((total, item) => total + item.price, 0).toFixed(2)}</span>
                        </div>
                        <Link to={'ProductAvailabelarse'}>
                         <button className="btn btn-primary checkout-button">
                            Proceed to Payment
                        </button>
                        
                        </Link>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;