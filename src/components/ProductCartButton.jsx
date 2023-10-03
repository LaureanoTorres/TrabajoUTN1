import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductCartButton = ({id}) => {
    const {isInCart,handleDeleteProduct,handleAddProduct,findProductCart } = useGlobalContext()

  return (
    <>
        {
            isInCart(id)
            ?
            <div className='botonesCarrito'>
                <button className='btnCompra' onClick={() => handleDeleteProduct(id)}>
                    -
                </button>
                <span className='cantidadEnCarrito'>{findProductCart(id).quantity}</span>
                <button className='btnCompra' onClick={() => handleAddProduct (id)}>
                    +
                </button>
            </div>
            :
            <button className='btnCompraPrevio'  onClick={() => handleAddProduct(id)}> Añadir al carrito </button>
        }

    </>
)
}

export default ProductCartButton