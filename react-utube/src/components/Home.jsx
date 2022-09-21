import React, {useEffect, useState} from 'react'



import { useGlobalContext } from '../utils/context'
import {Videos} from './'
import { fetchApi } from '../utils/fetctApi'
import {Loader} from './'

const Home = () => { 
  const {selectedCategory, setSelectedCategory} =  useGlobalContext()
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetchApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data?.items))
    setTimeout(() => {
      setLoading(false)
    },1000)
  }, [selectedCategory])

  if(loading) {
    return <Loader />
  }

  return (
    <section className='p-3 overflow-x-hidden overflow-y-scroll w-full lg:w-5/6 bg-gray-900 font-bold text-white'>
      <div className='text-white flex'>
      <h2 className='text-red-600 mr-1'>{selectedCategory}</h2> videos
      </div>
      <Videos videos={videos}/>
    </section>
  )
}

export default Home