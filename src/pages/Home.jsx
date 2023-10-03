import React from 'react'
import { Link } from 'react-router-dom'
import {BiSolidDownArrow} from 'react-icons/Bi'
import { useFilterContext } from '../context/FilterContextProvider'
import { Filtradores } from '../components'


const Home = () => {
const {ListaProductos,SearchString, handleClaseOculta} = useFilterContext()
  return (
    
    <div className='componentesDelHome'>
          <div className='separadorHome'>
             {/*  <h1 >Bienvenido a TechStore</h1>  */}
              <h1 className='tituloPrincipal'>Bienvenido a TechStore</h1> 
              <h3 id='toggleFiltradores' onClick={handleClaseOculta}>Desplegar Filtradores <BiSolidDownArrow className='BiSolidDownArrow' onClick={handleClaseOculta}/>
              </h3> 
              
            

                

          </div>
          <div className='productosDelHome'>
                <br/>
                <div className='padreTarjetas'>
                    { 
                        ListaProductos.filter(products => products.nombre.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase())).map(({categoria, nombre, id, precio, img, memoria, marca, descripcion, coloresDisponibles}) => (
                            <Card categoria={categoria} nombre={nombre} id={id} precio ={precio} img={img} memoria={memoria} marca={marca} descripcion={descripcion} coloresDisponibles={coloresDisponibles} key={id}/>
                        ))
                    }
                </div>
                <div className='sidebar'>
                      <Filtradores/>
                </div>
          </div>
    </div>
    
  )
}



export default Home

const Card = ({categoria, nombre, precio, id, img, memoria}) => {
  return (
    <div className='tarjetasProducto'>
      
        <div className='contenedorImagenCards'>
            <img src={img} className='imagenCards'></img>
        </div>
        <h2>{nombre}</h2>
        <h3>Categoria: {categoria}</h3>
        
        <span>${precio}</span>
      {/*   <span>{memoria}GB</span> */}
        <Link className='tarjetasVerDetalle' to={'/detail/' + id}>Ver detalle</Link>
      </div>
  )
}

export {Card}


