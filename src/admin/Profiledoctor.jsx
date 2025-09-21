import React, { useState } from 'react'
import Siderbar from './components/Siderbar'
import Navbar from '../components/Navbar'
import Dashboard from './components/Dashboard'
import Alldoctors from '../components/Alldoctors'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'
import Doctorprofile from '../components/Doctorprofile'

const Profiledoctor = () => {
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen mx-0 overflow-x-hidden'>
        <div className='absolute fixed top-0'>
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
      <div className='absolute fixed left-0 lg:left-10 hidden lg:flex z-10'>
        <Siderbar/>
      </div>
      <div className='absolute top-20 left-1 lg:left-50'>
        <Doctorprofile/>
      </div>
    </div>
  )
}

export default Profiledoctor