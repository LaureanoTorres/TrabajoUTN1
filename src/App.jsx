import React from 'react'
import PageRouter from './router/PageRouter'
import { Filtradores, Footer, Header } from './components'
import FilterContextProvider from './context/FilterContextProvider'



function App() {

  return (
    <>
    <FilterContextProvider>
      <Header/>
      <PageRouter/>
      <Footer/>
    </FilterContextProvider>
    </> 
  )
}

export default App
