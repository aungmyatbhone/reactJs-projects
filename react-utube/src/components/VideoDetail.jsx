import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import moment from 'moment'
import millify from 'millify'
import {ThumbUp} from '@mui/icons-material'

import {Loader} from './'
import {Videos, ChannelLine} from './'
import { fetchApi } from '../utils/fetctApi'

const VideoDetail = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [shortern , setShortern] = useState(true)
  const [videoDetail, setVideoDetail] = useState({})
  const [videos, setVideos] = useState([])
  const [channelDetail, setChannelDetail] = useState([])

  useEffect(() => {
    setLoading(true)
    fetchApi(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data?.items[0]))

    fetchApi(`search?part=snippet&relatedToVideoId=${id}`)
    .then((data) => setVideos(data?.items))
    setLoading(false)
  },[id])

  const {snippet, contentDetails, statistics} = videoDetail

  if(loading) {
    return <Loader />
  }
  return (
    <section className='p-3 overflow-x-hidden overflow-y-scroll w-full lg:w-5/6 bg-gray-900 font-bold text-white'>
      <div className='w-full'>
        <ReactPlayer className='h-40 md:h-56 !w-full' controls url={`https://www.youtube.com/watch?v=${id}`} />
        <div className='bg-gray-900 mt-4'>
          <div className='flex flex-col '>
             <h2 className='text-white text-lg block font-semibold'>{snippet?.title}</h2>
              <span className='text-sm font-normal text-gray-300 block'>{moment(snippet?.publishedAt).startOf('ss').fromNow()}</span>
              <div className='my-3 flex space-x-10'>
                <span className='text-sm font-normal text-gray-300 block'>{millify(statistics?.viewCount)} views</span>
              <span className='text-sm font-normal text-gray-300 block'><ThumbUp /> {millify(statistics?.likeCount)} </span>
              </div>
           </div>
          <ChannelLine channelId={videoDetail?.snippet?.channelId}/>
          <p className='text-sm text-white font-normal my-5'>{shortern ? snippet?.description.substring(0,200) : snippet.description} <small onClick={() => setShortern(!shortern)} className='cursor-pointer text-gray-400'>{shortern ? 'See more...' : 'See less'}</small></p>
        </div>
      </div>
      <h6 className='mt-10'>Related videos</h6>
      <Videos videos={videos}/>
    </section>
  )
} 

export default VideoDetail