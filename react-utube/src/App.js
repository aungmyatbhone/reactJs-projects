import { Search } from '@mui/icons-material'
import React from 'react'
 
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {ChannelDetail,Sidebar, Home, Navbar, SearchFeed, Searchbar, VideoDetail} from './components'

const App = () => {
  return (
    <BrowserRouter>
     <Searchbar />
        <main className='2xl:w-9/12 mt-16 flex flex-col lg:flex-row overflow-hidden h-screen mx-auto'>
           
            <Sidebar />
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/search/:searchTerm' element={<SearchFeed />}/>
                <Route exact path='/channel/:id' element={<ChannelDetail />}/>
                <Route exact path='/video/:id' element={<VideoDetail />}/>
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default App