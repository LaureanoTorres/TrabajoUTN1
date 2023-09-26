import React from 'react'
import { useFilterContext } from '../context/FilterContextProvider'

const SideBar = () => {
    const {PrecioSeleccionado, handleCheckPrecioSeleccionado, CategoriasSeleccionada,handleCheckCategoriaSeleccionada, searchString } = useFilterContext()


    
  return (
    <div>SideBar</div>
  )
}

export default SideBar