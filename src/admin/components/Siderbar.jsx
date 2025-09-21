import { BookDashed, Calendar, LayoutDashboard, LayoutDashboardIcon, Plus, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div className='w-50 h-145 mt-17 '>
      <div className='flex flex-col justify-center mx-5 gap-3'>
        <Link to="/adminlayout" className='flex gap-1 tracking-tighter mt-4'><BookDashed size={15} className='mt-2'/>Dashboard</Link>
        <Link to="/adminappointments" className='flex gap-1 tracking-tighter'><Calendar size={15} className='mt-1'/>Appointments</Link>
        <Link to="/doctorsignup" className='flex gap-1 tracking-tighter'><Plus size={15} className='mt-1'/>Add Doctor</Link>
        <Link to="/alldoctorsl" className='flex gap-1 tracking-tighter'><Users size={15} className='mt-1'/>All Doctors</Link>
      </div>
    </div>
  )
}

export default Siderbar
