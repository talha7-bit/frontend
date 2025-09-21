import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from "./components/Sidebar"
import Dashboard from './components/Dashboard'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'

const Layout = () => {
  const [mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <div className='absolute top-0'>
        <Navbar mshow={mshow} setmshow={setmshow}/>
      </div>
      {mshow &&
            <div className='absolute z-10 lg:hidden top-51 right-9 md:right-21'>
              <Mnav/>
            </div>}
            {mshow &&
            <div className='absolute z-10 lg:hidden top-20 right-9 md:right-21'>
              <Mobile/>
            </div>}
      <div className='absolute left-10 top-20 hidden lg:flex'>
        <Sidebar/>
      </div>
      <div className='absolute top-20 left-5 lg:left-60'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Layout
