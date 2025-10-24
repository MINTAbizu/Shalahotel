
import './App.css'
import Header from './componet/Header/Header'
import Home from './componet/home/Home'
import Manu from './componet/manu/Manu'

import Menuheader from './componet/manu/Menuheader'
import BeverageMenu from './componet/Stayservi/BeverageMenu'
import BreakfastMenu from './componet/Stayservi/BreakfastMenu'
import DinnerMenu from './componet/Stayservi/DinnerMenu'
import FastFoodMenu from './componet/Stayservi/FastFoodMenu'
import LunchMenu from './componet/Stayservi/LunchMenu'
import Serveses from './componet/Stayservi/Serveses'
function App() {
  

  return (
  <div>
     <Header/>
     <Home/>
     <Menuheader/>
     <Serveses/>
     <BreakfastMenu/>
     <DinnerMenu/>
     <LunchMenu/>
     <FastFoodMenu/>
     <BeverageMenu/>
     
  </div>
  )
}

export default App
