import React from 'react'



import {VideoCard, ChannelCard } from './'

const Videos = ({videos}) => {
  return (
    <div className='grid grid-flow-row grid-cols-12 gap-8 xl:gap-5 w-full  justify-center mb-20 p-4 '>
      {
        videos.map((item,index) => {
          return (
            <>
              {item?.id?.videoId && <VideoCard key={item?.id?.videoId} video={item}/> }
              {item?.id?.channelId && <ChannelCard asCard key={item?.id?.channelId} channelDetail={item}/> }
            </>
          )
        })
      }
    </div>
  ) 
}

export default Videos