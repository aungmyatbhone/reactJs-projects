import React, { useEffect, useRef, useState } from 'react'

import { Tooltip } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import { useGlobalContext } from '../context'
import { constant } from '../utils/constant';

const Navbar = () => {
    const {darkmode, setDarkmode,sidebar, setSidebar} = useGlobalContext();
    const [index, setIndex] = useState(0)

    const navbar = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            navbar.current.classList.toggle("scroll", window.scrollY > 0)
        })
    })
  return (
    <nav ref={navbar} className='sticky z-30 md:justify-around py-10 text-xl items-center h-10 transiton3 top-0 left-0 w-screen  px-5 flex justify-between '>
            <button onClick={() => setSidebar(!sidebar)} className='md:hidden space-y-2'>
                <div className='w-14 bg-mainNuclear h-1  '></div>
                <div className='w-10 bg-mainNuclear h-1  '></div>
                <div className='w-12 bg-mainNuclear h-1  '></div>
            </button>
            <ul className='hidden md:flex space-x-8  items-center space-'>
                {
                    constant.map((one, idx) => (
                        <li onClick={() => setIndex(idx)} key={idx} className={`${index === idx ? 'dark:text-mainWhite text-mainBlack index relative ' : 'dark:text-mainWhite2 text-mainBlack2'}  font-mon`}>
                            <a href={one.url}>{one.name}</a>
                        </li>
                    ))
                }
            </ul>
            <Tooltip title='Theme' enterDelay={700}>
                <button onClick={() => setDarkmode(!darkmode)} className='text-2xl w-10 text-mainBlack2 dark:text-mainWhite'>
                    {darkmode ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/> }
                </button>
            </Tooltip>                
    </nav>
  )
}

export default Navbar