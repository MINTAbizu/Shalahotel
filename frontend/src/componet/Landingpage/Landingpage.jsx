import React from 'react'
import Home from '../home/Home'
import Menuheader from '../manu/Menuheader'
import Serveses from '../Stayservi/Serveses'
import Book from '../Book/Book'
import CustomerReview from '../customerReview/CustomerReview'

function Landingpage() {
  return (
    <div>
        <Home/>
     <Menuheader/>
     <Serveses/>
     <Book/>
     <CustomerReview/>
      
    </div>
  )
}

export default Landingpage
