import React from 'react';

import {Routes, Route} from 'react-router-dom'
import { Navbar,Cryptocurrencies, CryptoDetail, Home, News, Exchanges } from './components';

import {useGlobalContext} from './context'

function App() {
  
  return (
    <main className='bg-gray-700 grid grid-flow-row grid-cols-5 2xl:w-10/12 mx-auto'>
      <aside>
        <Navbar />  
      </aside>
      <div className=' col-span-5 lg:col-span-4 h-screen'>
         <Routes>
        <Route path='/' exact element={<Home/>}></Route>
        <Route path='/cryptodetail/:coinId' exact element={<CryptoDetail/>}></Route>
        <Route path='/cryptocurrencies' exact element={<Cryptocurrencies/>}></Route>
        <Route path='/exchanges' exact element={<Exchanges/>}></Route>
        <Route path='/news' exact element={<News/>}></Route>
      </Routes>
      </div>
      <footer></footer>
    </main>
  );
}

export default App;
