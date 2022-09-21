import React, {useState} from 'react'

import {Link, useNavigate} from 'react-router-dom'
import {Search, YouTube} from '@mui/icons-material'
 
const Searchbar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
    setSearchTerm('')
  }

  return (
    <div className='col-span-5 fixed z-40 top-0 right-0 w-screen px-1 py-2 bg-gray-700 flex justify-around items-center'>
      <div className='text-red-600 '> 
        <Link to='/'> 
          <div className='flex items-center'><YouTube fontSize='large' /> <h1 className='text-white font-semibold mb-0'>UTube</h1></div>
        </Link>
      </div>
      <div className=''>
        <form onSubmit={handleSubmit} action="" className='flex items-center h-10'>
          <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className='bg-gray-800 w-56 md:w-60 h-full text-white p-2 focus:outline-none border-red-700 ' type="text" />
        <button type='submit' className='bg-red-600 rounded-r-md active:bg-red-800 hover:bg-red-700 h-full w-16 text-white'> <Search /> </button>
        </form>
      </div>
    </div>
  )
} 

export default Searchbar