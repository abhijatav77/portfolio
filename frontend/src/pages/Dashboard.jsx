import axios from 'axios'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { BACKEND_URL } from '../utils/Utils'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='min-h-screen flex items-center justify-center pt-20'>
      <div className='max-w-7xl mx-auto px-10'>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold text-white'>
            PROJECT
          </h1>
          <div className='w-20 h-1 bg-purple-600 mt-2'></div>
          <p className='text-gray-300 font-medium text-xl text-center mt-4'>I’d love to hear from you—reach out for any opportunities or questions!</p>
        </div>
        <div className='mt-10'>
            <div className='flex justify-center items-center flex-wrap gap-5'>
                <div className='bg-indigo-600 p-10 rounded-md hover:scale-[1.02] duration-200'>
                    <Link to={'/project/creation'} className='text-white text-2xl'>
                        Creation
                    </Link>
                </div>
                <div className='bg-indigo-600 p-10 rounded-md hover:scale-[1.02] duration-200'>
                    <Link to={'/project/show'} className='text-white text-2xl'>
                        Projects
                    </Link>
                </div>                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard