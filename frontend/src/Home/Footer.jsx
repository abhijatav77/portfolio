import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <div>
            <div>
                <div className='space-y-4 flex justify-center flex-col items-center mt-20 border border-gray-800 p-5'>
                    <span className='text-white font-semibold text-2xl'>
                        <span className='text-purple-600 font-bold text-2xl'>{"<"}</span>
                        Abhi
                        <span className='text-purple-600 font-bold text-2xl'>{"/"}</span>
                        Jatav
                        <span className='text-purple-600 font-bold text-2xl'>{">"}</span>
                    </span>

                    <div className='flex gap-2 text-gray-400'>
                        <a href={'https://github.com/abhijatav77'} target='_blank'>
                            <FaGithub size={23} className='cursor-pointer hover:text-white duration-300' />
                        </a>
                        <a href={'https://www.linkedin.com/in/abhi-jatav77'} target='_blank'>
                            <FaLinkedin size={23} className='cursor-pointer hover:text-white duration-300' />
                        </a>
                        <a href={'https://x.com/abhi_jatav77'} target='_blank'>
                            <FaXTwitter size={23} className='cursor-pointer hover:text-white duration-300' />
                        </a>
                    </div>
                    <p className='text-white'>&copy; 2026 Abhi Jatav. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer