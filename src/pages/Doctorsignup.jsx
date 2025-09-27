import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Camera } from 'lucide-react'
import { toast } from 'react-toastify'
const Doctorsignup = () => {
    const {register,handleSubmit,reset}=useForm()
    const queryClient=useQueryClient()
    const navigate=useNavigate()

    const API = import.meta.env.VITE_API_URL;

    const {mutate}=useMutation({
      mutationFn:async(data)=>{
            const res=await axios.post(`${API}/doctor/signup`,data,{
              headers:{
                "Content-Type":"multipart/form-data"
              },
              withCredentials:true
            })
            console.log(res)
            return res.data
      },
      onSuccess:(data)=>{
        queryClient.invalidateQueries(["auth"])
        reset()
        toast.success(data.message)
        navigate("/doctorsignup")
      },
      onError:(error)=>{
        console.log("an error occured",error)
      }
    })
    
    const submitform=(formdata)=>{
     const formdataobj=new FormData(); 
      formdataobj.append("username",formdata.username)
      formdataobj.append("email",formdata.email)
      formdataobj.append("password",formdata.password)
      formdataobj.append("room",formdata.room)
      formdataobj.append("fee",formdata.fee)
      formdataobj.append("specialization",formdata.specialization)
      formdataobj.append("qualification",formdata.qualification)
     
      formdataobj.append("experience",formdata.experience)
      formdataobj.append("image",formdata.image[0])
      console.log("formdataobj",formdataobj)
       mutate(formdataobj)
    }
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
     <Link to="/adminlayout" className=' mt-15 text-base underline text-blue-500'>Back</Link>
      
      <div className='xs:w-90xsm:w-100 md:w-150 h-135 md:h-120 px-2 py-2 rounded-md flex flex-col items-center justify-center'>
       
        <h1 className='text-xl font-bold mb-5'>Add Doctor</h1>
        <form onSubmit={handleSubmit(submitform)} className='relative grid grid-cols-2 md:grid-cols-3 gap-2 mx-5'>
            <div className='flex flex-col'>
            <label className='font-semibold '>Name</label>
           <input className='px-4 py-1 rounded-md' type='text' placeholder='doctor' {...register("username",{required:true})}/>
           </div>
           <div className='flex flex-col'>
            <label className='font-semibold '>Email</label>
            <input className='px-4 py-1 rounded-md' type='text' placeholder='test@gmail.com' {...register("email",{required:true})}/>
            </div> 
            <div className='flex flex-col'>
              <label className='font-semibold '>Password</label>
            <input className='px-4 py-1 rounded-md' type='password' placeholder='1234' {...register("password",{required:true})}/>
            </div>
             <div className='flex flex-col'>
              <label className='font-semibold '>Fee</label>
            <input className='px-4 py-1 rounded-md' type='number' placeholder='fee' {...register("fee",{required:true})}/>
             </div>
             <div className='flex flex-col'>
              <label className='font-semibold '>Room</label>
            <input className='px-4 py-1 rounded-md' type='number' placeholder='room no' {...register("room",{required:true})}/>
             </div>
             <div>
              <label className='font-semibold'>Specialization</label>
            <input className='px-4 py-1 rounded-md' type='text' placeholder='eg..' {...register("specialization",{required:true})}/>
             </div>
             <div>
              <label className='font-semibold'>Qualification</label>
            <input className='px-4 py-1 rounded-md' type='text' placeholder='mbbs' {...register("qualification",{required:true})}/>
             </div>
           
           <div className='mt-1/2'>
            <label className='font-semibold'>Experience</label>
            <input className='px-4 py-1 rounded-md' type='text' placeholder='experience' {...register("experience",{required:true})}/>
           </div>
           <div className=''>
            <label className='font-semibold'>Image</label>
          <div className='flex'>
            <Camera/> 
          <input className='absolute opacity-10 w-8' type='file' {...register("image",{required:true})}/>
          
          </div>  
           </div>
            <button className='bg-blue-500 mt-2 px-4 py-1 text-white rounded-md w-35 mx-25 md:mx-55' type='submit'>Add</button>
              </form>
       
        <div>
          
        </div>
        
      </div>
    </div>
  )
}

export default Doctorsignup
