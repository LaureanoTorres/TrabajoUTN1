import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { Link } from 'react-router-dom'
import '../styles/CartStyles.css'

const Cart = () => {
  const {cart, getTotalCart} = useGlobalContext()
  return (
    <div>
      {
        cart.length > 0
        ?
        cart.map(({categoria, nombre, id, precio, quantity}) => (
          <CartItem categoria={categoria} nombre={nombre} id={id} precio ={precio} key={id} quantity={quantity}/>
          ))
        :
        <h2>Tu carrito aún está vacio</h2>
      }
      <h3>Total: ${getTotalCart()}</h3>
    </div>
  )
}

export default Cart

const CartItem = ({categoria, nombre, precio, id, quantity}) => {
  return (
    <div>
        <h3>{categoria}</h3>
        <h2>{nombre}</h2>
        <span>${precio}</span>
        <br/>
        <span>Cantidad comprada: {quantity} </span>
        <Link to={'/detail/' + id}>Ver detalle</Link>
    </div>
  )
}
