import React, {useEffect} from 'react'

import millify from 'millify'

import {useGetCryptosQuery} from '../services/cryptoApi'
import {Cryptocurrencies, News,Exchanges, Loader} from './'
import { useGlobalContext } from '../context'

const Home = () => {
  const {data, isFetching} = useGetCryptosQuery(10)
  const globalStats = data?.data?.stats
  const {setNavIndex} = useGlobalContext()


  useEffect(() => {
    setNavIndex(0)
  }, [])
  
  if(isFetching) return <Loader />
  return (
    <section className='overflow-y-scroll h-full'>
      <div className='px-4 md:px-8 py-4  mt-12 lg:mt-0'>
        <div className=' bgimg p-8 md:p-14 rounded-md'>
        <header>
          <h2 className='text-3xl text-gray-200 font-bold font-mon mb-6'>Global Crypto Statistics</h2>
        </header>
        <div className=' grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-4 '>
          <article className='glass col-span-1 py-6 rounded-md px-6'>
            <h3 className='text-gray-200 font-mon text-sm mb-1 shadow-sm'>Total Cryptocurrencies</h3>
            <span className='font-semibold text-yellow-500 text-2xl'>{millify(globalStats?.total)}</span>
          </article>
          <article className='glass col-span-1 py-6 rounded-md px-6'>
            <h3 className='text-gray-200 font-mon text-sm mb-1 shadow-sm'>Total Exchanges</h3>
            <span className='font-semibold text-yellow-500 text-2xl'>{millify(globalStats?.totalExchanges)}</span>
          </article>
          <article className='glass col-span-1 py-6 rounded-md px-6'>
            <h3 className='text-gray-200 font-mon text-sm mb-1 shadow-sm'>Total Market Cap</h3>
            <span className='font-semibold text-yellow-500 text-2xl'>{millify(globalStats?.totalMarketCap)}</span>
          </article>
          <article className='glass col-span-1 py-6 rounded-md px-6'>
            <h3 className='text-gray-200 font-mon text-sm mb-1 shadow-sm'>Total 24h Volume</h3>
            <span className='font-semibold text-yellow-500 text-2xl'>{millify(globalStats?.total24hVolume)}</span>
          </article>
          <article className='glass col-span-1 py-6 rounded-md px-6'>
            <h3 className='text-gray-200 font-mon text-sm mb-1 shadow-sm'>Total Markets</h3>
            <span className='font-semibold text-yellow-500 text-2xl'>{millify(globalStats?.totalMarkets)}</span>
          </article>
        </div>
      </div>
      </div>

      <Cryptocurrencies simplified/>

      <News simplified />
    </section>
  )
}

export default Home