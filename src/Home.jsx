import React from 'react'
import Navbar from './components/navbar'
import Body from './components/Body'

function Home() {
  return (
    <div className='bg-gradient-to-r from-gray-900 via-gray-800 to-black h-screen'>
        <Navbar/>
        <Body/>
    </div>
  )  
}

export default Home
