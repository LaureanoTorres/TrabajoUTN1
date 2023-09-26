import React from 'react'
import PageRouter from './router/PageRouter'
import { Filtradores, Header } from './components'
import FilterContextProvider from './context/FilterContextProvider'
import { Home } from './pages'



function App() {

  return (
    <>
    <FilterContextProvider>
      <Header/>
      <PageRouter/>
    </FilterContextProvider>
    </> 
  )
}

export default App
