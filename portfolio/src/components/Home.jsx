import React , {} from 'react'

import { Animated } from 'react-animated-css'
import {contacts} from '../utils/constant'
import me from '../assets/me.png'

const Home = () => {
  
  return (
    <section className='mx-auto  w-full dark:bg-mainBlue bg-mainWhite'>
        <div className='h-full mt-34 mx-auto py-20 px-3  md:w-5/6 flex flex-col space-y-12 md:space-y-14'>
          <div className=' bg-mainBlack w-36 h-36 rounded-full overflow-hidden border-mainNuclear border-2'>
            <img className='' src={me} alt="" />
          </div>
          <Animated className='wow' data-wow-offset="500" isVisible={true}  animationIn='fadeInUp'>
            <div className='font-open font-extrabold '>
              <h1 className='text-3xl md:text-5xl dark:text-mainWhite text-mainBlack2'>Hi there, I am</h1>
              <h1 className='text-4xl md:text-7xl text-mainNuclear'>Aung Myat Bhone</h1>
            </div>
          </Animated>
          <Animated className='wow' data-wow-offset="500" isVisible={true}  animationIn='fadeInUp'>
            <p className='font-mon font-normal text-sm md:text-xl dark:text-mainWhite2 text-mainBlack2'>A passionate React developer and Web designer <br />
              Always ready do create attractive and interactive websites &#128293;
            </p>
          </Animated>
          <div>
            <button className='nuclear-btn'>Download My CV</button>
          </div>
          <ul className='flex space-x-5 items-center'>
            {
              contacts.map((contact,id) => (
                <Animated className='wow' data-wow-offset="5000" isVisible={true} animationIn='fadeInUp' key={id} animationInDelay={contact.delay}>
                  <li target='_blank' className='text-3xl md:text-4xl active:scale-95 hover:text-mainNuclear text-white' >
                    <a href={contact.url}>{contact.icon}</a>
                  </li>
                </Animated>
              ))
            }
          </ul>
        </div>
    </section>
  )
}

export default Home