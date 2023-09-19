import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import {IoCartOutline} from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import { useFilterContext } from '../context/FilterContextProvider'
import NavBar from './NavBar'

const Header = () => {
  const {} = useFilterContext
  const {getTotalProductsInCart} = useGlobalContext()
  return (
    <header>
      <NavBar></NavBar>
      <NavLink to={'/home'}>Ir al catalogo</NavLink>
      <NavLink to={'/cart'}> 
          {<IoCartOutline/>}
          <span>
              {getTotalProductsInCart()}
          </span>
      </NavLink>
    </header>
  )
}

export default Header