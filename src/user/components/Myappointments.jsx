import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const Myappointments = () => {

  const API = import.meta.env.VITE_API_URL || "/api";

    const {data:appointments}=useQuery({
        queryKey:["userappointments"],
        queryFn:async()=>{
            try {
              const res=await axios.get(`${API}/user/myappointments`,{withCredentials:true})
              console.log(res)
              return res.data 
            } catch (error) {
               console.log("an error occured",error) 
            }
        },
        retry:false
    })
  return (
    <div>
        <div className='lg:mx-2 grid grid-cols-5 gap-1 sm:gap-15 xs:w-75 xsm:w-80 mbl:w-90  md:w-160 sm:w-full bg-gray-100 p-3 rounded-t-lg shadow font-semibold text-gray-700'>
           <h1>User</h1>
           <h1>Date</h1>
           
           <h1>Time</h1>
           <h1>Status</h1>
           <h1>Doctor</h1>
        </div>
      <div className='flex flex-col gap-3 lg:mx-2'>
       {appointments?.data?.map(a=>(
        <div key={a.id} className='grid grid-cols-5 gap-5 sm:gap-15 xs:w-75 xsm:w-80 mbl:w-90  md:w-160 sm:w-full p-3 items-center shadow-sm hover:bg-gray-50 transition'>
         <h1 className='text-sm tracking-tighter'>{a.patient}</h1>
         <h1 className='tracking-tighter'>{a.date}</h1>
         
         <h1 className='text-sm tracking-tighter'>{a.time}</h1>
         <h1 className={`${a.status=="pending" ? "text-green-500" : a.status=="rejected" ? "text-red-500" : "text-blue-500"} text-sm tracking-tighter`}>{a.status}</h1>
         <h1 className='text-sm tracking-tighter'>{a.doctor}</h1>
        </div>
       ))}
      </div>
    </div>
  )
}

export default Myappointments
