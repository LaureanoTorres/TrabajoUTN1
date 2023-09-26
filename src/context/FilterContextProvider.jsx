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
  if (PrecioSeleccionado ){
      productosFiltrados = productosFiltrados.filter(producto => producto.precio >= 851);
  }
  setListaProductos(productosFiltrados)

}, [PrecioSeleccionado, CategoriasSeleccionada, MarcasSeleccionadas]
)

console.log(CategoriasSeleccionada)
const handleCheckCategoriaSeleccionada = (evento, checked) => {
    if(checked){
      setCategoriasSeleccionada([...CategoriasSeleccionada, evento])
    }else{
      setCategoriasSeleccionada(CategoriasSeleccionada.filter(categoria => categoria !== evento))
    }
  }


console.log(MarcasSeleccionadas)  
const handleCheckMarcaSeleccionada = (evento, checked) => {

    if(checked){
      setMarcasSeleccionadas([...MarcasSeleccionadas, evento])
    }else{
      setMarcasSeleccionadas(MarcasSeleccionadas.filter(marca => marca !== evento))
    }
  }



/*   if(CategoriasSeleccionada.includes(value)){
    setCategoriasSeleccionada(CategoriasSeleccionada.filter(categoria => categoria !== value))
  }
  else{
    setCategoriasSeleccionada([...CategoriasSeleccionada, value])
  } */



  /*   if(CategoriasSeleccionada.find(producto => producto.categoria === categoria)){
      setCategoriasSeleccionada(CategoriasSeleccionada.filter(producto => producto.categoria !==categoria))

    } else{
      const CategoriaSeleccionada = products.find(producto => producto.categoria === categoria)
      setCategoriasSeleccionada([...CategoriasSeleccionada, CategoriaSeleccionada]) */
    

   /*  useEffect(()=>{
      const newListaProductos = !CategoriasSeleccionada./* includes(producto.categoria) */
    /*   setListaProductos(newListaProductos)
    }, [CategoriasSeleccionada]) */
 
/* 
useEffect(()=>{
  if (CategoriasSeleccionada){
      setListaProductos(ListaProductos.filter(producto => producto.categoria = CategoriaSeleccionada))
  }
  else{
      setListaProductos(products) //esta mal usar otra vez listaproductos?
  }
}, [CategoriasSeleccionada]
) */


const MarcasUnicas = [...new Set(products.map(producto => producto.marca))]

const handleSelectMarca = (marca) => {

  if(MarcasSeleccionadas.find(producto => producto.marca === marca)){
    setMarcasSeleccionadas(MarcasSeleccionadas.filter(producto => producto.marca !== marca))
  } else{
    const MarcaSeleccionada = products.find(producto => producto.marca === marca)
    setMarcasSeleccionadas([...MarcasSeleccionadas, MarcaSeleccionada])
  }


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
      handleSelectMarca,
      MarcasUnicas,
      PrecioSeleccionado,
      handleCheckPrecioSeleccionado,
      handleCheckCategoriaSeleccionada,
      handleCheckMarcaSeleccionada
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext) 
export default FilterContextProvider