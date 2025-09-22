import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import doctor from "../../assets/dashboard/doctor.jpeg"
import patient from "../../assets/dashboard/patient.png"
import { Book } from 'lucide-react'
const Dashboard = () => {

    const API = import.meta.env.VITE_API_URL || "/api";

    const {data:doctors}=useQuery({
        queryKey:["all"],
        queryFn:async()=>{
            try {
                const res=await axios.get(`${API}/doctor/alldoctors`,{withCredentials:true})
                console.log(res)
                return res.data.data;
            } catch (error) {
                console.log("an error occured",error)
            }
        },
        retry:false
    })

    const {data:users}=useQuery({
        queryKey:["users"],
        queryFn:async(req,res,next)=>{
            try {
             const res=await axios.get(`${API}/user/allusers`,{withCredentials:true})
             console.log(res)
             return res.data.data;   
            } catch (error) {
                next(error)
            }
        },
        retry:false
    })

    const {data:appointments}=useQuery({
        queryKey:["appointments"],
        queryFn:async(req,res,next)=>{
            try {
               const res=await axios.get(`${API}/appointment/aappointments`,{withCredentials:true})
               console.log(res)
               return res.data.data
            
            } catch (error) {
                next(error)
            }
        },
        retry:false
    })

    const {data:accepted}=useQuery({
        queryKey:["accepted"],
        queryFn:async()=>{
            try {
            const res=await axios.get(`${API}/admin/accepted`,{withCredentials:true})
            console.log(res)
            return res.data?.data
                
            } catch (error) {
            console.log("an error occured",error)
            }
        },
        retry:false
    })
  return (
    <div className='relative min-h-screen'>
    <div className='flex flex-col'>
        <div className='flex md:gap-3'>
            <div className='flex items-center justify-center shadow-lg w-25 md:w-35 h-20'>
        <div>
            <img src={doctor} className='w-10 h-10 rounded-full'/>
        </div>
        <div className='flex flex-col md:mx-3'>
            <h1 className='font-bold'> {doctors?.length||0}</h1>
            <h1 className='text-sm sm:text-base'>Doctors</h1>
        </div>
        </div>
        <div className='flex items-center justify-center shadow-lg w-30 sm:w-35 h-20'>
        <div>
        <Book/>   
        </div>
        <div className='flex flex-col'>
            <h1 className='font-bold'> {appointments?.length||0}</h1>
            <h1 className=' tracking-tighter text-sm'>Appointments</h1>
        </div>
        </div>
        <div className='flex items-center justify-center shadow-lg w-25 sm:w-35 h-20'>
        <div>
        <img src={patient} className='w-10 h-10 rounded-full'/> 
        </div>
        <div className='flex flex-col mx-3'>
            <h1 className='font-bold'> {users?.length||0}</h1>
            <h1>Users</h1>
        </div>
        </div>
        </div>
        <div>
       <h1 className='mt-10'>Accepted Appointments</h1>
        {!accepted ||accepted.length==0 ? (
            <div className='flex items-center justify-center mt-30'>
                <h1>No appointment found</h1>
            </div>
        ) : (
            <div>
        <div className='lg:mx-2 grid grid-cols-5 gap-5 xs:w-75 xsm:w-80 mbl:w-95  md:w-160 sm:w-full bg-gray-100 p-3 rounded-t-lg shadow font-semibold text-gray-700'>
           <h1>User</h1>
           <h1>Date</h1>
           
           <h1>Time</h1>
           <h1>Status</h1>
           <h1>Doctor</h1>
        </div>
      <div className='flex flex-col gap-3 lg:mx-2'>
       {accepted?.map(a=>(
        <div key={a.id} className='grid grid-cols-5 gap-5 xs:w-75 xsm:w-80 mbl:w-95  md:w-160 sm:w-fullp-3 items-center shadow-sm hover:bg-gray-50 transition'>
         <h1 className='text-sm tracking-tighter'>{a.user}</h1>
         <h1 className='tracking-tighter'>{a.date}</h1>
         
         <h1 className='text-sm tracking-tighter'>{a.time}</h1>
         <h1 className={`${a.status=="pending" ? "text-green-500" : a.status=="rejected" ? "text-red-500" : "text-blue-500"} text-sm tracking-tighter`}>{a.status}</h1>
         <h1 className='text-sm tracking-tighter'>{a.doctor}</h1>
        </div>
       ))}
      </div>
    </div>
        )}
        </div>
    </div>
    </div>
  )
}

export default Dashboard
