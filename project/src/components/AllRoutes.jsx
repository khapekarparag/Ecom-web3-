import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Login from './Login'
import Register from './Register'
import Showproducts from './Showproducts'
import Admin from './Admin'
import Cart from './Cart'
import Home from './Home'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addProduct' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/showProduct' element={<Showproducts/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}
