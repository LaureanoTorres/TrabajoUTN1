import React from 'react'
import PageRouter from './router/PageRouter'
import { Filtradores, Header } from './components'
import FilterContextProvider from './context/FilterContextProvider'



function App() {

  return (
    <>
    <FilterContextProvider>
      <Header/>
      <PageRouter/>
      <Filtradores/>
    </FilterContextProvider>
    </> 
  )
}

/*   <>
    <HeaderContextProvider>
    <Header/>
      <PageRouter/>
    </HeaderContextProvider>
    </> */

export default App
