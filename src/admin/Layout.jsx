import React, { useState } from 'react'
import Siderbar from './components/Siderbar'
import Navbar from '../components/Navbar'
import Dashboard from './components/Dashboard'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'

const Layout = () => {
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen'>
        <div className='absolute top-0 fixed'>
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
      <div className='absolute fixed left-0 lg:left-10 hidden lg:flex'>
        <Siderbar/>
      </div>
      <div className='absolute top-20 left-5 lg:left-65'>
        <Dashboard/>
      </div>
    </div>
  )
}

export default Layout
