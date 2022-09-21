import React from 'react'

import { Link } from 'react-router-dom'

import {categories} from '../utils/constant'
import { useGlobalContext } from '../utils/context'

const Navbar = () => {
  const {selectedCategory, setSelectedCategory} =  useGlobalContext()
  return (
    <nav className='lg:hidden w-full h-min'>
       <ul className='navbar overflow-y-scroll px-3 space-x-3  py-2 bg-gray-700 flex flex-row items-center'>
        {
          categories.map((category,idx) => (
            <Link key={idx} to={'/'}>
              <li onClick={() => setSelectedCategory(category.name)} key={idx} className={`whitespace-nowrap cursor-pointer flex flex-row items-center text-white rounded-full px-4 py-1 ${category.name === selectedCategory ? 'bg-red-600 hover:bg-red-700 ' : 'hover:bg-gray-600  bg-gray-700'}`}>
              <span className={`mr-3 ${ category.name === selectedCategory ? 'text-white' : 'text-red-600'}`}>{category.icon}</span>
              <h4>{category.name}</h4>
            </li>
            </Link>
          ))
        }
      </ul>
    </nav>
  )
}

export default Navbar