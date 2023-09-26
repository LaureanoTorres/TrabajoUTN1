import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import {IoCartOutline} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import { useFilterContext } from '../context/FilterContextProvider'
import NavBar from './NavBar'

const Header = () => {
  const {searchString, handleFilterProducto} = useFilterContext
  const {getTotalProductsInCart} = useGlobalContext()
  return (
    <header>
   {/*    <NavBar></NavBar> */}
    {/*   <a href="/public/mediaaaa/Logo.png"></a>  */}
      <h2 id='NombreMarca'> TechStore </h2>
      <input placeholder='Buscá tu producto' value={searchString}  onChange={handleFilterProducto} />
      <NavLink id='NavCatalogo'to={'/home'}>Ir al catalogo</NavLink>
      <NavLink id='NavContacto'to={'/contact'}>Ir a Contacto </NavLink>
      <NavLink id='NavCarrito' to={'/cart'}> 
          {<IoCartOutline/>}
          <span>
              {getTotalProductsInCart()}
          </span>
      </NavLink>
    </header>
  )
}

export default Header