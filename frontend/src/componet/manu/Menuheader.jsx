import React from 'react'
import './manu.css'
import MenuIcon from '@mui/icons-material/Menu'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import LunchDiningIcon from '@mui/icons-material/LunchDining'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import image4 from '../../assets/hoem.jpg'
import Manu from './Manu'

const sampleProducts = [
  { id: 1, description: 'Description 1', image: image4, price: 1231, rating: 3 },
  { id: 2, description: 'Description 2', image: image4, price: 980, rating: 4 },
  { id: 3, description: 'Description 3', image: image4, price: 450, rating: 5 },
  { id: 4, description: 'Description 4', image: image4, price: 610, rating: 4 },
  // add more items as needed
]

function Menuheader() {
  return (
    <div className="container py-4">
      {/* Top menu (scrollable on small screens) */}
      <div className="topmenuheader mb-3">
        <div className="menulist d-flex align-items-center gap-3">
          <div className="menu-item d-flex align-items-center gap-2">
            <div className="Allmenu-icon"><MenuIcon className="text-primary" fontSize="large" /></div>
            <a href="#" className="menu-link">All</a>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="breakfast-icon"><FreeBreakfastIcon className="text-primary" fontSize="large" /></div>
            <a href="#" className="menu-link">Breakfast</a>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="lunch-icon"><LunchDiningIcon className="text-primary" fontSize="large" /></div>
            <a href="#" className="menu-link">Lunch</a>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="dinner-icon"><DinnerDiningIcon className="text-primary" fontSize="large" /></div>
            <a href="#" className="menu-link">Dinner</a>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="fastfood-icon"><FastfoodIcon className="text-primary" fontSize="large" /></div>
            <a href="#" className="menu-link">Fast Food</a>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="beverage-icon"><LocalDrinkIcon className="text-primary" fontSize="large" /></div>
            <a href="#" className="menu-link">Beverage</a>
          </div>
        </div>
      </div>

      {/* Products grid */}
      <div className="row g-3">
        {sampleProducts.map(p => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <Manu {...p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menuheader