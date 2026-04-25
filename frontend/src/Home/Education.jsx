
import rslc from '../assets/rslc.jpg'
import msu from '../assets/msu.png'

const Education = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-10 mt-20'>
        <div className='flex items-center justify-center flex-col mb-20'>
          <h1 className='text-3xl font-bold text-white'>
            EDUCATION
          </h1>
          <div className='w-20 h-1 bg-purple-600 mt-2'></div>
          <p className='text-gray-300 font-medium text-xl text-center mt-4'>A glimpse into my learning journey and academic achievements.</p>
        </div>
        <div className="relative max-w-6xl mx-auto">
          <div className='absolute left-1/2 top-0 h-full w-0.5 bg-white/60 -translate-x-1/2'></div>
          <div className='relative flex w-full mb-20 justify-start'>
            <div className='w-full sm:w-[46%] bg-gray-900 border border-white/70 rounded-2xl p-6 shadow-[0_0_25px_rgba(130,69,236,0.35)]'>
              <div className="flex items-center gap-5">
                <div className='w-50 h-16 bg-white rounded-md overflow-hidden'>
                  <img src={msu} alt="photo" className='w-full h-full bg-white object-cover' />
                </div>
                <div className=''>
                  <h1 className='text-xl font-bold text-white'>Bachelor of Computer Application (BCA)</h1>
                  <p className='text-gray-400'>Maa Shakumbhari University</p>
                  <p className='text-gray-400 text-xs'>August 2023 - June 2026</p>
                </div>
              </div>
              <h3 className='font-semibold text-white'>Grade: 7.8 CGPA</h3>
              <p className='text-gray-400'>Pursuing a Bachelor of Computer Applications (BCA) at Maa Shakumbhari University, I have built a strong foundation in data structures, algorithms, and web development. Through hands-on projects, I have gained experience in full-stack development, problem-solving, and creating scalable applications, preparing me for real-world challenges in the tech industry.</p>
            </div>
            <div className='hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10'>
              <div className='w-14 h-14 rounded-full bg-white border-4 border-[#8245ec] flex items-center justify-center'>
                <img src={msu} alt="srgc logo" className='rounded-full' />
              </div>
            </div>
          </div>
          <div className='relative flex w-full mb-20 justify-end'>
            <div className='w-full sm:w-[46%] bg-gray-900 border border-white/70 rounded-2xl p-6 shadow-[0_0_25px_rgba(130,69,236,0.35)]'>
              <div className="flex items-center gap-5">
                <div className='w-18 h-15 bg-white rounded-md overflow-hidden'>
                  <img src={rslc} alt="photo" className='w-full h-full bg-white object-cover' />
                </div>
                <div className=''>
                  <h1 className='text-xl font-bold text-white'>BSEB (XII)</h1>
                  <p className='text-gray-400'>RSLC +2 High School</p>
                  <p className='text-gray-400 text-xs'>March 2021 - March 2023</p>
                </div>
              </div>
              <h3 className='font-semibold text-white'>Grade: 67.8%</h3>
              <p className='text-gray-400'>Completed my Class XII from R.S.L.C +2 High School, where I developed a strong academic foundation along with discipline, analytical thinking, and problem-solving skills.</p>
            </div>
            <div className='hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10'>
              <div className='w-14 h-14 rounded-full bg-white border-4 border-[#8245ec] flex items-center justify-center'>
                <img src={rslc} alt="srgc logo" className='rounded-full' />
              </div>
            </div>
          </div>
          <div className='relative flex w-full mb-20 justify-start'>
            <div className='w-full sm:w-[46%] bg-gray-900 border border-white/70 rounded-2xl p-6 shadow-[0_0_25px_rgba(130,69,236,0.35)]'>
              <div className="flex items-center gap-5">
                <div className='w-18 h-15 bg-white rounded-md overflow-hidden'>
                  <img src={rslc} alt="photo" className='w-full h-full bg-white object-cover' />
                </div>
                <div className=''>
                  <h1 className='text-xl font-bold text-white'>BSEB (X)</h1>
                  <p className='text-gray-400'>RSLC +2 High School</p>
                  <p className='text-gray-400 text-xs'>March 2020 - March 2021</p>
                </div>
              </div>
              <h3 className='font-semibold text-white'>Grade: 72.4%</h3>
              <p className='text-gray-400'>Completed my Class X from R.S.L.C +2 High School, building core fundamentals and a keen interest in learning, which laid the groundwork for my future academic journey.</p>
            </div>
            <div className='hidden md:block absolute left-1/2 top-6 -translate-x-1/2 z-10'>
              <div className='w-14 h-14 rounded-full bg-white border-4 border-[#8245ec] flex items-center justify-center'>
                <img src={rslc} alt="srgc logo" className='rounded-full' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Education