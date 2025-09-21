import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Siderbar from './components/Sidebar'
import Myappointments from './components/Myappointments'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'



const Userappointments = () => {
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden'>
      <div className='absolute top-0 fixed z-10'>
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
      <div className='absolute left-10 lg:left-10 top-5 hidden lg:flex fixed z-10'>
        <Siderbar/>
      </div>
      <div className='absolute top-20 left-10 lg:left-60'>
        <Myappointments/>
      </div>
    </div>
  )
}

export default Userappointments
