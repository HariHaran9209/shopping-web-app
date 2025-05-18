import React, { useState, useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { url, setToken } = useContext(StoreContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post(`${url}/api/user/login`, formData)
      setLoading(false)
      if (response.data.success === true) {
        setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        console.log(response.data.token)
        console.log(response)
        navigate('/')
      } else {
        setError(error.response?.data?.message || "Something went wrong");
        console.log(response.data)
        return
      }
      
      navigate('/')
    } catch (error) {
      setLoading(false)
      setError(error.response?.data?.message || "Something went wrong");
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <form className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">Login</h1>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            id="email"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="password"
            id="password"
            onChange={handleChange}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="absolute text-sm text-gray-500 dark:text-gray-400 transform scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          { loading ? 'Loading...' : "Login"}
        </button>
        <div className="flex gap-2 mt-5">
          <p>Don't Have An Account...!?</p>
          <Link to='/register'><span className="text-blue-500">Register</span></Link>
        </div>
        <p className="text-red-700 mt-5">{ error && 'Something Went Wrong!'}</p>
      </form>
    </div>
  )
}

export default Login
