import React, {useState, useEffect} from 'react'

import { useParams } from 'react-router-dom'

import {Loader} from './'
import { fetchApi } from '../utils/fetctApi'
import {Videos} from './'

const SearchFeed = () => {
  const [loading, setLoading] = useState(false)
  const {searchTerm} = useParams()
  const [videos, setVideos] = useState([])
 
  useEffect(() =>{
    setLoading(true)
    fetchApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data?.items))
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [searchTerm])

  if(loading) {
    return <Loader />
  }

  return (
    <section className='p-3 overflow-x-hidden overflow-y-scroll w-full lg:w-5/6 bg-gray-900 font-bold text-white'>
      <div className='text-white flex'>
      Results for <h2 className='text-red-600 mx-1'>{searchTerm}</h2> videos
      </div>
      <Videos videos={videos}/>
    </section>
  )
}

export default SearchFeed