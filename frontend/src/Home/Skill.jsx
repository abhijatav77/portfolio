import React, { useEffect } from 'react'
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
import AOS from "aos"
import 'aos/dist/aos.css'

const Skill = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true,
        })
        AOS.refresh()
    }, [])

    return (
        <div className='overflow-hidden'>
            <div className='max-w-7xl mx-auto px-10'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 data-aos="fade-right" className='text-3xl font-bold text-white'>
                        SKILLS
                    </h1>
                    <div data-aos="zoom-in-out" className='w-20 h-1 bg-purple-700 mt-2'></div>
                    <p data-aos="fade-left" className='text-gray-300 font-medium text-xl text-center mt-4'>Technologies and tools I use to design, develop, and deploy applications.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10'>
                    <div
                        data-aos="zoom-in-up"
                        className='bg-[radial-gradient(ellipse_at_right_top,#2563eb,#000_47%_100%)] border border-[rgba(59,130,246,0.4)] hover:border-[rgba(96,165,250,0.5)] backdrop-blur-md px-6 py-8 rounded-md hover:shadow-[0_0_20px_1px_rgba(59,130,246,0.35)] hover:-translate-y-0.5 transition-all duration-300'
                    >
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>FRONTEND</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={html} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>HTML</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={css} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>CSS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={js} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>JavaScript</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={react} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>React JS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={tailwind} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Tailwind CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in-up"
                        className='bg-[radial-gradient(ellipse_at_right_top,#d946efcc,#000_47%_100%)] border border-[rgba(232,121,249,0.35)] hover:border-[rgba(250,232,255,0.6)] backdrop-blur-md px-6 py-8 rounded-md hover:shadow-[0_0_25px_rgba(217,70,239,0.35)] hover:-translate-y-1 transition-all duration-300'
                    >
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>BACKEND</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={node} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Node JS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={express} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Express JS</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={mongo} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Mongo DB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='bg-gray-900 backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>LANGUAGES</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={c} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>C</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={cpp} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>C++</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div
                        data-aos="zoom-in-up"
                        className='bg-[radial-gradient(ellipse_at_right_top,#7c3aedcc,#000_47%_100%)] border border-[rgba(167,139,250,0.45)] hover:border-[rgba(196,181,253,0.6)] backdrop-blur-md px-6 py-8 rounded-md hover:shadow-[0_0_20px_1px_rgba(124,58,237,0.35)] hover:-translate-y-0.5 transition-all duration-300'
                    >
                        <h2 className='text-2xl font-semibold text-gray-400 mb-6 text-center'>TOOLS</h2>
                        <div>
                            <div className='flex flex-wrap justify-center gap-3'>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={git} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Git</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={github} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>GitHUb</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={vs} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>VS Code</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={postman} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Postman</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
                                    <img src={compass} alt="html logo" className='w-6 h-6' />
                                    <p className='text-sm text-gray-300'>Compass</p>
                                </div>
                                <div className='flex items-center border border-gray-700 rounded-full gap-2 px-4 py-2 text-center hover:border-[#8245ec] transition hover:-translate-y-0.5'>
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