import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'

import {Loader} from './'
import {Videos, ChannelCard} from './'
import { fetchApi } from '../utils/fetctApi'

const ChannelDetail = () => {
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  const [channelDetail, setChannelDetail]= useState([]) 
  const [videos, setVideos] = useState([])

  useEffect(() => { 
    setLoading(true)
    const fetchData = async () => {
      const data = await fetchApi(`channels?part=snippet&id=${id}`)
      setChannelDetail(data?.items[0])

      const videosDetail = await fetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`)
      setVideos(videosDetail?.items)
    }

    fetchData()
    setLoading(false)
  }, [id])

  console.log(channelDetail)

  if(loading) return (<Loader />)
  return (
    <section className='p-3 overflow-x-hidden overflow-y-scroll w-full lg:w-5/6 text-white'>
      <div style={{background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`, }} className=' mb-40 banner h-60 relative w-full'>
         <ChannelCard channelDetail={channelDetail}/>
      </div>
      <p className='text-sm text-white p-3 text-center mb-10'>{channelDetail?.snippet?.description}</p>
      <Videos videos={videos}/>
    </section>
  )  
}

export default ChannelDetail