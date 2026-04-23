import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import express from '../assets/express.png'
import mongo from '../assets/mongo.png'
import c from '../assets/c.png'
import cpp from '../assets/cpp.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import vs from '../assets/vs.png'
import postman from '../assets/postman.png'
import compass from '../assets/compass.png'
import vercel from '../assets/vercel.png'

const Skill = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto px-10'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-bold text-white'>
                        SKILLS
                    </h1>
                    <div className='w-20 h-1 bg-purple-700 mt-2'></div>
                    <p className='text-gray-300 font-medium text-xl text-center mt-4'>A collection of my technical skills and expertise honed through various projects and <br />experiences</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10'>
                    <div className='bg-gray-900 backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>FRONTEND</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={html} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>HTML</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={css} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>CSS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={js} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>JavaScript</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={react} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>React JS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={tailwind} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>BACKEND</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={node} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Node JS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={express} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Express JS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={mongo} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Mongo DB</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>LANGUAGES</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={c} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>C</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={cpp} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>C++</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-900 backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>TOOLS</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={git} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Git</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={github} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>GitHUb</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={vs} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>VS Code</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={postman} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Postman</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={compass} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Compass</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition'>
                                    <img src={vercel} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Vercel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skill