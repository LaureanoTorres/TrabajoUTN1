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
    <div>
        {
        productFound ?
        <>
            <h2>{productFound.nombre}</h2>
           {/*  <img src= {require(productFound.img)}/> */}
            <span>Precio $: {productFound.precio}</span>
            <ProductCartButton id={productFound.id}/>
            <span> {productFound.memoria} </span>
        </>
        :
        <Error404 mensaje={'Producto no encontrado'}/>
        }
    </div>
    )
}
export default ProductDetail