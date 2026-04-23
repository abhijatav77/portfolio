import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'

const ShowProject = () => {
    const [project, setProject] = useState([])
    const [loading, setLoading] = useState(true)

    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`http://localhost:4000/api/project-delete/${id}`, { withCredentials: true })
            toast.success(data.message)
            setProject((prev) => prev.filter((item) => item._id !== id))
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    const fetchProject = async () => {
        try {
            const { data } = await axios.get("http://localhost:4000/api/all-projects", { withCredentials: true })
            console.log(data.project)
            setProject(data.project)
        } catch (error) {
            console.log(error.message)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProject()
    }, [])

    return (
        <div>
            <div className='max-w-7xl mx-auto px-10 pt-20'>
                <div className='flex items-center justify-center flex-col'>
                    <h1 className='text-3xl font-bold text-white'>
                        PROJECTS
                    </h1>
                    <div className='w-20 h-1 bg-purple-600 mt-2'></div>
                    <p className='text-gray-300 font-medium text-xl text-center mt-4'>A showcase of the projects I have worked on</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-15 place-items-center'>
                    {loading ? (
                        <div className="col-span-full flex items-center justify-center h-40 gap-2">
                            <FaSpinner className='text-white animate-spin text-2xl' />
                            <p className='text-white'>Loading...</p>
                        </div>
                    ) : project && project.length > 0 ? (
                        project.map((element) => (
                            <div key={element._id} to={'https://blog-app-major.vercel.app'}
                                className='bg-gray-900 border border-white/20 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] rounded-md hover:-translate-y-1.5 duration-100'
                            >
                                <div>
                                    <img
                                        src={element.projectImage.url} alt=""
                                        className='w-full rounded-t-md'
                                    />
                                    <div className='px-4 mt-2'>
                                        <h1 className='text-white font-bold text-2xl'>{element.title}</h1>
                                        {/* <p className='text-gray-300 mt-1'>{element.description}</p> */}
                                    </div>
                                    {/* <div className='p-4 flex gap-2 flex-wrap'>
                                        {element.tools.map((el, index) => (
                                        <p key={index} className='bg-purple-700 text-white px-2 py-1 rounded-md font-semibold'>{el}</p>
                                        ))}
                                    </div> */}
                                </div>
                                <div className='flex justify-between p-4'>
                                    <Link to={`/project/update/${element._id}`} className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 duration-300'>
                                        Update
                                    </Link>
                                    <button onClick={() => handleDelete(element._id)} className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 duration-300'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full flex items-center justify-center h-40 gap-2">
                            <p className='text-white'>No project post yet!</p>
                        </div>
                    )
                    }
                </div>
            </div>
        </div>
    )
}

export default ShowProject