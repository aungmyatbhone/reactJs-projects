import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import { projectsList } from '../utils/constant'

const Projects = () => {
    const [projects, setProject] = useState(projectsList)   
    
    const seeMoreToggle = (id) => {
        const newArr = projects.map((project) => {
        if(project.id === id){
            return {...project, seeMore : !project.seeMore}
        }else{
            return {...project, seeMore: false}
        }
        })
        setProject(newArr)
    }
  return (
    <section id='projects' className='bg-mainBlue  mx-auto  w-full'>
      <div className='  py-20 md:py-36  mx-auto'>
        <header className='!md:5/6 mx-auto bg-green-'>
            <h2 className=' text-3xl mb-14 md:text-6xl font-bold text-mainWhite'>Projects</h2>
        </header>
        <main className='space-y-5  flex flex-col'>
            {
                projects.map((project,index) => (
                    <article key={index} className='w-full lg:w-5/6  transition5'>
                        <a className='bg-gray-500 lg:items-center lg:space-x-5 w-full  rounded-xl lg:rounded-none lg:rounded-br-3xl lg:rounded-tr-3xl lg:flex  overflow-hidden' href={project.url}>
                            <img src={project.image} className='w-full lg:w-3/6 !h-max rounded-lg lg:rounded-tr-3xl lg:rounded-tl-none lg:rounded-bl-none lg:rounded-br-3xl' alt="" />             
                            <div>
                                <header className='px-3 mt-5 mb-3 flex flex-row items-center'>
                                    <img src={project.icon} className='h-10 mr-4' alt="" />
                                    <h3 className='text-xl font-mon font-medium text-mainBlack dark:text-mainWhite'>{project.name}</h3>
                                </header>
                                <div className='hidden lg:block my-5 px-3 transition5'>
                                    <p className='mb-5 font-open font-thin text-mainBlack2 dark:text-mainWhite2'>{project.para}</p>
                                    <div className='flex flex-wrap gap-3'>
                                        {
                                            project.skills.map((skill,index) => (
                                                <span key={index} className='text-white font-source font-thin rounded-full px-4 py-1 bg-fuchsia-500'>{skill}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                            {project.seeMore && 
                            
                            <div className='lg:hidden my-5 px-3 transition5'>
                                <p className='mb-5 font-open font-thin text-mainBlack2 dark:text-mainWhite2'>{project.para}</p>
                                <div className='flex flex-wrap gap-3'>
                                    {
                                        project.skills.map((skill,index) => (
                                            <span key={index} className='text-white font-source font-thin rounded-full px-4 py-1 bg-fuchsia-500'>{skill}</span>
                                        ))
                                    }
                                </div>
                            </div>
                            }
                        </a>
                        <button onClick={() =>  seeMoreToggle(project.id) }  type='button' className='lg:hidden w-full text-center bg-orange-500 py-2 mt-2 dark:text-white text-mainBlack2'>
                            {
                                project.seeMore ? <FontAwesomeIcon icon={faChevronUp}/> : <FontAwesomeIcon icon={ faChevronDown}/>  
                            }
                        </button>                       
                    </article>
                ))
            }
        </main>
    </div>
    </section>
  )
}

export default Projects