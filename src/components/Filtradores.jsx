import React from 'react'
import { useFilterContext } from '../context/FilterContextProvider'

const Filtradores = () => {
    const {PrecioSeleccionado, handleCheckPrecioSeleccionado, CategoriasSeleccionada,handleCheckCategoriaSeleccionada, handleCheckMarcaSeleccionada, searchString } = useFilterContext()



  return (
    <div>
        <div className='filters'>

        <label htmlFor="">Filtrar por precio mayor a $500: </label>
        <input type="checkbox" checked={PrecioSeleccionado} onChange={handleCheckPrecioSeleccionado} /> 
        <br/>
        <label htmlFor="">Filtrar por categoria: Laptop </label>
        <input type="checkbox" value= {'Laptops'} onChange={(e) => handleCheckCategoriaSeleccionada(e.target.value, e.target.checked)} /> 
        <br/>
        <label htmlFor="">Filtrar por categoria: Celulares </label>
        <input type="checkbox" value= {'Celulares'} onChange={(e) => handleCheckCategoriaSeleccionada(e.target.value, e.target.checked)} /> 



        <br/>
        <label htmlFor="">Filtrar por Marca: Apple </label>
        <input type="checkbox" value= {'Apple'} onChange={(e) => handleCheckMarcaSeleccionada(e.target.value, e.target.checked)} /> 
        </div>
        <div>

        </div>
    </div>
  )
}

export default Filtradores



/* const FiltradorMarca = () */