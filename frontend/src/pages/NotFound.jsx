import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='flex flex-col items-center justify-center h-screen text-white'>
                <h1 className='text-5xl font-bold'>Page Not Found</h1>
                <p className='text-3xl font-semibold mt-5'>404</p>
                <button onClick={() => navigate('/')} className='border border-gray-400 px-4 py-2 rounded-md mt-5 flex items-center gap-2'>
                    <FaArrowLeft />
                    Back to home
                </button>
            </div>
        </div>
    )
}

export default NotFound