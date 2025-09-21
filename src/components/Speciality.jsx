import React from 'react'
import derm from "../assets/specialization/dermitologist.jpeg"
import gyni from "../assets/specialization/gynicologist.jpeg"
import nauro from  "../assets/specialization/neurologist.jpeg"
import pedia from "../assets/specialization/pediatrians.jpeg"
import physi from "../assets/specialization/physician.jpeg"
import psy from "../assets/specialization/psyctrists.jpeg"

const Speciality = () => {
  return (
    <div className='absolute top-130 mbl:top-140 xsm:top-170 lg:top-130 xl:top-160 w-screen h-55'>
        <div className='absolute h-full w-[90%] mx-5 sm:mx-10 flex flex-col items-center justify-center'>
        <h1 className='text-xl font-bold '>Find By Speciality</h1>
        <p className='text-sm w-80 md:w-100 mt-3'>Simply browse through our extensive list of trusted doctors schedule your appointment hossie-free</p>
        <div className='flex gap-1 md:gap-3 mt-3'>
       <div>
         <img src={physi} className='border w-10 h-10 rounded-full bg-white'/>
         <h1 className='text-xs tracking-tighter'>General Physcian</h1>
       </div>
       <div>
         <img src={gyni} className='border w-10 h-10 rounded-full bg-white'/>
         <h1 className='text-xs tracking-tighter'>Gynecologist</h1>
       </div>
       <div>
         <img src={derm} className='border w-10 h-10 rounded-full bg-white'/>
         <h1 className='text-xs tracking-tighter'>Dermitologist</h1>
       </div>
       <div>
         <img src={nauro} className='border w-10 h-10 rounded-full bg-white'/>
         <h1 className='text-xs tracking-tighter'>Neurologist</h1>
       </div>
       <div className='hidden sm-flex'>
         <img src={pedia} className=' border w-10 h-10 rounded-full bg-white'/>
         <h1 className='text-xs tracking-tighter'>Pediatricians </h1>
       </div>
       <div>
         <img src={psy} className='border w-10 h-10 rounded-full bg-white'/>
         <h1 className='text-xs tracking-tighter'> Psychiatrists</h1>
       </div>
       </div>
        </div>
    </div>
  )
}

export default Speciality
