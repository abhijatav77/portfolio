import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { BACKEND_URL } from '../utils/Utils'
import { useAuth } from '../context/AuthProvider'

const Project = () => {
  const {loading, project} = useAuth()

  return (
    <div>
      <div className='max-w-7xl mx-auto px-10 mt-20'>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold text-white'>
            PROJECTS
          </h1>
          <div className='w-20 h-1 bg-purple-600 mt-2'></div>
          <p className='text-gray-300 font-medium text-xl text-center mt-4'>A showcase of the projects I have worked on</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-15 place-items-center'>
          {loading ? (
             <div className="col-span-full flex items-center justify-center h-40 gap-2">
              <FaSpinner className='text-white animate-spin text-2xl' />
              <p className='text-white'>Loading...</p>
            </div>
          ) : project && project.length > 0 ? (
            project.map((element) => (
              <div key={element._id} to={'https://blog-app-major.vercel.app'}
                className='bg-gray-900 border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] rounded-md hover:-translate-y-1.5 duration-100'
              >
                <div>
                  <img
                    src={element.projectImage.url} alt=""
                    className='w-full rounded-t-md'
                  />
                  <div className='px-4 mt-2'>
                    <h1 className='text-white font-bold text-2xl'>{element.title}</h1>
                    <p className='text-gray-300 mt-1'>{element.description}</p>
                  </div>
                  <div className='p-4 flex gap-2 flex-wrap'>
                    {element.tools.map((el, index) => (
                      <p key={index} className='bg-purple-700 text-white px-2 py-1 rounded-md font-semibold'>{el}</p>
                    ))}
                  </div>
                </div>
                <div className='flex'>
                  <a href={element.github} target='_blank' rel="noopener noreferrer" className='text-white font-semibold bg-indigo-950 w-full py-2 hover:bg-blue-600 cursor-pointer duration-300 rounded-l-md text-center'>Source Code</a>
                  <a href={element.live} target='_blank' rel="noopener noreferrer" className='text-white font-semibold bg-blue-600 w-full py-2 hover:bg-indigo-950 cursor-pointer duration-300 rounded-r-md text-center'>Live Preview</a>
                </div>
              </div>
            ))
          ) : (
           <div className="col-span-full flex items-center justify-center h-40 gap-2">
              <p className='text-white'>No project post yet!</p>
            </div>
          )
          }

        </div>
      </div>
    </div>
  )
}

export default Project