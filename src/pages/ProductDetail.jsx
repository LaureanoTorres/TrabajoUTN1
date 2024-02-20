import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Error404, ProductCartButton } from '../components'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { URL_API } from '../../config'


const ProductDetail = () => {
    const rute = useParams() 
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    const productFound = products.find((product) => product.id === Number(rute.id) )
    useEffect(()=>{
    fetch( URL_API + '/api/products', {
        headers: {
            'Authorization': localStorage.getItem('auth-token-app')
        }
    })
    .then(res=>{
        return res.json()
    })
    .then(data =>{
        if(data.status ==  401){
            navigate('/')
        }
        console.log(data)
        setProducts(data.products)
    })
}, [])
    const {handleAddProduct, isInCart, findProductCart, handleDeleteProduct} = useGlobalContext()


    
    return (
    <>
    {products.length == 0 ? <h2>Cargando...</h2> :
    <div className='contenedorProductDetail'>
        {
        productFound ?
        <>
            <div className='contenedorDeContenedores'>
                <div className='contenedorDivs'>
                    <div className='divNombreProductos'>
                        <h2 className='detailProdH2'>{productFound.nombre}</h2>
                    </div>  
                    <div className='detailProductsCompleto'>
                        <div className='detailProdImagen'>
                            <div className='contenedorFoto'>
                                <img src= {productFound.img} width='100%' minwidth='200px' alt='foto del producto'/>
                            </div>
                        </div>
                        <div className='detailProdResto'>
                            <p>{productFound.modeloExacto}</p>
                            <p>Colores Disponibles: {productFound.coloresDisponibles/* .join(', ') */}</p>
                            <span>Precio: $ {productFound.precio}</span>
                            <ProductCartButton id={productFound.id}/>
                            {/* <span> {productFound.memoria} </span> */}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='divDescripcionProducto'>
                <p className='descripcionProducto'>{productFound.descripcion}</p>
            </div>
        </>
        :
        <Error404 mensaje={'Producto no encontrado'}/>
        }           
    </div>
}
</>
)

}
export default ProductDetail