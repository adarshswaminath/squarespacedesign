import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


function App() {

  return (
    <div className='bg-[#1a1c19] text-white'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
