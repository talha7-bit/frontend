import React from 'react'
import { Link } from 'react-router-dom'

const Mobile = () => {
  return (
    <div className='w-30 h-30 bg-blue-900'>
      <div className='flex flex-col items-center justify-center text-white gap-1'>
    
       <Link to="/adminlayout" className='mt-1'>Dashboard</Link>
       <Link to="/adminappointments">Appointments</Link>
       <Link to="/doctorsignup">Add Doctor</Link>
       <Link to="/alldoctorsl">All Doctors</Link>
      </div>
    </div>
  )
}

export default Mobile
