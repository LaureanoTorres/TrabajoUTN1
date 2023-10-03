import React from 'react'
import {BiSolidDownArrow} from 'react-icons/Bi'
import { useFilterContext } from '../context/FilterContextProvider'

const Filtradores = () => {
    const {
    handleCheckCategoriaSeleccionada,
    handleCheckMarcaSeleccionada,
    PriceRangeMin,
    PriceRangeMax,
    handlePriceChangeMin,
    handlePriceChangeMax,
    handleClaseOculta,
    CategoriasSeleccionada,
    MarcasSeleccionadas,
    ClaseOculta} = useFilterContext()



  return (
    <div className='contenedorFiltros'>

            <div className={`filters ${ClaseOculta ? 'ClaseShow' : 'claseHide'}`} >
                <span>Filtrar por Categoria: </span>
                <br/>
                <label htmlFor="">Laptops </label>
                <input type="checkbox" value= {'Laptops'} onChange={(e) => handleCheckCategoriaSeleccionada(e.target.value, e.target.checked)} checked={CategoriasSeleccionada.includes('Laptops')} /> 
                <br/>
                <label htmlFor="">Celulares </label>
                <input type="checkbox" value= {'Celulares'} onChange={(e) => handleCheckCategoriaSeleccionada(e.target.value, e.target.checked)} checked={CategoriasSeleccionada.includes('Celulares')} /> 
                <br/>
                <label htmlFor="">Televisores </label>
                <input type="checkbox" value= {'Televisores'} onChange={(e) => handleCheckCategoriaSeleccionada(e.target.value, e.target.checked)} checked={CategoriasSeleccionada.includes('Televisores')} /> 
                <br/>
                <label htmlFor="">Smartwatches </label>
                <input type="checkbox" value= {'Smartwatches'} onChange={(e) => handleCheckCategoriaSeleccionada(e.target.value, e.target.checked)} checked={CategoriasSeleccionada.includes('Smartwatches')} /> 
            </div>
        

        <div className={`filters ${ClaseOculta ? 'claseShow' : 'claseHide'}`}>
            <span>Filtrar por Marca: </span>
            <br/>
            <label htmlFor="">Filtrar por Marca: Apple </label>
            <input type="checkbox" value= {'Apple'} onChange={(e) => handleCheckMarcaSeleccionada(e.target.value, e.target.checked)} checked={MarcasSeleccionadas.includes('Apple')} /> 
            <br/>
            <label htmlFor="">Filtrar por Marca: Samsung </label>
            <input type="checkbox" value= {'Samsung'} onChange={(e) => handleCheckMarcaSeleccionada(e.target.value, e.target.checked)}checked={MarcasSeleccionadas.includes('Samsung')}  /> 
            <br/>
            <label htmlFor="">Filtrar por Marca: Google </label>
            <input type="checkbox" value= {'Google'} onChange={(e) => handleCheckMarcaSeleccionada(e.target.value, e.target.checked)} checked={MarcasSeleccionadas.includes('Google')}  />
        </div>

        <div className={`filters ${ClaseOculta ? 'claseShow' : 'claseHide'}`}>
            <span>Filtrar por Precio: </span>
            <br/>
            <br/>
            <label htmlFor=''>Máximo $: {PriceRangeMax} </label> <br/>
            <input className='barrita' type="range" min='0' max='2500' step='20' value={PriceRangeMax} onChange={handlePriceChangeMax} />
            <br/>
            <label htmlFor=''>Minimo $: {PriceRangeMin} </label><br/>
            <input className='barrita'type="range" min='0' max='2500' step='20' value={PriceRangeMin} onChange={handlePriceChangeMin} />

        </div>
        
    </div>
  )
}

export default Filtradores



