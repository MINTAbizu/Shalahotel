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
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Inventory from './Admin/Inventory'
import AdminLayout from './Admin/AdminLayout'
import MenuManagement from './Admin/MenuManagement'
import MenuList from './componet/menu/MenuList'
import Book from './componet/Book/Book'
import Customer from './Admin/Customers'
import AdminBookingTable from './Admin/AdminBookingTable'
import Customers from './Admin/Customers'
import ItemRegisteration from './Admin/ItemRegisteration'
import ChapaPayment from './ChapaPayment'
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
            <Route path="/booking" element={<Book />} />
            <Route path="/checkoutproduct" element={<Checkout />} />
            <Route path="/checkoutproduct/ProductAvailabelarse" element={<ProductAvailabelarse />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Users" element={<Users />} />
            <Route path="/AdminLayout" element={<AdminLayout />} />
            {/* <Route index element={<Dashboard />} /> */}
             <Route path="/inventory" element={<Inventory />} />
              <Route path="MenuManagement" element={<MenuManagement />} />
            {/* Admin */}

             <Route path="Customer" element={<Customers/>} />
             <Route path="ItemRegisteration" element={<ItemRegisteration/>} />
            <Route path="/menulist" element={<MenuList/>} />
            <Route path="/AdminBookingTable" element={<AdminBookingTable/>} />
            <Route path="/ChapaPayment" element={<ChapaPayment/>} />

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
        {/* < AdminLayout/> */}
      </div>
    </Router>
  )
}

export default App
