import React from 'react'
/* import { products } from '../productsDB' */
import { Link } from 'react-router-dom'
import { useFilterContext } from '../context/FilterContextProvider'


const Home = () => {
const {ListaProductos,SearchString, handleFilterProducto} = useFilterContext()
  return (
    <div>

        <h1>Bienvenido a Apple Store</h1>
        <div>
            { 
                ListaProductos.filter(products => products.nombre.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase())).map(({categoria, nombre, id, precio, img, memoria}) => (
                    <Card categoria={categoria} nombre={nombre} id={id} precio ={precio} img={img} memoria={memoria} key={id}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home



const Card = ({categoria, nombre, precio, id, img, memoria}) => {
  return (
    <div>
        <h2>{nombre}</h2>
        <img src={img}></img>
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


