
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "./components/Sidebar"
import Dashboard from './components/Dashboard'
import Profile from './components/Profile'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'
import Edit from './components/Edit'

const Doctoredit= () => {
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
      <div className='absolute left-10 md:left-7 top-20 hidden md:flex'>
        <Sidebar/>
      </div>
      <div className='absolute top-20 left-10 md:left-50'>
        <Edit/>
      </div>
    </div>
  )
}

export default Doctoredit
