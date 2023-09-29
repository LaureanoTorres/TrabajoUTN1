import React, {useContext, useState, createContext, useEffect} from 'react'
import { products } from '../productsDB'



const FilterContext = createContext()


const FilterContextProvider = ({children}) => {

const [ProductosSelecionados, setProductosSelecionados] = useState([])

const [SearchString, setSearchString] = useState('')

const [ListaProductos, setListaProductos] = useState(products)

const [MarcasSeleccionadas, setMarcasSeleccionadas] = useState([])

const [CategoriasSeleccionada, setCategoriasSeleccionada] = useState([])

const [PrecioSeleccionado, setPrecioSeleccionado] = useState(false)

const [PriceRangeMin, setPriceRangeMin] = useState(0);

const [PriceRangeMax, setPriceRangeMax] = useState(2500);

const[ClaseOculta, setClaseOculta] = useState(false)



const handleFilterProducto = (e) =>{
  setSearchString(e.target.value)
} 

const handleSelectProduct = (id) => {

  if(ProductosSelecionados.find(producto => producto.id ===id)){
  setProductosSelecionados(ProductosSelecionados.filter(producto => producto.id !==id))
  
} else{
  const ProductoSelecionado = products.find(producto => producto.id === id)
  setProductosSelecionados([...ProductosSelecionados, ProductoSelecionado ])

}
}

const handleCheckPrecioSeleccionado = () => {
  setPrecioSeleccionado(!PrecioSeleccionado)
}

useEffect(()=>{
  let productosFiltrados = products;          
  if(CategoriasSeleccionada.length !== 0){
      productosFiltrados = productosFiltrados.filter(producto => CategoriasSeleccionada.includes(producto.categoria));
  }
  if(MarcasSeleccionadas.length !== 0){
    productosFiltrados = productosFiltrados.filter(producto => MarcasSeleccionadas.includes(producto.marca));
  }
  if(PriceRangeMin !==0){
    productosFiltrados = productosFiltrados.filter(producto => producto.precio >= PriceRangeMin)
  }
  if(PriceRangeMax !==2500){
    productosFiltrados = productosFiltrados.filter(producto => producto.precio <= PriceRangeMax)
  }
 /*  if(SearchString.length !==0 && SearchString!=='' && SearchString!==undefined){
    console.log('esta funcionando')
    productosFiltrados = productosFiltrados.filter(producto => producto.nombre.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase()))
  } */
  setListaProductos(productosFiltrados)

}, [CategoriasSeleccionada, MarcasSeleccionadas, PriceRangeMin, PriceRangeMax]
)

const handleCheckCategoriaSeleccionada = (evento, checked) => {
    if(checked){
      setCategoriasSeleccionada([...CategoriasSeleccionada, evento])
    }else{
      setCategoriasSeleccionada(CategoriasSeleccionada.filter(categoria => categoria !== evento))
    }
  }


const handleCheckMarcaSeleccionada = (evento, checked) => {

    if(checked){
      setMarcasSeleccionadas([...MarcasSeleccionadas, evento])
    }else{
      setMarcasSeleccionadas(MarcasSeleccionadas.filter(marca => marca !== evento))
    }
  }

const handlePriceChangeMin = (event) => { 
  setPriceRangeMin(event.target.value);
  };
  
const handlePriceChangeMax = (event) => { 
    setPriceRangeMax(event.target.value);
    };
 
const handleClaseOculta = ()=> {
  setClaseOculta(!ClaseOculta);
}



  return (
    <FilterContext.Provider value={{
      ProductosSelecionados,
      SearchString,
      ListaProductos,
      handleFilterProducto,
      handleSelectProduct,
      MarcasSeleccionadas,
      CategoriasSeleccionada,
      PrecioSeleccionado,
      handleCheckPrecioSeleccionado,
      handleCheckCategoriaSeleccionada,
      handleCheckMarcaSeleccionada,
      PriceRangeMin,
      PriceRangeMax,
      handlePriceChangeMin,
      handlePriceChangeMax,
      handleClaseOculta,
      ClaseOculta
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext) 
export default FilterContextProvider