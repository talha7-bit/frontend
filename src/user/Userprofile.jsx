import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Siderbar from './components/Sidebar'
import Alldoctors from '../components/Alldoctors'
import Myprofile from './components/Myprofile'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'


const Userprofile = () => {
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <div className='absolute top-0'>
        <Navbar mshow={mshow} setmshow={setmshow}/>
      </div>
      {mshow &&
            <div className='absolute z-10 md:hidden top-51 right-9 md:right-21'>
              <Mnav/>
            </div>}
            {mshow &&
            <div className='absolute z-10 lg:hidden top-20 right-9 md:right-21'>
              <Mobile/>
            </div>}
      <div className='absolute left-10 lg:left-10 top-5 hidden lg:flex'>
        <Siderbar/>
      </div>
      <div className='absolute top-20 left-10 lg:left-63 '>
        <Myprofile/>
      </div>
    </div>
  )
}

export default Userprofile
