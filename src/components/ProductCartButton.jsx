import React from 'react'
import { useGlobalContext } from '../context/GlobalContextProvider'

const ProductCartButton = ({id}) => {
    const {isInCart,handleDeleteProduct,handleAddProduct,findProductCart } = useGlobalContext()

  return (
    <>
        {
            isInCart(id)
            ?
            <div>
                <button onClick={() => handleDeleteProduct(id)}>
                    -
                </button>
                {findProductCart(id).quantity}
                <button onClick={() => handleAddProduct (id)}>
                    +
                </button>
            </div>
            :
            <button onClick={() => handleAddProduct(id)}> Añadir al carrito </button>
        }

    </>
  )
}

export default ProductCartButton