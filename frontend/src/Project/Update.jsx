import axios from 'axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate, useParams } from 'react-router-dom'
import { BACKEND_URL } from '../utils/Utils'

const Update = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [tools, setTools] = useState("")
  const [github, setGithub] = useState("")
  const [live, setLive] = useState("")
  const [projectImage, setProjectImage] = useState(null)
  const [projectImagePreview, setProjectImagePreview] = useState()

  const navigate = useNavigate()

  const { id } = useParams()

  const fetchProject = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/single-projects/${id}`, { withCredentials: true })
      setTitle(data.project.title)
      setDescription(data.project.description)
      setTools(data.project.tools)
      setGithub(data.project.github)
      setLive(data.project.live)
      setProjectImagePreview(data.project.projectImage.url)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  useEffect(() => {
    fetchProject()
  }, [])

  const handleForm = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("tools", tools)
      formData.append("github", github)
      formData.append("live", live)
      if (projectImage instanceof File) {
        formData.append("projectImage", projectImage)
      }
      const { data } = await axios.put(`${BACKEND_URL}/project-update/${id}`, formData, { withCredentials: true })
      toast.success(data.message)
      navigate("/project/show")
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center pt-20'>
      <div className='max-w-7xl mx-auto px-10'>
        <div className='flex items-center justify-center flex-col'>
          <h1 className='text-3xl font-bold text-white'>
            PROJECT
          </h1>
          <div className='w-20 h-1 bg-purple-600 mt-2'></div>
          <p className='text-gray-300 font-medium text-xl text-center mt-4'>
            Update your project details, including description, tools, and links.
          </p>
        </div>
        <div className='flex items-center justify-center mt-10'>
          <form onSubmit={handleForm} className='bg-gray-900 w-full max-w-md backdrop-blur-md px-6 py-8 rounded-md border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'>
            <h1 className='text-white text-2xl font-semibold text-center'>Update Project</h1>
            <div className='mt-4'>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder='Title'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <input
                type="text"
                value={tools}
                onChange={(e) => setTools(e.target.value)}
                placeholder='Eg - HTML, CSS, JS...'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <input
                type="text"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                placeholder='Github URL'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <input
                type="text"
                value={live}
                onChange={(e) => setLive(e.target.value)}
                placeholder='Deployed URL'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4'>
              <textarea
                rows={4}
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Description'
                className='border border-white/20 rounded-md focus:outline-none px-4 py-2 text-white focus:border-purple-600 w-full'
              />
            </div>
            <div className='mt-4 text-white'>
              <img src={projectImagePreview ? `${projectImagePreview}` : "/imgPL.webp"} alt="Project Image" className='w-full h-30 border border-gray-400 rounded-md' />
              <input type="file" onChange={(e) => setProjectImage(e.target.files[0])} className='border border-gray-400 rounded-md mt-4 w-full px-4 py-2' />
            </div>
            <button
              type="submit"
              className='mt-4 w-full bg-linear-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 duration-300 text-white font-semibold px-4 py-2 rounded-md cursor-pointer'
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update