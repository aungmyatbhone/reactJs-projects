import React from 'react'

import { Link } from 'react-router-dom'

import { useGlobalContext } from '../utils/context'
import {categories} from '../utils/constant'

const Navbar = () => {
  const {selectedCategory, setSelectedCategory} =  useGlobalContext()

  return (
    <aside className='hidden h-full overflow-scroll w-1/6 col-span-1 lg:block bg-gray-800'>
      <ul className={`p-3 space-y-3 mb-20 flex flex-col justify-center`}>
        {
          categories.map((category,index) => (
            <Link to='/' key={index}>
              <li key={category.name} onClick={() => setSelectedCategory(category.name)} className={` cursor-pointer text-white select-none rounded-full px-4 py-2 text-sm  ${category.name === selectedCategory ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-gray-700'}`}>
              <span className={`mr-3 text-sm whitespace-nowrap ${category.name === selectedCategory ? 'text-white' : 'text-red-600'}`}>{category.icon}</span>
              {category.name}
            </li>
            </Link>
          ))
        }
      </ul>
    </aside>
  )
}

export default Navbar