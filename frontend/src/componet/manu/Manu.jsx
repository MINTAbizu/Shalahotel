import React from 'react';
import './manu.css';
import { useStateValue } from '../../Staateprovider/Stateprovider';

function Manu({ image, price, description, rating, id }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: 'Addtobasket',
      item: { id, image, price, rating, description },
    });
  };

  return (
    <div className="menu-card card border-0 shadow-sm h-100 text-center">
      <img
        src={image}
        alt={description}
        className="card-img-top rounded-top menu-img"
      />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title fw-semibold">{description}</h5>
          <p className="text-primary fw-bold mb-2">{price} ብር ብቻ</p>

          <div className="rating mb-2 text-warning">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <span key={i}>★</span>
              ))}
          </div>
        </div>

        <button className="btn btn-outline-primary mt-auto" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Manu;
