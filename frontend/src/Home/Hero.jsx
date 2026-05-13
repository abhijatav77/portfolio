import cv from '../assets/cv.pdf'
import abhi from '../assets/abhi.jpeg'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthProvider'
import AOS from "aos"
import 'aos/dist/aos.css'
import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import ParticlesBackground from '../navigation/ParticlesBackground'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
  const roles = useMemo(() => ["Full Stack Developer", "Software Developer"], [])

  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  const { isAuthenticated } = useAuth()

  useEffect(() => {
    const current = roles[index];
    const timeout = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length) setTimeout(() => setDeleting(true), 1200);
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
      else if (deleting && subIndex === 0) { setDeleting(false); setIndex(p => (p + 1) % roles.length) }
    }, deleting ? 40 : 60)

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, roles])

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    })
    AOS.refresh()
  }, [])
  return (
    <div className='min-h-screen relative flex justify-center items-center overflow-hidden'>
      <ParticlesBackground />
      <div className='absolute inset-0'>
        <div
          className='absolute top-30 left-15
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-50 max-h-50
          rounded-full
          bg-linear-to-r from-[#4010ef] via-[#3f0296] to-[#078eef57]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[50px] sm:blur-[60px] md:blur-[70px]
          animate-pulse'
        ></div>
        <div
          className='absolute bottom-0 right-0
          w-[70vw] sm:w-[50vw] md:w-[40vw]
          h-[70vw] sm:h-[50vw] md:h-[40vw]
          max-w-50 max-h-50
          rounded-full
          bg-linear-to-r from-[#4010ef] via-[#3f0296] to-[#078eef57]
          opacity-30 sm:opacity-20 md:opacity-10
          blur-[50px] sm:blur-[60px] md:blur-[70px]
          animate-pulse delay-500'
        ></div>
      </div>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 w-full'>
          <div className='p-10 md:w-[70%] w-full text-center md:text-start'>
            {/* <h1 data-aos="fade-right" className='text-white text-5xl font-bold'>
            </h1> */}
              <h2 data-aos="fade-right" className='text-white text-5xl font-bold'>Hi, I am</h2>
              <h2 data-aos="fade-right" className='text-white text-5xl font-extrabold mt-2'>Abhi Jatav</h2>

            <motion.div
              className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em] mt-2'
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className='text-purple-600'>
                {roles[index].substring(0, subIndex)}
              </span>
              <span className='inline-block w-0.5 ml-1 bg-white animate-pulse align-middle' style={{ height: "1em" }}></span>
            </motion.div>

            <p data-aos="fade-left" className='text-gray-300 text-xl'>
              I am a MERN stack developer currently pursuing a BCA, with experience building full-stack applications like a portfolio website and blog platform. I specialize in creating responsive user interfaces and efficient backend systems using modern web technologies.
            </p>
            <div className='flex sm:justify-start justify-center items-center gap-3 mt-5'>
              <a
                data-aos="fade-up"
                href={cv}
                target="_blank"
                rel="noreferrer"
                className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl group"
              >

                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffff_0%,transparent_60%,#00ffff_60%,transparent_100%)]" />

                <span className="relative z-10 px-6 py-3 text-white bg-black rounded-xl flex items-center gap-2">
                  Resume <FaLocationArrow />
                </span>
              </a>
              {isAuthenticated && (
                <Link
                  data-aos="fade-up"
                  to={"/project/show"}
                  className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl group md:w-fit"
                >
                  {/* Rotating Border */}
                  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffff_0%,transparent_30%,#ffff_60%,transparent_100%)]" />

                  {/* Button Content */}
                  <span className="relative z-10 px-6 py-3 text-white bg-black rounded-xl flex items-center gap-2">
                    Dashboard
                  </span>
                </Link>
              )}
            </div>
          </div>
          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'linear'
            }}
            className='md:w-[40%] w-full flex justify-center mt-20'>
            <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden'>
              <div
                className='absolute inset-0 border-4 border-dashed border-white rounded-full animate-spin'
                style={{ animationDuration: "80s", willChange: "transform" }}
              ></div>
              <div
                className='absolute inset-2 border-2 border-dashed border-white rounded-full animate-spin'
                style={{ animationDuration: "40s", willChange: "transform" }}
              ></div>
              <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }} className='absolute inset-4 border-4 rounded-full border-purple-600 overflow-hidden cursor-pointer'>
                <img
                  src={abhi}
                  alt=""
                  className='w-full h-full object-cover object-center rounded-full'
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Hero