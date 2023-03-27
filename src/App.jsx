import React from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import Layout from './components/Layout'
import TandasMain from './Manifest/TandasMain'
import Beer from './components/Beer'
import Page404 from './components/Page404'
import Setting from './Pages/Setting'
//import Spinner from './components/spinner'
import './App.css'
import TableScreen2 from './Manifest/TableScreen2'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Login } from './auth/Login'
import { Register } from './auth/Register'
import { AuthProvider} from './context/authContext'
import { SdChContextProvider } from './context/sdchContext'
import { ProtectedRoute } from './auth/protectedRoutes'
//borrar?
import './firebase'
import WeatherPanel from './components/Weather/WeatherPanel'

function App() {

  return (
    <HashRouter>
      <AuthProvider>
        <SdChContextProvider>
          <Routes>
            <Route path='/' element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
            <Route path='/welcome' element={
              <ProtectedRoute>
                <WeatherPanel />
              </ProtectedRoute>
            } /> 
            <Route path='/home' element={
              <ProtectedRoute>
                <TandasMain />
              </ProtectedRoute>
            } /> 
            <Route path='/data' element={
              <ProtectedRoute>
                <Page404 />
              </ProtectedRoute>
            }/>
            <Route path='/beer' element={
              <ProtectedRoute>
                <Beer />
              </ProtectedRoute>
            }/>
            <Route path='/setting' element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }/>
              <Route path='*' element={<Page404 />} />
            </Route>
            <Route path='/table' element={<TableScreen2 />}></Route>
            <Route path='/login' element={<Login />} /> 
            <Route path='/register' element={<Register />} /> 
          </Routes>
          <ToastContainer/>
        </SdChContextProvider>
      </AuthProvider>
    </HashRouter>
  )
}

export default App
