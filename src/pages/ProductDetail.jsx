import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../productsDB'
import { Error404, ProductCartButton } from '../components'
import { useGlobalContext } from '../context/GlobalContextProvider'


const ProductDetail = () => {
    /* const {id} = useParams()  desestrucutramos al id, forma alt mejor*/
    const rute = useParams() 
    const productFound = products.find((product) => product.id === Number(rute.id) )
    const {handleAddProduct, isInCart, findProductCart, handleDeleteProduct} = useGlobalContext()

    
    return (
    <div className='detailProductsCompleto'>
        {
        productFound ?
        <>
            <div className='detailProdImagen'>
                <h2 className='detailProdH2'>{productFound.nombre}</h2>
                <div className='contenedorFoto'>
                    <img src= {productFound.img} width='100%' minwidth='200px' alt='foto del producto'/>
                </div>
            </div>
            <div className='detailProdResto'>
                <p>{productFound.descipcion}</p>
                <p>Colores Disponibles: {productFound.coloresDisponibles.join(', ')}</p>
                <span>Precio: $ {productFound.precio}</span>
                <ProductCartButton id={productFound.id}/>
                {/* <span> {productFound.memoria} </span> */}
            </div>
        </>
        :
        <Error404 mensaje={'Producto no encontrado'}/>
        }
    </div>
    )
}
export default ProductDetail