import React from 'react'
import { useFilterContext } from '../context/FilterContextProvider'

const Filtradores = () => {
    const {PrecioSeleccionado, handleCheckPrecioSeleccionado, CategoriasSeleccionada,handleCheckCategoriaSeleccionada} = useFilterContext()



  return (
    <div>
        <div>
            <br/>
            <br/>
            <span>holaaa</span>
            <br/>
            <input type="checkbox" />

        <label htmlFor="">Filtrar por precio mayor a $500:</label>
        <input type="checkbox" checked={PrecioSeleccionado} onChange={handleCheckPrecioSeleccionado} /> 
        <br/>
      {/*   <label htmlFor="">Filtrar por categoria:</label>
        <input type="checkbox" checked={CategoriasSeleccionada == 'Laptop'} onChange={handleCheckCategoriaSeleccionada} />  */}
        </div>
        <div>

        </div>
    </div>
  )
}

export default Filtradores



/* const FiltradorMarca = () */