import React from 'react'

import moment from 'moment'
import {Link} from 'react-router-dom'

const VideoCard = ({video}) => {
  const {snippet} = video
  return (
    <article className='text-white col-span-12 bg-gray-800 md:col-span-6 lg:col-span-4 '>
      <Link to={`/video/${video?.id?.videoId}`}>
        <div>
          <img className='w-full h-36 object-cover' src={snippet?.thumbnails?.high?.url} alt="" />
        </div> 
        <div className='px-2 py-4 '>
          <h3  className='text-base font-semibold font-mon'>{(snippet?.title).substring(0,40)}...</h3>
          <Link to={`/channel/${snippet.channelId}`}><h4 className='font-pop mt-1 text-sm text-red-600 font-semibold'>{(snippet?.channelTitle).substring(0,20)}</h4></Link>
          <small className='font-normal text-gray-400 tracking-wide'>{moment(snippet?.publishedAt).startOf('ss').fromNow()}</small>
          <p className='mt-3 text-gray-300 text-xs font-normal font-mon'>{(snippet?.description).substring(0,65)}......</p>
        </div>
      </Link>
    </article>
  ) 
}

export default VideoCard