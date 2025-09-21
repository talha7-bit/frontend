import { useMutation, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { LucideAArrowDown } from 'lucide-react'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Doctorprofile = () => {
  const today=new Date().toISOString().split("T")[0]
  const maxdate=new Date(Date.now() + 7 *24 *60 *60 *1000).toISOString().split('T')[0]
 const {register,handleSubmit,reset,formState:{errors}}=useForm()
   const id=JSON.parse(localStorage.getItem("doctorid"))
     

    const {data:profile}=useQuery({
        queryKey:["doctorprofile",id],
        queryFn:async({queryKey})=>{
            try {
              const [_key,id]=queryKey
             const res=await axios.get(`/api/user/doctorprofile/${id}`,{withCredentials:true})   
             console.log(res)
             return res.data.data
            } catch (error) {
                console.log("an error occured",error)
            }
        }
    })

    const {mutate}=useMutation({
      mutationFn:async(data)=>{
        const res=await axios.post(`/api/appointment/apply/${profile._id}`,data,{withCredentials:true})
        console.log(res)
        return res.data
      },
      onSuccess:(res)=>{
      toast.success(res.message)
      },
      onError:(error)=>{
        console.log("an error occured",error)
        toast.error("an error occured while applying")
        toast.error("try to book another slot")
      }
    })

    const submit=(formdata)=>{
       mutate(formdata)
    }
  
  return (
    <div className='md:mx-10'>
      <div>
        <div className='w-40 h-50 bg-gray-100'>
          <img src={profile?.image} className='w-40 h-50'/>
        </div>
        <h1><span className='font-bold'>Name:</span> {profile?.name}</h1>
        <h1><span className='font-bold'>Duration:</span> {profile?.duration?.start}-{profile?.duration?.end}</h1>
        <h1><span className='font-bold'>Qualification:</span>{profile?.qualification}</h1>
        <h1><span className='font-bold'>Specialization:</span>{profile?.specialization}</h1>
        <p className='w-110 md:w-150'>{profile?.bio}</p>
      </div>
      <div className='border flex flex-col justify-center w-70 mbl:w-85 md:w-150 gap-5 px-5 py-10 mt-5 mb-5 rounded-md'>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-3'>
          <label className='text-lg font-bold'>Enter Date<span className='text-sm font-semibold text-gray-300'> valid within 7 days</span></label>
          <input className='border px-4 py-1' type="date" min={today} max={maxdate}
          {...register("date",{required:"date is required"})}/>
          {errors.date && <span className='text-red-500'>
            {errors.date.message}
            </span>}
          
          <label className='text-lg font-bold'>Select Time<span className='text-sm font-semibold text-gray-300'> of appointment</span></label>
          <select className='border px-4 py-1 ' {...register("time",{required:"time is required"})}>
          <option value="">--Select Time--</option>
          <option>08:00Am</option>
          <option>08:30Am</option>
          <option>09:00Am</option>
          <option>09:30Am</option>
          <option>10:00Am</option>
          <option>10:30Am</option>
          <option>11:00Am</option>
          <option>11:30Am</option>
          <option>12:00Pm</option>
          <option>12:30Pm</option>
          <option>02:00Pm</option>
          <option>02:30Pm</option>
          <option>03:00Pm</option>
          <option>03:30Pm</option>
          </select>
          <button className='px-4 py-1 bg-blue-500 text-white' type='submit'>Book Appointment</button>
        </form>
        <Link to="/userlayout" className='lg:hidden text-sm underline text-blue-500'>Back</Link>
      </div>
    </div>
  )
}

export default Doctorprofile