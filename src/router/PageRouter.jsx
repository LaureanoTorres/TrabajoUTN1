import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Cart, Contact, Home, Login, ProductDetail, Register } from '../pages'
import { Error404 } from '../components'

const PageRouter = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/detail/:id' element={<ProductDetail/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='*' element={<Error404 mensaje= {'Producto no encontrado'}/>}  />
    </Routes>
    </>
  )
}

export default PageRouter