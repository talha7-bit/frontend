import React, { useState } from 'react'
import Alldoctors from '../components/Alldoctors'
import Navbar from '../components/Navbar'
import Sidebar1 from '../components/Sidebar1'
import Footer from '../components/Footer'
import Aut from '../components/Aut'
import Mnav from '../components/Mnav'

const Doctors = () => {
  const[result,setresult]=useState("")
  const[show,setshow]=useState(false)
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen min-h-screen overflow-x-hidden flex flex-col'>
   <div className='absolute fixed z-10'>
     <Navbar show={show} setshow={setshow} mshow={mshow} setmshow={setmshow}/>
   </div>
{show && 
   <div className='absolute flex top-15 right-20 md:right-30 z-10 h-20'>
    <Aut className=""/>
   </div>}
   {mshow &&
      <div className='absolute flex md:hidden top-20 right-9 z-10 md:right-21'>
        <Mnav/>
      </div>}
    
    <div className='absolute fixed left-0 hidden md:flex mx-30 mt-10 z-10'>
        <Sidebar1 result={result} setresult={setresult}/>
    </div>
    <div className='absolute top-20 md:left-20'>
        <Alldoctors result={result} setresult={setresult}/>
    </div> 
    <div className='absolute top-320'>
    </div>
  
         
    </div>
  )
}

export default Doctors
