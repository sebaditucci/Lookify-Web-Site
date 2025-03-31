import React from 'react'
import Home from './Pages/Home'
import ProductosPage from './Pages/ProductosPage';
import {Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = '/productos' element = {<ProductosPage />}></Route>
    </Routes>
  )
}

