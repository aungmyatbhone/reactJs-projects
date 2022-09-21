import React from 'react'

import { Link } from 'react-router-dom'

import { demoProfilePicture } from '../utils/constant'

const ChannelCard = ({channelDetail,asCard}) => {
  const { snippet} = channelDetail
  console.log(asCard)
  return (
    <article className={`${asCard ? '' : ' absolute -bottom-1/2 right-1/2 translate-x-1/2 w-full md:w-2/4 lg:w-1/3'} text-white  col-span-12 bg--500 md:col-span-6 lg:col-span-4`} >
      <Link to={`/channel/${channelDetail?.snippet?.channelId}`}>
         <div className={`${asCard ? '' : ''} text-center p-3 flex h-full flex-col items-center justify-center `}>
          <div className={`mb-6 ${asCard ? '' : '-'}`}>
            <img className='rounded-full border-2 border-red-600 w-36 h-36 object-cover' src={snippet?.thumbnails?.high?.url || demoProfilePicture} alt="" />
          </div>
          <h3 className='text-center text-red-600 font-mon font-semibold text-xl'>{snippet?.title}</h3>
          {
            channelDetail?.statistics?.subscriberCount && 
            <p> {`${parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()}  Subscribers`}</p>}
          {asCard && <p className='text-sm font-normal text-gray-300'>{(snippet?.description).substring(0,40)} ....</p>}
         </div>
      </Link>
    </article>
  ) 
}

export default ChannelCard