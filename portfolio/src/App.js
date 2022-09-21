import { useEffect, useState, componentDidMount } from 'react';

import WOW from 'wow.js'


import Home from './components/Home';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Skills from './components/Skills';
import Projects from './components/Projects';
import {useGlobalContext} from './context'

function App() {
  const {darkmode, setDarkmode} = useGlobalContext()
    new WOW().init();
  return (
    <>
    <Sidebar />
    <Navbar />
      <main className=' pt-5'>
        
        <Home />
        <Skills />
        <Projects />
        <Home />
      </main>
    </>
  );
}

export default App;
