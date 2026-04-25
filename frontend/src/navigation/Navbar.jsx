import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGithub, FaHamburger, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BACKEND_URL } from '../utils/Utils'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const {isAuthenticated, logout, loading} = useAuth()

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className='fixed top-0 left-0 w-full backdrop-blur-2xl z-10'>
      <div className='max-w-7xl mx-auto flex justify-between items-center p-4'>
        <Link to={"/"} className='text-white font-semibold text-xl'>
          <span className='text-purple-600 font-bold text-2xl'>{"<"}</span>
          Abhi
          <span className='text-purple-600 font-bold text-2xl'>{"/"}</span>
          Jatav
          <span className='text-purple-600 font-bold text-2xl'>{">"}</span>
        </Link>

        <ul className='hidden md:flex gap-4 text-gray-300'>
          <li className='hover:text-purple-700 duration-300'>
            <button onClick={() => handleScroll("home")}>Home</button>
          </li>
          <li className='hover:text-purple-700 duration-300'>
            <button onClick={() => handleScroll("skill")}>Skill</button>
          </li>
          <li className='hover:text-purple-700 duration-300'>
            <button onClick={() => handleScroll("project")}>Project</button>
          </li>
          <li className='hover:text-purple-700 duration-300'>
            <button onClick={() => handleScroll("education")}>Education</button>
          </li>
          <li className='hover:text-purple-700 duration-300'>
            <button onClick={() => handleScroll("contact")}>Contact</button>
          </li>
        </ul>

        <div className='hidden md:flex gap-2 text-gray-400 items-center'>
          <a href={'https://github.com/abhijatav77'} target='_blank'>
            <FaGithub size={23} className='cursor-pointer hover:text-white duration-300' />
          </a>
          <a href={'https://www.linkedin.com/in/abhi-jatav77'} target='_blank'>
            <FaLinkedin size={23} className='cursor-pointer hover:text-white duration-300' />
          </a>
          {!isAuthenticated ? (
            <Link to={"/project/login"} className='bg-blue-600 hover:bg-blue-700 duration-300 text-white px-4 py-1 rounded-md'>Login</Link>
          ) : (
            <button onClick={logout} className='bg-red-600 hover:bg-red-700 duration-300 text-white px-4 py-1 rounded-md'>Logout</button>
          )}
        </div>
        <div className='md:hidden'>
          <FaHamburger
            className='text-white cursor-pointer'
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>
      {isOpen && (
        <ul className='md:hidden absolute right-2 p-5 rounded-md text-center gap-4 bg-gray-300 text-black font-semibold space-y-4'>
          <li onClick={() => handleScroll("home")} className='border-b w-full pb-2'>Home</li>
          <li onClick={() => handleScroll("skill")} className='border-b w-full pb-2'>Skill</li>
          <li onClick={() => handleScroll("project")} className='border-b w-full pb-2'>Project</li>
          <li onClick={() => handleScroll("education")} className='border-b w-full pb-2'>Education</li>
          <li onClick={() => handleScroll("contact")} className='border-b w-full pb-2'>Contact</li>

          {!isAuthenticated ? (
            <Link to={"/project/login"} className='bg-blue-600 text-white px-4 py-1 rounded-md'>Login</Link>
          ) : (
            <button onClick={logout} className='bg-red-600 text-white px-4 py-1 rounded-md'>Logout</button>
          )}
        </ul>
      )}
    </nav>
  )
}

export default Navbar