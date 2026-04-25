import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './navigation/Navbar'
import Create from './Project/Create'
import NotFound from './pages/NotFound'
import ShowProject from './Project/ShowProject'
import Update from './Project/Update'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import axios from 'axios'
import { BACKEND_URL } from './utils/Utils'
import { useAuth } from './context/AuthProvider'

const App = () => {
  const { isAuthenticated, loading } = useAuth()
  return (
    <div className='bg-[#050414]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project/login' element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route
          path='/project/dashboard'
          element={
            loading ? (
              <div className="text-white text-center mt-10">Loading...</div>
            ) : isAuthenticated ? (
              <Dashboard />
            ) : (
              <Login />
            )
          }
        />
        <Route
          path='/project/creation'
          element={
            loading ? <div>Loading...</div> : isAuthenticated ? <Create /> : <Login />
          }
        />

        <Route
          path='/project/show'
          element={
            loading ? <div>Loading...</div> : isAuthenticated ? <ShowProject /> : <Login />
          }
        />

        <Route
          path='/project/update/:id'
          element={
            loading ? <div>Loading...</div> : isAuthenticated ? <Update /> : <Login />
          }
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App