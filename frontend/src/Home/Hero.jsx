import cv from '../assets/cv.pdf'
import abhi from '../assets/abhi.jpeg'

const Hero = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-center gap-5 w-full'>
          <div className='p-10 md:w-[70%] w-full text-center md:text-start'>
            <h1 className='text-white text-7xl font-bold'>
              Hi, I am <br />Abhi Jatav
            </h1>
            <p className='text-gray-300 mt-10 text-xl'>I am a full-stack developer with over 1 year of experience in building scalable web applications. Skilled in both front-end and back-end development, I specialize in the MERN stack and modern technologies to create efficient, user-focused solutions.</p>
            <div className='mt-10 md:w-fit text-white bg-linear-to-r from-indigo-600 to-purple-600 px-4 py-2 rounded-lg font-semibold text-2xl shadow-md hover:scale-[1.03] duration-300 hover:bg-linear-to-r hover:from-indigo-700 hover:to-purple-700' >
            <a
              href={cv} 
              target='_blank'
            >
              Download Resume
            </a>
            </div>
          </div>
          <div className='md:w-[40%] w-full flex justify-center mt-20'>
            <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden'>
              <div
                className='absolute inset-0 border-4 border-dashed border-white rounded-full animate-spin'
                style={{ animationDuration: "80s", willChange: "transform" }}
              ></div>
              <div
                className='absolute inset-2 border-2 border-dashed border-white rounded-full animate-spin'
                style={{ animationDuration: "40s", willChange: "transform" }}
              ></div>
              <div className='absolute inset-4 border-4 rounded-full border-purple-600 overflow-hidden'>
                <img
                  src={abhi}
                  alt=""
                  className='w-full h-full object-cover object-center rounded-full'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero