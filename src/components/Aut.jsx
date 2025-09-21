import React from 'react'
import { Link } from 'react-router-dom'

const Aut = () => {
  return (
    <div className='w-40 h-20 bg-white rounded-md flex flex-col items-center mt-5 z-10'>
    <Link to="/doctorlogin">Login as doctor</Link>
    <Link to="/userlogin">Login as patient</Link>
    <Link to="/adminlogin">Login as admin</Link>
    </div>
  )
}

export default Aut
