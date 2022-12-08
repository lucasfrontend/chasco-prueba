import React from 'react'
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom'
import Layout from './components/Layout'
import TandasMain from './components/TandasMain'
import Data from './Pages/Data'
import Beer from './components/Beer'
import TableScreen from './components/dumbComponents/TableScreen'
import BeerTable from './Pages/BeerTable'
import Page404 from './components/Page404'
import Setting from './Pages/Setting'
import './App.css'
import TableScreen2 from './components/dumbComponents/TableScreen2'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/home' element={<TandasMain />} /> 
          <Route path='/data' element={<Data />}/>
          <Route path='/beer' element={<Beer />}/>
          <Route path='/setting' element={<Setting />}/>
          <Route path='*' element={<Page404 />} />
        </Route>
        <Route path='/table' element={<TableScreen2 />}></Route>
        <Route path='/deudores' element={<BeerTable />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
