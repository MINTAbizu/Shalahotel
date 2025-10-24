import React from 'react'
import './manu.css'
// import MenuIcon from '@mui/icons-material/Menu'
// import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import { useStateValue } from '../../Staateprovider/Stateprovider';
import Menuheader from './Menuheader';
function Manu({ image, price, description, rating, watch, id }) {
     const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'Addtobasket',
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating,
                description: description,
            },
        });
    };
  return (
    <div className='menu bg-light'>
        {/* top header section menu */}
      {/* <Menuheader/> */}
      {/* menu section */}
        <div className='product card shadow d-flex justify-content-center align-items-center'>
            <img className={`card-img-top ${watch}`} src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{description}</h5>
                <p className="card-text">{price}:00 ብር ብቻ</p>
                <div className="rating">
                    {Array(rating).fill().map((_, i) => (
                        <span key={i}>⭐</span>
                    ))}
                
                </div>
                <button className="btn btn-primary" onClick={addToBasket}>Add to Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Manu
