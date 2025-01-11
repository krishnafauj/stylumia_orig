import React from 'react'
import SubvsSubform from '../components/categoryform3'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'

function Subvssub() {
  return (
    <div className='bg-gradient-to-b from-gray-800 to-black h-screen w-full'>
      <Navbar />
      <SubvsSubform />
      <div className='flex '>
        <div className='w-1/12 mt-20 Z-1000'>
          <Sidebar />
        </div>
        <div className='w-11/12 mt-40'>

        </div>
      </div>
    </div>
  )
}

export default Subvssub