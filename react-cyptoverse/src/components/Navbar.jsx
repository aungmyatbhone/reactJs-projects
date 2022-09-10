import React, { useEffect, useRef, useState } from 'react'

import data from '../data/data'
import { useGlobalContext } from '../context'

import { Link } from 'react-router-dom'
import { Menu, X } from 'react-feather' 


const Navbar = () => {
    const {sidebarOpen, setSiderbarOpen, navIndex,setNavIndex} = useGlobalContext()
    let siderbarRef = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', (e) => {
            if(!siderbarRef.current.contains(e.target)){
                setSiderbarOpen(false)
            }

        })
    }) 

    useEffect(() => {
        const handleEvent = () => {
            setSiderbarOpen(false)
        }
        window.addEventListener('resize', handleEvent)
        return () => {
             window.removeEventListener('resize', handleEvent)
        }
    })
    return (
    <nav className='bg-green-300 '>
        <div className='glass2 lg:hidden px-4 w-screen fixed z-10 top-0 right-0'>
            <div className='flex flex-row-reverse justify-between items-center'>
                <Link to='/'>
                    <h3 className='font-bold font-source text-center text-lg text-white'>Cryptoverse</h3>
                </Link>
                <button onClick={() => setSiderbarOpen(!sidebarOpen)} className='hover:bg-gray-600 p-3 rounded-full text-white text-4xl'><Menu/></button>
            </div>
        </div>
        <div className='bg-gray-800 h-screen hidden lg:block'>
            <div>
                <Link to='/'>
                    <h3 className='font-bold font-source text-center py-4 text-3xl text-white'>Cryptoverse</h3>
                </Link>
            </div>
            <ul  className=' mt-8 col-span-1 px-2'>
                {
                    data.map((one,index) => (
                        <Link key={one.name} to={one.url}>
                            <li onClick={() => setNavIndex(index)} className={`${navIndex === index && 'bg-blue-500 text-white hover:bg-blue-600' } text-white hover:bg-gray-600 rounded-md py-3 px-4 my-4 flex justify-start items-center `}>
                                <span className='mr-4'>{one.icon} </span><p>{one.name}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>

        <aside ref={siderbarRef} className={`${sidebarOpen ? '': '-translate-x-full' } flex flex-col bg-gray-800 transition items-center  lg:hidden fixed top-0 left-0 w-20 h-screen z-20`}>
            <button onClick={() => setSiderbarOpen(!sidebarOpen)} className='hover:bg-gray-700 mt-2 p-3 rounded-full text-blue-600 text-4xl '><X /></button>
            <ul className=' flex flex-col  mt-8'>
                {data.map((one, index) => (
                    <Link to={one.url} key={one.name}>
                        <li onClickCapture={() => setSiderbarOpen(false)} onClick={() => setNavIndex(index)} className={`${navIndex === index ? ' bg-blue-700 text-white hover:bg-blue-600' : 'text-white px-6 hover:bg-gray-600'}  rounded-md py-6 flex items-center justify-center`}>
                                <span className=' '>{one.icon} </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </aside>
    </nav>
  )
}

export default Navbar