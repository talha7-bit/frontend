import { BookDashed, Calendar, LayoutDashboard, LayoutDashboardIcon, Plus, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Siderbar = () => {
  return (
    <div className='w-50 h-145 mt-17'>
      <div className='flex flex-col justify-center mx-5 gap-3'>
        <Link to="/userlayout" className='flex gap-1 tracking-tighter mt-4'><BookDashed size={15} className='mt-2'/>Dashboard</Link>
        <Link to="/userappointments" className='flex gap-1 tracking-tighter'><Calendar size={15} className='mt-1'/>Appointments</Link>
        <Link to="/userprofile" className='flex gap-1 tracking-tighter'><Users size={15} className='mt-1'/>My Profile</Link>
      </div>
    </div>
  )
}

export default Siderbar