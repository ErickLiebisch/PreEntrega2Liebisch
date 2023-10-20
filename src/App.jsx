import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx"
import ItemList from './components/Itemlist/ItemList'
import Item from './components/Item/Item'
import Navigation from './routes/Navigation'
import CartContext from './context/CartContext'

function App() {
return (
  <CartContext>
  <Navigation/>
  </CartContext>
      
    
  )
}

export default App
