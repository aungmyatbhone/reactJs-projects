import React , {useState} from 'react'

import { useParams } from 'react-router-dom'
import millify from 'millify'
import HTMLReactParser from 'html-react-parser'
import { Link } from 'react-feather'

import { linksArray } from '../data/data'
import {Loader} from './'
import {Chartt} from './'
import {useGetCryptoDetailQuery,useGetCryptoHistoryQuery} from '../services/cryptoApi'


const CryptoDetail = () => {
  const {coinId} = useParams()
  const [timePeriod, setTimePeriod] = useState('24h')
  const {data, isFetching} = useGetCryptoDetailQuery(coinId)
  const {data:coinHistory} = useGetCryptoHistoryQuery({coinId,timePeriod});
  const cryptoDetail = data?.data?.coin
  console.log(typeof(coinHistory?.data?.history))
  console.log(coinHistory?.data?.history)

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
  

  if(isFetching) return <Loader />
  return (
    <section className='bg-gray-900 overflow-y-scroll h-full'>
      <div className=' px-4 md:px-8 py-8 mt-20 bg-green- md:mt-0'>
        <header className='mb-14'>
          <div className='flex justify-center mb-6'>
            <img className='w-36' src={cryptoDetail.iconUrl} alt="" />
          </div>
          <h2 className='text-center text-blue-600 text-2xl mb-2 font-bold font-mon'>{cryptoDetail.name} ({cryptoDetail.symbol})</h2>
          <p className='text-center text-gray-300 text-sm font-pop'>{cryptoDetail.name} live price in US dollars. View value statistics, market cap and supply.</p>
        </header>
        <h3 className='text- mb-3 text-white font-semibold text-xl font-mon'>{cryptoDetail.name} Value Statistics</h3>
        <div className=' gap-8 grid items-center grid-flow-row grid-cols-3'>         
          {/* One */}
          <div className=' col-span-3 lg:col-span-1'>
            <div className=' bg-gray-800 rounded-md text-gray-300 font-source bg-orange- divide-y divide-gray-400 py-2 '>
              <span className='p-5 flex items-center justify-between '>
                <p>Rank</p><p>{cryptoDetail?.rank && cryptoDetail.rank}</p>
              </span>
              <span className='p-5 flex items-center justify-between '>
                <p>Market Cap</p><p>{cryptoDetail?.marketCap && millify(cryptoDetail?.marketCap)}</p>
              </span>
              <span className='p-5 flex items-center justify-between '>
                <p>All time-high</p><p>{cryptoDetail?.allTimeHigh?.price && millify(cryptoDetail?.allTimeHigh?.price)}</p>
              </span>
              <span className='p-5 flex items-center justify-between '>
                <p>Number of Markets</p><p>{cryptoDetail?.numberOfMarkets && millify(cryptoDetail?.numberOfMarkets)}</p>
              </span>
            </div>
          </div>
          {/* Two */}
            <div className='col-span-3 lg:col-span-1 bg-gray-800 p-4 rounded-md text-white'>
              <Chartt className='' coinHistory={coinHistory}/>
            </div>
          {/* Three */}
          <div className='col-span-3 lg:col-span-1'>
            {/* <h3 className='text-center'>{cryptoDetail.name} Value Statistics</h3> */}
            <div className=' bg-gray-800 rounded-md text-gray-300 font-source bg-orange- divide-y divide-gray-400 py-2'>
              <span className='p-5 flex items-center justify-between '>
                <p>Number of Exchanges</p><p>{cryptoDetail?.numberOfExchanges && cryptoDetail.numberOfExchanges}</p>
              </span>
              <span className='p-5 flex items-center justify-between '>
                <p>Approved Supply</p><p>{cryptoDetail?.approvedSupply ? 'Yes' : 'No'}</p>
              </span>
              <span className='p-5 flex items-center justify-between '>
                <p>Total Supply</p><p>{cryptoDetail?.supply?.total && millify(cryptoDetail?.supply?.total)}</p>
              </span>
              <span className='p-5 flex items-center justify-between '>
                <p>Circulating Supply</p><p>{cryptoDetail?.supply?.circulating && millify(cryptoDetail?.supply?.circulating)}</p>
              </span>
            </div>
          </div>
        </div>

        <div className='mt-10 bg--500 htmlParser'>
          <h4 className='text-white font-semibold text-2xl font-pop'>What is {cryptoDetail.name}</h4>
          {HTMLReactParser(cryptoDetail.description)}
        </div>

        <div>
          <div className='mb-4 flex flex-row mt-12 items-center bg--500'>
            <h5 className='text-white font-source font-normal text-xl mt-0 mr-3 m'>External Links </h5><Link className=' text-blue-600'/>
          </div>
          <div className='grid grid-flow-row grid-cols-6 gap-3'>
            {
              cryptoDetail?.links.map((link) =>(
                  <a target='_blank' key={link.url} href={link.url} className="w-max col-span-6 md:col-span-3 lg:col-span-2 bg--500 flex items-center">
                    <span className='w-8 text-white text-xl'>{ linksArray.find((one) => one.name === link.type) ? linksArray.find((one) => one.name === link.type).icon : <Link /> }</span>
                    <span className='hover:underline text-white font-mon text-semibold'>{link.name} </span>
                  </a>
                  
                
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default CryptoDetail