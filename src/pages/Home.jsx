import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Speciality from '../components/Speciality'
import Book from '../components/Book'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Aut from '../components/Aut'
import Mnav from '../components/Mnav'
import Alldoctors from '../components/Alldoctors'

const Home = () => {
  const[show,setshow]=useState(false)
  const[mshow,setmshow]=useState(false)
  return (
    <div className='relative w-screen h-full overflow-x-hidden'>
      
      <div className='absolute w-full top-0 left-0 z-10'>
        <Navbar setshow={setshow} show={show} mshow={mshow} setmshow={setmshow}/>
      </div>
       {show && 
      <div className='absolute top-15 right-20 z-10'>
        <Aut/>
      </div>}
      {mshow &&
      <div className='absolute flex lg:hidden top-20 right-8 z-10'>
        <Mnav/>
      </div>}
      <div className='overflow-x-hidden xs:mx-4 sm:mx-8'>
        <Hero/>
      </div>
      <Speciality/>
      <div className='absolute top-180 mbl:top-200 xsm:top-220 lg:top-200 xl:top-220 h-181 md:h-220 lg:h-150 overflow-y-hidden'>
        <Alldoctors/>
      </div>
      
      <div className='absolute md:mt-7 mx-1 md:mx-3'>
        <Banner/>
      </div>
      <div className='absolute hidden sm:flex top-450 md:top-535 lg:top-450 xl:top-470 md:mx-3'>
        <Footer/>
      </div>
      
    </div>
  )
}

export default Home