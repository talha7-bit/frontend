import React from 'react'
import logo from "../assets/logo.jpeg"
import { Link } from 'react-router-dom'
import { CopyrightIcon } from 'lucide-react'
const Footer = () => {
  return (
    <div className='absolute w-screen h-60'>
    <div className='absolute w-[85%] mx-10 md:mx-15 h-full border-t flex flex-col'>
    <div className='flex items-center justify-between mt-3'>
    <div className='flex flex-col'>
    <div className='flex'>
       <img src={logo} className='w-8 h-8 rounded-full'/> 
       <h1 className='text-xl font-bold text-blue-600'>Prescripto</h1>
    </div>
    <p className='text-sm w-60 md:w-70 mt-5'>kjgyufde ngyfed njgyfd hfdd bfgfdewj ghdf ffsed hfhgdfd fghd gddkj gyfhgdd hgfd jmgyfd fhgdcd hftcd hfd  hfr hf iyuigr iy lkjge kjuig</p>  
    </div> 
    <div className='hidden md:flex flex-col'>
    <h1 className='text-xl font-bold'>Company</h1>
    <Link className='text-sm'>Home</Link>  
    <Link className='text-sm'>About Us</Link>  
    <Link className='text-sm'>Delivery</Link>  
    <Link className='text-sm'>Privacy Policy</Link>  
    </div> 
    <div>
    <h1 className='text-xl font-bold'>Get In Touch</h1>
    <h1 className='font-semibold'>+92 3490000000</h1>
    <h1 className='font-semibold'>test@gmail.com</h1>
    </div>
    </div>
    <h1 className='flex absolute w-full bottom-0 mx-5 md:mx-30 lg:mx-90 mb-10'>Copyright 2025 <CopyrightIcon className='w-5 h-6'/>Prescipto.com - All Rights Reserved</h1>    
    </div>
    </div>
  )
}

export default Footer
