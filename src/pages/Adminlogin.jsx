import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import Mnav from '../components/Mnav'
import Aut from '../components/Aut'
import { toast } from 'react-toastify'

const Adminlogin = () => {
 
  const[mshow,setmshow]=useState(false)
    const[show,setshow]=useState(false)
    const {register,handleSubmit,reset}=useForm()
    const queryClient=useQueryClient()
    const navigate=useNavigate()

    const API = import.meta.env.VITE_API_URL;

    const {mutate}=useMutation({
        mutationFn:async(data)=>{
            console.log(`Frontend is calling ${API}/admin/login`)
            const res=await axios.post(`${API}/admin/login`,data,{withCredentials:true})
            console.log(res)
            return res.data
        },
        onSuccess:async (res)=>{
            queryClient.invalidateQueries(["admin"])
            toast.success(res.message)
            navigate("/adminlayout")
        },
        onError:(err)=>{
            console.log("an error occured",err)
            toast.error("invalid email or password")
        }
    })

    const submit=(formdata)=>{
        mutate(formdata)
    }
  return (
    <div>
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
      <div className='border px-20 py-10 h-115 xs:w-80 md:w-150 rounded-md flex flex-col items-center justify-center'>
        <h1 className='text-xl md:text-2xl font-bold text-blue-500'>Login as Admin</h1>
        <form onSubmit={handleSubmit(submit)} className='flex flex-col mt-7'>
            <label className='font-bold text-blue-500 mt-3'>Email</label>
            <input className='px-4 py-1 rounded-lg border border-gray-200 mt-1' type='text' placeholder='test@gmail.com' {...register("email",{required:true})}/>
            <label className='font-bold text-blue-500 mt-3'>Password</label>
            <input className='px-4 py-1 rounded-lg border border-gray-200 mt-1' type='text' placeholder='1234' {...register("password",{required:true})}/>
            <button className='bg-blue-500 mt-2 px-4 py-1 text-white rounded-md w-35 mx-auto mt-5'  type='submit'>Login</button>
        </form>
        <h1 className='text-sm text-black'>New here?<Link className='text-blue-500'>signup</Link></h1>

        <Link className='flex mt-26 px-4 py-1 w-33 rounded-md text-white bg-blue-500'  to="/userlogin">Login as User</Link>
      </div>
    </div>
    </div>
  )
}

export default Adminlogin
