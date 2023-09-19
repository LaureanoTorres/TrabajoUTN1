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
  if (PrecioSeleccionado){
      setListaProductos(ListaProductos.filter(producto => producto.precio >= 851))
  }
  else{
      setListaProductos(products) //esta mal usar otra vez listaproductos?
  }
}, [PrecioSeleccionado]
)


const handleCheckCategoriaSeleccionada = () => {
    if(CategoriasSeleccionada.find(producto => producto.categoria === categoria)){
      setCategoriasSeleccionada(CategoriasSeleccionada.filter(producto => producto.categoria !==categoria))

    } else{
      const CategoriaSeleccionada = products.find(producto => producto.categoria === categoria)
      setCategoriasSeleccionada([...CategoriasSeleccionada, CategoriaSeleccionada])
    }

}

/* useEffect(()=>{
  if (CategoriaSeleccionada){
      setListaProductos(ListaProductos.filter(producto => producto.categoria = CategoriaSeleccionada))
  }
  else{
      setListaProductos(products) //esta mal usar otra vez listaproductos?
  }
}, [CategoriaSeleccionada]
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
      handleCheckCategoriaSeleccionada
      }}>
      {children}
    </FilterContext.Provider>
  )
}

export const useFilterContext = () => useContext(FilterContext) 
export default FilterContextProvider