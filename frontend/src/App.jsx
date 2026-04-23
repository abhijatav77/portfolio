import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './navigation/Navbar'
import Create from './Project/Create'
import NotFound from './pages/NotFound'
import ShowProject from './Project/ShowProject'
import Update from './Project/Update'

const App = () => {
  return (
    <div className='bg-[#050414]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/creation' element={<Create />} />
        <Route path='/project/show' element={<ShowProject />} />
        <Route path='/project/update/:id' element={<Update />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App