import React from 'react'
import App from './App'
import Ventas from './Ventas'
import  Transaciones from './Transaciones'
import { Routes, Route} from 'react-router-dom'
import Home from './Home'
import Productos from './Productos'


const MyRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="ventas" element={<Ventas />}/>
        <Route path="productos" element={<Productos />}/>
        <Route path="transaciones" element={<Transaciones />}/>
      </Routes>
  )
}

export default MyRoutes