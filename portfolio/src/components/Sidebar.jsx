import React from 'react'

import {constant} from '../utils/constant'
import { useGlobalContext } from '../context'

const Sidebar = () => {
    const {sidebar} = useGlobalContext()
  return (
    <aside className={`${sidebar ? '' : 'translate-x-full'} transition border-2 border-orange-500 md:hidden bg-mainBlack h-screen w-3/4 z-10 fixed top-0 right-0`}>
        <ul className='flex h-full p-3 mt-10 space-y-7 flex-col '>
            {constant.map((one, index) => {
                return (
                    <li key={index} className='bg-green-500 text-white'>
                        <h3>{one.name}</h3>
                        <a href={one.url}></a>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidebar