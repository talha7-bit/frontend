import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Aut from '../components/Aut'
import Mnav from '../components/Mnav'
import { Camera } from 'lucide-react'

const Usersignup = () => {
   const[mshow,setmshow]=useState(false)
      const[show,setshow]=useState(false)
    const {register,handleSubmit,reset}=useForm()
    const queryClient=useQueryClient()
    const navigate=useNavigate()

    const API = import.meta.env.VITE_API_URL || "/api";

    const {mutate}=useMutation({
      mutationFn:async(data)=>{
        const res=await axios.post(`${API}/user/signup`,data,{
          headers:{
         "Content-Type":"multipart/form-data"
          },
          withCredentials:true})
        console.log(res)
        return res.data
      },
      onSuccess:()=>{
        navigate("/userlogin")
      },
      onError:(error)=>{
        console.log("an error occured",error)
      }
    })
    const submit=(formdata)=>{
      const formdataobj=new FormData()
      formdataobj.append("username",formdata.username)
      formdataobj.append('email',formdata.email)
      formdataobj.append("password",formdata.password)
      formdataobj.append("image",formdata.image[0])
        mutate(formdataobj)
    }

    
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <div className='absolute top-0'>
        <Navbar mshow={mshow} setmshow={setmshow} show={show} setshow={setshow}/>
     
      </div>
      {show && 
      <div className='absolute top-15 right-20 md:right-30'>
        <Aut/>
      </div>}
     {mshow &&
                 <div className='absolute z-10 md:hidden top-20 right-9 md:right-21'>
                   <Mnav/>
                 </div>}
      <div className='border px-20 py-2 rounded-md flex flex-col items-center justify-center'>
        <h1 className='mb-7 text-xl font-bold text-white'>Create Account</h1>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col'>
            <label className='font-bold text-blue-500'>Name</label>
            <input className='px-4 py-1 rounded-lg border border-gray-200 mt-1'  type='text' placeholder='john doe' {...register("username",{required:true})}/>
            <label className='font-bold text-blue-500'>Email</label>
            <input className='px-4 py-1 rounded-lg border border-gray-200 mt-1'  type='email' placeholder='test@gmail.com' {...register("email",{required:true})}/>
            <label className='font-bold text-blue-500'>Password</label>
            <input className='px-4 py-1 rounded-lg border border-gray-200 mt-1'  type='password' placeholder='1234' {...register("password",{required:true})}/>
           <div className=''>
                       <label className='font-semibold text-blue-500'>Image</label>
                     <div className='flex border px-4 py-1 border-gray-200 rounded-md'>
                       <Camera/> 
                     <input className='absolute opacity-10 w-8' type='file' {...register("image",{required:true})}/>
                     
                     </div>  
                      </div>
            <button className='bg-blue-500 mt-2 px-4 py-1 text-white rounded-md w-35 mx-auto'  type='submit'>Signup</button>
        </form>
        <h1 className='text-sm text-black'>already have account?<Link className='text-blue-500 underline' to="/userlogin">login</Link></h1>

        <Link className='flex mt-20 px-4 py-1 rounded-md text-white bg-blue-500'  to="/doctorsignup">Signup as Doctor</Link>
      </div>
    </div>
  )
}

export default Usersignup
