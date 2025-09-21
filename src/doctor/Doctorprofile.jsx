
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "./components/Sidebar"
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'

const Doctorprofile = () => {
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
                  <div className='absolute z-10 md:hidden top-20 right-9 md:right-21'>
                    <Mobile/>
                  </div>}
      <div className='absolute left-10 md:left-7 lg:left-10 top-20 hidden md:flex'>
        <Sidebar/>
      </div>
      <div className='absolute top-20 left-10 md:left-60'>
        <Profile/>
      </div>
    </div>
  )
}

export default Doctorprofile
