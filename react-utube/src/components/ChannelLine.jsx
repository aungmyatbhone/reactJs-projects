import React from 'react'
import { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'
import { fetchApi } from '../utils/fetctApi'
import millify from 'millify'

const ChannelLine = ({channelId}) => {
    const [channelDetail, setChannelDetail] = useState([])

    useEffect(() => {
        fetchApi(`channels?part=snippet&id=${channelId}`)
        .then((data) => setChannelDetail(data?.items[0]))
    }, [channelId])

    console.log(channelDetail)
    
  return (
    <div> 
        <Link to={`/channel/${channelDetail?.id}`}>
          <div className='flex items-center'>
            <img className='h-12 mr-3 rounded-full w-12' src={channelDetail?.snippet?.thumbnails?.high?.url} alt="" />
           <div className='flex flex-col'>
             <h2 className='text-red-600 text-lg block font-semibold'>{channelDetail?.snippet?.title}</h2>
            <span className='text-sm font-normal text-gray-300 block'>{millify(channelDetail?.statistics?.subscriberCount)} Subscribers</span>
           </div>
        </div>
        </Link>
    </div>
  )
}

export default ChannelLine