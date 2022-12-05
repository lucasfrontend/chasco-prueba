import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import TandasMain from './components/TandasMain'
import Data from './Pages/Data'
import Beer from './components/Beer'
import TableScreen from './components/dumbComponents/TableScreen'
import Page404 from './components/Page404'
import Setting from './Pages/Setting'
import './App.css'

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<TandasMain />} /> 
          <Route path='/data' element={<Data />}/>
          <Route path='/beer' element={<Beer />}/>
          <Route path='/setting' element={<Setting />}/>
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/table' element={<TableScreen />}></Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
