import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { Book, DollarSign, IndianRupee } from 'lucide-react'
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Dashboard = () => {
  const navigate=useNavigate()
  const queryClient=useQueryClient()

  const API = import.meta.env.VITE_API_URL;

  const {data:latest}=useQuery({
      queryKey:["pen"],
      queryFn:async()=>{
        try {
          console.log("PENDING QUERY RUNS")
           const res=await axios.get(`${API}/doctor/latest`,{withCredentials:true})
          
           console.log("res",res)
           return res.data
          
        } catch (error) {
          console.log("an error occured",error)
        }
      }
    })

    const {data:appointments}=useQuery({
        queryKey:["dappointments"],
        queryFn:async()=>{
            try {
              const res=await axios.get(`${API}/doctor/appointments`,{withCredentials:true}) 
              console.log(res)
              return res.data.data
            } catch (error) {
              console.log("an error occured",error)  
            }
        }
    })

    const {mutate:acceptappointment}=useMutation({
      mutationFn:async(id)=>{
        try {
         const res=await axios.post(`${API}/doctor/accept/${id}`,{},{withCredentials:true})
         console.log(res)
         return res.data?.data 
        } catch (error) {
        console.log("an error occured",error)  
        }
      },
      onSuccess:(res)=>{
      queryClient.invalidateQueries(["pen"])
      queryClient.invalidateQueries(["dappointments"])
      toast.success("appointment accepted succesfully")
      window.location.reload()
      },
      onError:(error)=>{
      console.log("an error occured",error)
      toast.error("an error occured while accepting")
      }
    })

    const handleaccept=(id)=>{
    acceptappointment(id)
     
    }

    const {mutate:rejectappointment}=useMutation({
      mutationFn:async(id)=>{
        const res=await axios.post(`${API}/doctor/reject/${id}`,{},{withCredentials:true})
        console.log(res)
        return res.data?.data
      },
      onSuccess:(res)=>{
        queryClient.invalidateQueries(["pen"])
        queryClient.invalidateQueries(["dappointments"])
        toast.success("appointment rejected succesfully")
        window.location.reload()
      },
      onError:(err)=>{
        console.log("an error occured",err)
        toast.error("an error occured while accepting")
      }
    })

    const handlereject=(id)=>{
    rejectappointment(id)
    }
    
  return (
    <div className='w-110 md:w-250 h-screen'>
      <div className='flex flex-col mx-3 gap-3'>
        <div className='flex gap-2'>
        <div className='flex items-center justify-center gap-2 shadow-md md:w-35 w-30 h-20'>
        <div className='mt-1'>
        <IndianRupee/>
        </div>
        <div className=''>
         <h1 className='font-semibold'>0</h1>
         <h1>Earnings</h1>
        </div>
        </div>
        <div className='flex items-center justify-center gap-2 shadow-md w-35 md:w-40'>
        <div>
        <Book/>
        </div>
        <div>
        <h1>{appointments?.length}</h1>
        <h1 className='tracking-tighter'>Appointments</h1>
        </div>
        </div>
        </div>
        <div className='mt-4'>
            <h1 className='text-lg font-bold'>Latest appointments</h1>
            <div className='grid grid-cols-5 xs:w-75 xsm:w-75 mbl:w-95 gap-15 md:w-160 sm:w-full bg-gray-200 px-4 py-1'>
              <h1>Patient</h1>
              <h1>Date</h1>
              
              <h1>Time</h1>
              <h1></h1>
            </div>
            <div className=''>
            {latest?.data?.map(a=>(
              <div key={a._id} className='grid grid-cols-5 gap-15 xs:w-75 xsm:w-75 mbl:w-95  md:w-160 sm:w-full'>
                <h1>{a.user}</h1>
                <h1>{a.date}</h1>
                
                <h1>{a.time}</h1>
                <div className='gap-2'>
                  <button onClick={()=>handleaccept(a._id)} className='cursor-pointer'>✔</button>
                  <button onClick={()=>handlereject(a._id)} className='cursor-pointer'>❌</button>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard