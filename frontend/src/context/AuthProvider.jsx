import React, { createContext, useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { BACKEND_URL } from '../utils/Utils'
import axios from 'axios'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [project, setProject] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const fetchProfile = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/admin/my-profile`, { withCredentials: true })
      console.log("Profilesssssssss", data)
      setIsAuthenticated(true)
    } catch (error) {
      console.log(error.message)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }
  const fetchProject = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/all-projects`, { withCredentials: true })
      console.log(data.project)
      setProject(data.project)
    } catch (error) {
      console.log(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
    fetchProject()
  }, [])

  const logout = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/admin/logout`, { withCredentials: true })
      toast.success(data.message)
      setIsAuthenticated(false)
      navigate('/project/login')
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, logout, fetchProfile, project }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}