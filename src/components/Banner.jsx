import React from 'react'
import pic from "../assets/book.jpeg"

const Banner = () => {
  return (
    <div className='absolute md:mt-10 top-270 md:top-290 lg:top-250 xl:top-230 w-screen h-60 md:h-60'>
      <div className='w-[90%] bg-blue-500 mx-5 sm:mx-10 md:mx-10 h-50 md:h-60 flex items-center justify-center gap-5 md:gap-35'>
       <div className='flex flex-col mx-2'>
       <h1 className='text-xl md:text-3xl font-bold text-white'>Book Appointment</h1>
       <h1 className='text-xl md:text-3xl font-bold text-white'>With 100+ Trusted Doctors</h1>
       <button className='bg-white px-4 py-1 rounded-full w-40 text-blue-500'>Create Account</button>
       </div>
       <div>
      <img src={pic} className='w-30 md:w-50 h-30 md:h-50'/>
       </div>
      </div>
    </div>
  )
}

export default Banner
