import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Login from './Login'
import Register from './Register'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path='/addProduct' element={<Products/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
    </Routes>
  )
}
