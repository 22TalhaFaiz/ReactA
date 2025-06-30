import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Planets from './Planets'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Planets/>}/>
    </Routes>
    
    
    
    </BrowserRouter>
    
    </>
  )
}

export default App