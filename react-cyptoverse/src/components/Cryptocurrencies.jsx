import React , {useEffect, useState}from 'react'

import millify from 'millify'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi'
import { useGlobalContext } from '../context'
import {Loader} from './'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data:cryptoList, isFetching} = useGetCryptosQuery(count)
  const [searchTerm, setSearchTerm] = useState('')
  const [cryptos, setCryptos] = useState([])
  const {setNavIndex} = useGlobalContext()

  useEffect(() => {
    const filterCryptos = cryptoList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
    setCryptos(filterCryptos)
  },[searchTerm, cryptoList])

  if(isFetching) return <Loader />
  return (
    <section className={` ${simplified ? '': 'overflow-y-scroll  h-full' }`}>
      <div className={`px-4 md:px-8 py-4 ${simplified ? '' : ' mt-16 lg:mt-0'}`}>
        {simplified &&
          <div className=' flex items-center mt-4 mb-8 justify-between'>
            <h3 className='text:lg md:text-2xl font-semibold font-mon text-gray-200'>World's Top 10 Cryptocurrencies </h3>
            <button onClick={() => setNavIndex(2)} className='text-md text-blue-400 font-semibold'>
              <Link to='/cryptocurrencies'>See more</Link>
            </button>
          </div>
        }
        {
        !simplified &&
        <div className='bg-green- my-4 md:my-8'>
          <h2 className='text-white text-lg font-mon md:text-2xl font-semibold mb-3'>Expolore Cryptocurrencies</h2>
          <input onChange={(e) => setSearchTerm(e.target.value)} className='bg-gray-600 border-2 border-blue-600 w-full p-2 md:w-4/12 focus:outline-none text-white'placeholder='Search Cryptocurrencies' type="text" />
        </div>
      }
      {
        cryptos?.length === 0 &&
        <p className='mt-20 text-center text-gray-400 font-semibold'>No match crypto!</p>
      }
      <div className='grid items-center grid-flow-row bg-yel-200 grid-cols-12 w-full gap-x-6 gap-y-6 md:gap-y-10'>
        {
          cryptos?.map((crypto) => (
            <article key={crypto.uuid} className='flex text-sm  font-pop text-gray-300 flex-col col-span-12 sm:col-span-4 lg:col-span-3'>
              <Link to={`/cryptodetail/${crypto.uuid}`}>
               <div className='space-y-4 py-4 md:py-8 px-4 rounded-md bg-gray-800'>
                  <div className='flex flex-row-reverse md:flex-col items-center justify-between '>
                    <img className='h-10 md:h-16 md:mb-4' src={crypto.iconUrl} alt={crypto.name} />
                    <h4 className='text-center text-gray-100 text-base font-semibold font-mon'>{crypto.rank}. {crypto.name}</h4>                
                  </div>
                  <span className='block md:hidden'>{millify(crypto.price)} USD</span>
                  <div className='tracking-wide	 hidden md:block space-y-2'>
                    <p className=''>Price : {millify(crypto.price)} USD</p>
                    <p className=''>Market Cap : {millify(crypto.marketCap)}</p>
                    <p className=''>Daily Change : {millify(crypto.change)}%</p>
                  </div>
               </div>
              </Link>
            </article>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Cryptocurrencies