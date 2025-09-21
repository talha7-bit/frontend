import React from 'react'
import { Link } from 'react-router-dom'

const Mobile = () => {
  return (
    <div className='w-30 h-30 bg-blue-900'>
      <div className='flex flex-col items-center justify-center text-white gap-1'>
    
       <Link to="/userlayout" className='mt-4'>Dashboard</Link>
       <Link to="/userappointments">Appointments</Link>
       <Link to="/userprofile">Profile</Link>
      </div>
    </div>
  )
}

export default Mobile
