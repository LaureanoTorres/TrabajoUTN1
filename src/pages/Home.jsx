import React from 'react'
/* import { products } from '../productsDB' */
import { Link } from 'react-router-dom'
import { useFilterContext } from '../context/FilterContextProvider'
import { Filtradores } from '../components'


const Home = () => {
const {ListaProductos,SearchString, handleFilterProducto} = useFilterContext()
  return (
    <div className='componentesDelHome' >
        <div className='productosDelHome'>
              <h1>Bienvenido a TechStore</h1>
              <br/>
              <div >
                  { 
                      ListaProductos.filter(products => products.nombre.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase())).map(({categoria, nombre, id, precio, img, memoria}) => (
                          <Card categoria={categoria} nombre={nombre} id={id} precio ={precio} img={img} memoria={memoria} key={id}/>
                      ))
                  }
              </div>
          </div>

      <div>
      <Filtradores/>
        </div>
    </div>
  )
}

export default Home

const Card = ({categoria, nombre, precio, id, img, memoria}) => {
  return (
    <div className='tarjetasProducto'>
      
        <h2>{nombre}</h2>
        <img src={img} className='imagenCards'></img>
        <h3>{categoria}</h3>
        <span>${precio}</span>
        <br/>
        <span>{memoria}GB</span>
        <br/>
        <Link to={'/detail/' + id}>Ver detalle</Link>
      </div>
  )
}

export {Card}


