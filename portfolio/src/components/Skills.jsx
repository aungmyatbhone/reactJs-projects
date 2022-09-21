import React from 'react'

import OwlCarousel  from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

import {offers, skills} from '../utils/constant'

const Skills = () => {
  return (
    <section id='skills' className='bg-mainBlack  mx-auto  w-full'>
      <div className=' md:w-5/6 py-20 md:py-36 px-3  mx-auto'>
        <h2 className='text-3xl mb-14 md:text-6xl font-bold text-mainWhite'>Skills and Tools</h2>
        <main className='grid py-4 md:py-20 grid-cols-12 gap-y-4 divide-mainWhite2 md:divide- rounded-lg divide-y md:divide-y-0 bg-mainBlue md:gap-y-20'>
          {
            skills.map((skill, index) => (
              <article className='col-span-12 md:col-span-4 2xl:col-span-2 flex flex-row justify-between h-20 px-4 md:flex-col items-center' key={index}>
                <img src={skill.icon} className='h-3/6 md:h-4/5' alt={skill.name} />
                <span className='text-mainWhite2 mt-4 text-center font-normal  font-source text-sm justify-self-end'>{skill.name}</span>
              </article>
            ))
          }
        </main>
        <h3 className='title-underline w-max mt-20 mb-12 text-mainBlack2 dark:text-mainWhite font-open font-medium text-xl md:text-2xl'>What I can offer</h3>
        <div className='bg-red-500 w-full flex flex-row justify-center'>
          {
            <OwlCarousel dots items={1} className='bg-yellow-500  w-full owl-theme md:!w-3/5 xl:!w-1/3'>
            {
                offers.map((one, index) => (
                    <article key={index} className='items p-10 2xl:p-20 bg-gray-800'>
                        <div>
                        <img className='h-36 mb-' src={one.icon} alt={one.name} />
                        <h4 className='font-mon text-2xl text-mainNuclear font-semibold text-center my-4'>{one.name}</h4>
                        <p className='text-mainBlack font-thin dark:text-mainWhite text-center font-pop'>{one.para}</p>
                        </div>
                    </article>
                ))
            }
            </OwlCarousel>
          }

        </div>
      </div>
    </section>
  )
}

export default Skills