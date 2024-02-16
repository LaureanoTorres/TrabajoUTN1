import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom'
import {BiSolidDownArrow} from 'react-icons/bi'
import { useFilterContext } from '../context/FilterContextProvider'
import { Filtradores } from '../components'
import { useGlobalContext } from '../context/GlobalContextProvider'
import { URL_API } from '../../config'


/* const Home = () => {
const {ListaProductos,SearchString, handleClaseOculta} = useFilterContext()
  return (
    
    <div className='componentesDelHome'>
          <div className='separadorHome'>
              <h1 className='tituloPrincipal'>Bienvenido a TechStore</h1> 
              <h3 id='toggleFiltradores' onClick={handleClaseOculta}>Desplegar Filtradores <BiSolidDownArrow className='BiSolidDownArrow' onClick={handleClaseOculta}/></h3> 
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
} */



const Home = () => {
  const { SearchString, handleClaseOculta, ClaseOculta, ListaProductos, setListaProductos, setProducts} = useFilterContext();
  const {setCartProducts} = useGlobalContext();
  const { pid } = useParams();
 /*  const [products, setProducts] = useState([]); */
  const navigate = useNavigate();
  const token = localStorage.getItem('auth-token-app')

  if(!token){
    navigate('/login')
  }

  useEffect(() => {
    fetch(URL_API + '/api/products', {
      headers: {
        'Authorization': localStorage.getItem('auth-token-app')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === 401) {
          navigate('/');
        }
        console.log(data);
        setListaProductos(data.products);
        setProducts(data.products);
        setCartProducts(data.products)
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, [navigate]);

  return (
    <div className='componentesDelHome'>
      <div className='separadorHome'>
        <h1 className='tituloPrincipal'>Bienvenido a TechStore</h1>
        <h3 id='toggleFiltradores' onClick={handleClaseOculta}>
          Desplegar Filtradores <BiSolidDownArrow className='BiSolidDownArrow' onClick={handleClaseOculta}/>
        </h3>
      </div>
      <div /* className='sidebar'  */className={`sidebar ${ClaseOculta ? 'ClaseShow' : 'claseHide'}`} >
          <Filtradores/>
        </div>
      <div className='productosDelHome'>
        <br />
        {ListaProductos.length === 0 ? (
          <h2>Cargando...</h2>
        ) : (
          <div className='padreTarjetas'>
            {ListaProductos
              .filter(product => product.nombre.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase()))
              .map(({ categoria, nombre, id, precio, img, memoria, marca, descripcion, coloresDisponibles }) => (
                <Card
                  categoria={categoria} nombre={nombre} id={id} precio={precio} img={img} memoria={memoria} marca={marca} descripcion={descripcion} coloresDisponibles={coloresDisponibles} key={id}/>
              ))
              }
          </div>
        )}
      
      </div>
    </div>
  );
}

/* <div>
<h1>Lista de productos</h1>
{products.length === 0 ? <h2>Cargando...</h2> : products.map(product => (
  <Product key={product.id} {...product}/>
))}
</div> */


/* const Home = () => {
  const {pid} = useParams()
  const [products, setProducts] = useState([])
  const navigate = useNavigate()
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
return (
  <div>
      <h1>Lista de productos</h1>
      {products.length == 0 ? <h2>Cargando...</h2> : products.map(product =>
          <Product key={product.id} {...product}/>
      )}
  </div>
)
}
 */

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
        <Link className='tarjetasVerDetalle' to={'/detail/' + id}>Ver detalle</Link>
      </div>
  )
}

export {Card}


const Product = ({nombre, precio, stock, id}) =>{
  return (
      <div >
          <h2>Nombre {nombre}</h2>
          <p>Precio {precio}</p>
          <span>Stock: {stock}</span>
          <br/>
          <Link to={'/detail/' + id}>Ver Detalle </Link>
      </div>
  )
}