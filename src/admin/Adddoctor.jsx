import React, { useState } from 'react'
import Siderbar from './components/Siderbar'
import Navbar from '../components/Navbar'
import Dashboard from './components/Dashboard'
import Alldoctors from '../components/Alldoctors'
import Doctorsignup from '../pages/doctorsignup'
import Mnav from '../components/Mnav'
import Mobile from './components/Mobile'

const Adddoctor = () => {
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen mx-0'>
        <div className='absolute fixed top-0 z-5'>
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
      <div className='absolute fixed left-0 lg:left-10 hidden z-10'>
        <Siderbar/>
      </div>
      <div className='absolute'>
        <Doctorsignup/>
      </div>
    </div>
  )
}

export default Adddoctor
