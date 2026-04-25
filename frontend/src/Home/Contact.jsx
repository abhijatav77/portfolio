import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { BACKEND_URL } from "../utils/Utils"

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [messages, setMessages] = useState("")

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(`${BACKEND_URL}/contact`, { name, email, subject, messages }, { withCredentials: true })
      toast.success(data.message)
      setName("")
      setEmail("")
      setSubject("")
      setMessages("")
    } catch (error) {
      console.log(error.message)
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }
  return (
    <div>
      <div className='max-w-7xl mx-auto px-10 mt-20'>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold text-white'>
            CONTACT
          </h1>
          <div className='w-20 h-1 bg-purple-600 mt-2'></div>
          <p className='text-gray-300 font-medium text-xl text-center mt-4'>Have a question or want to work together? Drop me a message!</p>
        </div>
        <div className='flex items-center justify-center mt-10'>
          <form onSubmit={handleForm} className='bg-gray-900 w-full max-w-md backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
            <h1 className='text-white text-2xl font-semibold text-center'>Connect with me</h1>
            <div className='mt-4'>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder='Your Name'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Your Email'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder='Subject'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <textarea
                rows={4}
                type="text"
                value={messages}
                onChange={(e) => setMessages(e.target.value)}
                placeholder='Message'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <button
              type="submit"
              className='mt-4 w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 duration-300 text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact