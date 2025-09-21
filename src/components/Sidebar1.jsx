import React from 'react'

const Sidebar1 = (props) => {
  return (
    <div className='absolute top-20 w-60 h-screen flex flex-col'>
    <button onClick={()=>props.setresult("generalPhyscian")} className='px-4 py-1 bg-white border rounded-md w-45 text-start mt-2'>General Physcian</button>      
     <button onClick={()=>props.setresult("gynocologist")}  className='px-4 py-1 bg-white border rounded-md w-45 text-start mt-2'>Gynocologist</button>      
     <button onClick={()=>props.setresult("dermatologist")}  className='px-4 py-1 bg-white border rounded-md w-45 text-start mt-2'>Dermatologist</button>      
     <button onClick={()=>props.setresult("pediatricians")}  className='px-4 py-1 bg-white border rounded-md w-45 text-start mt-2'>Pediatricians</button>      
     <button onClick={()=>props.setresult("neurologist")}  className='px-4 py-1 bg-white border rounded-md w-45 text-start mt-2'>Neurologist</button>      
     <button onClick={()=>props.setresult("psycitrist")}  className='px-4 py-1 bg-white border rounded-md w-45 text-start mt-2'>Psycitrist</button>      
        
    </div>
  )
}

export default Sidebar1
