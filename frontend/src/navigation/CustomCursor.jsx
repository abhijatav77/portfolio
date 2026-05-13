import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
    const [position, setPosition] = useState({x:0, y:0})

    useEffect(() => {
        const moveHandler = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }
        window.addEventListener('mousemove', moveHandler)

        return () => {
            window.removeEventListener('mousemove', moveHandler)
        }
    })
  return (
    <div className='pointer-events-none fixed top-0 left-0 z-9999' style={{transform: `translate(${position.x - 30}px, ${position.y - 30}px)`}}>

        <div className='w-15 h-15 bg-linear-to-r rounded-full from-pink-500 to-indigo-500 blur-2xl opacity-100'></div>

    </div>
  )
}

export default CustomCursor