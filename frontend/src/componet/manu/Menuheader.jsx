import React, { useEffect, useState } from 'react'
import './manu.css'
import MenuIcon from '@mui/icons-material/Menu'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import LunchDiningIcon from '@mui/icons-material/LunchDining'
import DinnerDiningIcon from '@mui/icons-material/DinnerDining'
import FastfoodIcon from '@mui/icons-material/Fastfood'
import LocalDrinkIcon from '@mui/icons-material/LocalDrink'
import Manu from './Manu'
import { Link } from 'react-router-dom'

function Menuheader() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true) // 👈 new loading state
  const [error, setError] = useState(null) // 👈 optional error state

  const API_BASE = import.meta.env.VITE_API_URL

  useEffect(() => {
    setLoading(true)
    fetch(`${API_BASE}/menu/`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
        return res.json()
      })
      .then((data) => {
        setItems(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setError(err.message)
        setLoading(false)
      })
  }, [API_BASE])

  // 👇 loading view
  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Loading menu items, please wait...</p>
      </div>
    )
  }

  // 👇 error view
  if (error) {
    return (
      <div className="text-center py-5 text-danger">
        <p>Failed to load menu: {error}</p>
      </div>
    )
  }

  // 👇 main content view
  return (
    <div className="container py-4">
      <div className="topmenuheader mb-3">
        <div className="menulist d-flex align-items-center gap-3">
          <div className="menu-item d-flex align-items-center gap-2">
            <div className="Allmenu-icon">
              <MenuIcon className="text-primary" fontSize="large" />
            </div>
            <a href="#" className="menu-link">All</a>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="breakfast-icon">
              <FreeBreakfastIcon className="text-primary" fontSize="large" />
            </div>
            <Link to={'/menu/breakfast'} className="menu-link">Breakfast</Link>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="lunch-icon">
              <LunchDiningIcon className="text-primary" fontSize="large" />
            </div>
            <Link to={'/menu/lunch'} className="menu-link">Lunch</Link>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="dinner-icon">
              <DinnerDiningIcon className="text-primary" fontSize="large" />
            </div>
            <Link to={'/menu/dinner'} className="menu-link">Dinner</Link>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="fastfood-icon">
              <FastfoodIcon className="text-primary" fontSize="large" />
            </div>
            <Link to={'/menu/fast-food'} className="menu-link">Fast Food</Link>
          </div>

          <div className="menu-item d-flex align-items-center gap-2">
            <div className="beverage-icon">
              <LocalDrinkIcon className="text-primary" fontSize="large" />
            </div>
            <Link to={'/menu/beverage'} className="menu-link">Beverage</Link>
          </div>
        </div>
      </div>

      {/* <p>This product is displayed from Admin dashboard</p> */}

      <div className="row g-3">
        {items.map((p) => (
          <div key={p.id} className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex">
            <Manu {...p} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menuheader
