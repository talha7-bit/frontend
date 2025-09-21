import React from 'react'
import { Link } from 'react-router-dom'

const Mnav = () => {
  return (
    <div className='w-30 h-30 bg-blue-900'>
      <div className='flex flex-col items-center justify-center text-white gap-1 mt-5'>
       <Link to="/">Home</Link>
       <Link to="/doctors">All Doctors</Link>
       <Link to="/about">About</Link>
      
      </div>
    </div>
  )
}

export default Mnav
