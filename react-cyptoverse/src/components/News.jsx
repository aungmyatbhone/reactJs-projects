import React, { useState } from 'react'

import moment from 'moment'
import { Link } from 'react-router-dom'

import {Loader} from './'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGetCryptoNewsApiQuery } from '../services/cryptoNewsApi'
import { useGlobalContext } from '../context'

const News = ({simplified}) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
  const {data : cryptoNews} = useGetCryptoNewsApiQuery({newsCategory, count: simplified ? 6 : 30})
  const {data} = useGetCryptosQuery(100)
  const {setNavIndex} = useGlobalContext()



  if(!cryptoNews?.value) return <Loader />
  return (
    <section className={`newsbg ${simplified ? '': 'overflow-y-scroll  h-full'}`}>
      <div className={`px-4 md:px-8 py-4 ${simplified ? '' : ' mt-16 lg:mt-0'}`}>
      {simplified &&
          <div className=' mt-4 flex items-center mb-6 justify-between'>
            <h3 className='text:lg md:text-2xl font-semibold font-mon text-gray-200'> Cryptocurrency News </h3>
            <button onClick={() => setNavIndex(3)} className='text-md text-blue-400 font-semibold'>
              <Link to='/news'>See more</Link>
            </button>
          </div>
        }
      {
        !simplified &&
          <div className='bg-green- my-4 md:my-8'>
            <h2 className='text-white text-lg font-mon md:text-2xl font-semibold mb-3'>Select News</h2>
              <select  onChange={(e) => setNewsCategory(e.target.value)} className='p-3 bg-gray-900 w-full md:w-4/12 border-2 border-blue-600 text-white focus:outline-none' name="" id="">
                  <option value={newsCategory}>{newsCategory}</option>
                  {
                  data?.data?.coins?.map((coin) => (
                    <option key={coin.name} className='' value={coin.name}>{coin.name}</option>
                  ))
                }
              </select>
          </div> 
        }

        

      <div className=' grid items-center grid-flow-row   grid-cols-12 w-full gap-x-8 gap-y-8 md:gap-y-10'>
        {
          cryptoNews?.value?.map((news) => (
            <article className=' col-span-12 sm:col-span-6 md:col-span-4' key={news?.name}>
              <a target='_blank' href={news?.url}>
                <div className='glass2'>
                  <div className=''>
                    <img className='w-full h-44 md:h-40 object-cover' src={news?.image?.thumbnail?.contentUrl} alt={news?.name} />
                  </div>
                  <div className='py-6 px-3'>
                    <h1 className='font-semibold text-sm text-white font-mon'>{news?.name}</h1>
                    <div className='my-3 flex items-center text-gray-300 justify-between'>                   
                      <p className='font-bold text-sm uppercase'>{news?.provider[0]?.name}</p>
                      <p className='text-xs font-normal text-yellow-500'>{moment(news?.datePublished).startOf('ss').fromNow()}</p>
                    </div>
                    <p className='text-gray-300 text-xs'>{(news?.description).substring(0,75)}...</p>
                  </div>
                </div>
              </a>
            </article>
          ))
        }
      </div>
      </div>    
    </section >
  )
} 

export default News