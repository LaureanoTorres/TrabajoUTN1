import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import {IoCartOutline} from 'react-icons/io5'
import {AiFillHome, AiOutlineMenu} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import '../styles/Header.css'
import { useFilterContext } from '../context/FilterContextProvider'
/* import NavBar from './NavBar' */

const Header = () => {
  const {searchString, handleFilterProducto,MenuHamburgesa, toggleMenuHamburgesa } = useFilterContext()
  const {getTotalProductsInCart} = useGlobalContext()
  return (
    <header>
      <div className='divDelHeader'>
        <img  id='logoTech' src='/public/imagenes/Logo.png'></img>
        <h2 id='NombreMarca'> TechStore </h2>
        <input placeholder='Buscá tu producto' value={searchString}  onChange={handleFilterProducto} />
        <div className='NavLiksToHide'>
            <NavLink id='NavCatalogo'to={'/home'}>  <AiFillHome className='AiFillHome'/> <span className='spanNavCatalogo'>Ir al Catalogo</span></NavLink>
            <NavLink id='NavContacto'to={'/contact'}><span className='spanNavContacto'>Ir al Contacto</span> </NavLink>
            <NavLink id='NavCarrito' to={'/cart'}> 
                {<IoCartOutline className='IoCartOutline'/>}
                <span className='carritoNumero'>
                    {getTotalProductsInCart()}
                </span>
            </NavLink>
        </div>
        <div className='MenuDesplegableHamburguesa'>
              <button onClick={toggleMenuHamburgesa} ><AiOutlineMenu className='AiOutlineMenu' /></button>
        </div>
      </div>
    
    <div className='segundoHeader'>
          
          <div className={`NavBarVertical ${MenuHamburgesa ? 'ClaseShow' : 'claseHide'}`} >
                <NavLink id='NavCatalogo'to={'/home'}>  <AiFillHome className='AiFillHome'/> <span className='spanNavCatalogo'>Ir al Catalogo</span></NavLink>
                <NavLink id='NavContacto'to={'/contact'}><span className='spanNavContacto'>Contacto</span> </NavLink>
                <NavLink id='NavCarrito' to={'/cart'}> 
                    {<IoCartOutline className='IoCartOutline'/>}
                    <span className='carritoNumero'>
                        {getTotalProductsInCart()}
                    </span>
                </NavLink>
          </div>
    
          </div>

    </header>
  )
}

export default Header