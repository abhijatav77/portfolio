import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <nav className='fixed top-0 left-0 w-full backdrop-blur-2xl z-10 bg-[#050414]'>
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

        <div className='flex gap-2 text-gray-400'>
          <a href={'https://github.com/abhijatav77'} target='_blank'>
            <FaGithub size={23} className='cursor-pointer hover:text-white duration-300' />
          </a>
          <a href={'https://www.linkedin.com/in/abhi-jatav77'} target='_blank'>
            <FaLinkedin size={23} className='cursor-pointer hover:text-white duration-300' />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar