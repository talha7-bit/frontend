import React from 'react'
import logo1 from "../assets/logo1.jpeg"
import logo2 from "../assets/logo2.jpeg"
import logo3 from "../assets/logo3.jpeg"
import logo4 from "../assets/logo4.jpeg"
const Hero = () => {
  return (
    <div className='w-screen h-110 mbl:h-120 xsm:h-140 lg:h-100 xl:h-140 z-[-1] '>
      
      <div className='absolute h-full w-[90%] mx:5 sm:mx-10 mt-20 bg-blue-500 flex flex-col md:flex-row items-center justify-center sm:gap-5 xsm:gap-15 md:gap-5'>
        <div className='flex flex-col w-90 md:mx-3'>
        <div className='mx-24 sm:mx-1 '>
            <h1 className='text-sm sm:text-xl md:text-2xl font-bold text-white'>Book Appoinment</h1>
            <h1 className='text-sm sm:text-xl md:text-2xl  font-bold text-white'>With Trusted Doctors</h1>
             </div>
            <div className='flex mt-2 mb-2 mx-auto'>
            <img className='w-6 h-6 rounded-full mt-2' src={logo1}/>
            <img className='w-6 h-6 rounded-full mt-2' src={logo2}/>
            <img className='w-6 h-6 rounded-full mt-2' src={logo3}/>
            <p className='text-sm tracking-tighter text-white w-59 md:w-80'>Simply browse through our extensive list of trusted doctors schedule your appointment hossie-free</p>
           
            </div>
        <div>
       <button className='bg-white sm:font-semibold tracking-tighter px-4 py-1 rounded-full text-blue-500 mx-23 sm:mx-1'>Book Appointment</button>
        </div>
        </div>
        <div>
            <img src={logo4} className='w-60 md:w-100 md:h-60 rounded-tr-full'/>
      </div>
      </div>
      
    </div>
  )
}

export default Hero
