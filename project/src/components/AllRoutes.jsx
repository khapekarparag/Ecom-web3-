import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Login from './Login'
import Register from './Register'
import Showproducts from './Showproducts'
import Admin from './Admin'
import Cart from './Cart'
import Home from './Home'
import About from './About'
import ShowAdminProducts from './ShowAdminProducts'
import Womens from './Womens'
import Mens from './Mens'
import Kids from './Kids'
import UpdateProduct from './UpdateProduct'
import Contact from './Contact'

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
        <Route path='/about' element={<About/>}/>
        <Route path='/showadminprod' element={<ShowAdminProducts/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/update' element={<UpdateProduct/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
  )
}
