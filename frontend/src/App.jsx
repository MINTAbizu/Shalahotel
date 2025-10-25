import './App.css'
import Header from './componet/Header/Header'
import Home from './componet/home/Home'
import Landingpage from './componet/Landingpage/Landingpage'
import Manu from './componet/manu/Manu'

import Menuheader from './componet/manu/Menuheader'
import BeverageMenu from './componet/Stayservi/BeverageMenu'
import BreakfastMenu from './componet/Stayservi/BreakfastMenu'
import DinnerMenu from './componet/Stayservi/DinnerMenu'
import FastFoodMenu from './componet/Stayservi/FastFoodMenu'
import LunchMenu from './componet/Stayservi/LunchMenu'
import Serveses from './componet/Stayservi/Serveses'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Checkout from './componet/Chenckout/Checkout'
import ProductAvailabelarse from './componet/productavilabel/ProductAvailabelarse'
import Footer from './componet/Footer/Footer'
function App() {
  return (
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menuheader />} />
            <Route path="/menu/breakfast" element={<BreakfastMenu />} />
            <Route path="/menu/lunch" element={<LunchMenu />} />
            <Route path="/menu/dinner" element={<DinnerMenu />} />
            <Route path="/menu/fast-food" element={<FastFoodMenu />} />
            <Route path="/menu/beverage" element={<BeverageMenu />} />
            <Route path="/services" element={<Serveses />} />
            <Route path="/checkoutproduct" element={<Checkout />} />
            <Route path="/checkoutproduct/ProductAvailabelarse" element={<ProductAvailabelarse />} />

            <Route
              path="*"
              element={
                <div className="container py-5">
                  <h2>Page not found</h2>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
