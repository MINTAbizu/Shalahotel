import React from 'react';
import '../../componet/Chenckout/checkoptproduct.css';
import { useStateValue } from '../../Staateprovider/Stateprovider';
// import { useStateValue } from '../Staateprovider/Stateprovider';

function CheckoutProduct({ id, price, description, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeBasket = () => {
        dispatch({
            type: 'removebasket',
            id: id,
        });
    };

    return (
        <div className='checkout-product'>
            <div className="row align-items-center">
                <div className="col-12 col-md-3">
                    <div className="product-image">
                        <img src={image} alt={description} className="img-fluid" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="product-details">
                        <h3 className="product-title">{description}</h3>
                        <div className="product-rating">
                            {Array(rating).fill().map((_, i) => (
                                <span key={i} className="star">⭐</span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    <div className="product-actions">
                        <div className="product-price">
                            ብር {price}.00 ብቻ
                        </div>
                        <button 
                            className="btn btn-danger remove-button"
                            onClick={removeBasket}
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutProduct;