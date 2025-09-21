import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Onboard = () => {
    const {register,handleSubmit,reset}=useForm()
    const queryClient=useQueryClient()
    const navigate=useNavigate()
    const {mutate}=useMutation({
        mutationFn:async(data)=>{
        const res=await axios.post("http://localhost:3000/api/doctor/onboarded",data,{withCredentials:true})
        console.log(res)
        return res.data
        },
        onSuccess:(data)=>{
         queryClient.invalidateQueries(["auth"])
         reset()
         alert(data.message)
         navigate("/doctorlogin")
        },
        onError:(error)=>{
            console.log("an error occured",error)
        }
    })

    const submit=(formdata)=>{
         mutate(formdata)
    }
  return (
    <div className='w-screen h-screen flex flex-col items-center bg-gray-50 justify-center'>
        
      <div className='flex flex-col items-center justify-center bg-gray-400 w-100 px-10 rounded-md'>
        <h1 className='mb-15 text-xl font-bold text-white mt-5'>Onboard Page</h1>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center'>
            <div className='grid grid-cols-2 gap-3'>
                <div>
            <label className='font-semibold text-white'>Specialization</label>
            <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1' type='text' placeholder='enter specialization' {...register("specialization",{required:true})}/>
             </div>
             <div>
             <label className='font-semibold text-white'>Qualification</label>
             <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1'  type='text' placeholder='enter qualification' {...register("qualification",{required:true})}/>
             </div>
             <div>
             <label className='font-semibold text-white'>Room No</label>
             <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1'  type='number' placeholder='enter room no' {...register("room",{required:true})}/>
             </div>
             <div>
             <label className='font-semibold text-white'>Fee</label>
             <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1'  type='number' placeholder='enter fee' {...register("fee",{required:true})}/>
             </div>
             <div>
             <label className='font-semibold text-white'>Start Time</label>
             <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1'  type='text' placeholder='enter start time' {...register("start",{required:true})}/>
            </div>
            <div>
             <label className='font-semibold text-white'>End Time</label>
             <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1'  type='text' placeholder='enter end time' {...register("end",{required:true})}/>
             </div>
             <div>
             <label className='font-semibold text-white'>Break Time</label>
             <input className='border-gray-100 px-4 py-1 border rounded-md w-40 mt-1'  type='text' placeholder='enter time for break' {...register("breaktime",{required:true})}/>
             </div>
             <div>
            
             </div>
             </div>
             <button className='mt-8 mb-8 px-4 py-1 bg-gray-700 rounded-md text-white' type='submit'>Complete Onboard</button>
        </form>
      </div>
    </div>
  )
}

export default Onboard
