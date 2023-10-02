import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'
import '../styles/CartStyles.css'
import { useParams } from 'react-router-dom'
import { products } from '../productsDB'
import { ProductCartButton } from '../components'

const Cart = () => {
  const {cart, getTotalCart} = useGlobalContext()
  return (
    
    <div className='contenedorPaginaCarrito'>
        <h2>Su carrito</h2>
        <div className='paginaCarrito'>
          {
            cart.length > 0
            ?
            cart.map(({categoria, nombre, id, precio, quantity, img}) => (
              <CartItem categoria={categoria} nombre={nombre} id={id} precio ={precio} key={id} quantity={quantity} img={img}/>
              ))
            :
            <h2>Tu carrito aún está vacio</h2>
          }
        </div>
        <span className='totalCart'>Total a pagar: ${getTotalCart()}</span>
        <button className='btnComprarFinal'>Comprar</button>
        <span>final carrito</span>
    </div>
  )
}

export default Cart

const CartItem = ({categoria, nombre, precio, id, quantity, img}) => {

  const rute = useParams() 
  const productFound = products.find((product) => product.id === Number(rute.id) )
  console.log('hola')
  console.log(productFound)
  console.log(products)
  console.log(rute)
/*   console.log(productFound.id) */
  console.log('asda')

  return (
    <div className='tarjetasCarrito' >
        <div className='contenedorImagenCards'>
            <img src={img} width='350px' className='imagenCards'></img>
        </div>
        <h3>{categoria}</h3>
        <h2>{nombre}</h2>
        <span className='spanPrecio'>${precio}</span>
        <span>Cantidad seleccionada: {quantity} </span>
        <Link className='tarjetasVerDetalle' to={'/detail/' + id}>Ver detalle</Link>

             <ProductCartButton id={id}/>
              

    </div>
  )
}
