import React from 'react'
import { useFilterContext } from '../context/FilterContextProvider'
import '../styles/Header.css'


const NavBar = () => {
  const {searchString, handleFilterProducto} = useFilterContext()

  return (
    <div className='cuerpo'>
        <div>
            <span> BRAND </span>
        </div>
        <div>
            <input placeholder='Buscá tu producto' value={searchString}  onChange={handleFilterProducto} />
        </div>
        <div>

        </div>
    </div>
  )
}

export default NavBar