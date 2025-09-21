import { BookDashed, Calendar, Plus, Users } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-40 h-140'>
      <div className='flex flex-col justify-center mx-5 gap-3'>
        <Link to="/doctorlayout" className='flex gap-1 tracking-tighter mt-4'><BookDashed size={15} className='mt-2'/>Dashboard</Link>
        <Link to="/doctorappointments" className='flex gap-1 tracking-tighter'><Calendar size={15} className='mt-1'/>Appointments</Link>
        <Link to="/doctorprofile" className='flex gap-1 tracking-tighter'><Users size={15} className='mt-1'/>Profile</Link>
      </div>
   
    </div>
  )
}

export default Sidebar
