import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Siderbar from './components/Sidebar'
import Alldoctors from '../components/Alldoctors'
import Doctorprofile from '../components/Doctorprofile'
import Mnav from '../components/Mnav'


const Doctordata = () => {
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <div className='absolute top-0 fixed z-10'>
        <Navbar mshow={mshow} setmshow={setmshow}/>
      </div>
       {mshow &&
            <div className='absolute z-10 lg:hidden top-20 right-9 md:right-21'>
              <Mnav/>
            </div>}
      <div className='absolute fixed left-10 top-5 hidden lg:flex'>
        <Siderbar/>
      </div>
      <div className='absolute top-20 left-10 md:left-1 lg:left-60 z-[5]'>
        <Doctorprofile/>
      </div>
    </div>
  )
}

export default Doctordata
