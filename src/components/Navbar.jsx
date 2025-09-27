import React, { useEffect, useState } from 'react'
import pic from "../assets/logo.jpeg"
import { Link, useNavigate } from 'react-router-dom'
import { Menu} from "lucide-react"
import { useAdmin, useAuth, useAuthenticate } from '../hook/useAuth'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { toast } from 'react-toastify'
const Navbar = (props) => {
  
  const[result,setresult]=useState(false)
  const queryClient=useQueryClient()
    const navigate=useNavigate()
    
    const {data:authdoctor,authdoctorisLoading}=useAuth()
    const {data:authuser}=useAuthenticate()
    const {data:authadmin}=useAdmin()

    const API = import.meta.env.VITE_API_URL;


    const {mutate:doctor}=useMutation({
        mutationFn:async()=>{
          const res=await axios.post(`${API}/doctor/logout`,{},{withCredentials:true})
          console.log(res)
          return res.data
        },
        onSuccess:()=>{
          queryClient.invalidateQueries(["auth"])
          toast.success("doctor logout succesfully")
          navigate("/")
          window.location.reload()
        },
        onError:(err)=>{
          consoel.log("an error occured",err)
          toast.error("an error occured please try again")
        }
       })

       const {mutate:user}=useMutation({
        mutationFn:async()=>{
          console.log('working')
          const res=await axios.post(`${API}/user/logout`,{},{withCredentials:true})
          console.log(res)
          return res.data
        },
        onSuccess:()=>{
           queryClient.invalidateQueries(["authenticate"])
          toast.success("user logout succesfully")
        },
        onError:(err)=>{
          console.log("an error occured",err)
          toast.error("an error occured please try again")
        }
       })

       const {mutate:admin}=useMutation({
        mutationFn:async()=>{
         
          const res=await axios.post(`${API}/admin/logout`,{},{withCredentials:true})
           
          console.log(res)
          return res.data
        },
        onSuccess:()=>{
           queryClient.invalidateQueries(["admin"])
          toast.success("admin logout succesfully")
        },
        onError:(err)=>{
          consoel.log("an error occured",err)
          toast.error("an error occured please try again")
        }
       })

    const handleclick=()=>{
      if(authdoctor){
       doctor()
       navigate("/")
      }else if(authuser){
       user()
       navigate("/")
      }else if(authadmin){
       admin()
       navigate("/")
      }else{
       props.setshow(!props.show)
      }
    }
  
  return (
    <div className='relative w-screen h-10 mt-5'>
     <div className='flex items-center justify-between mx-10 border-b'>
      <div className='flex gap-1 mb-3'>
      <img src={pic} className='w-8 h-8'/>
      <h1 className='font-bold text-xl text-blue-500'>Prescripto</h1>
      </div>
      <div className='hidden lg:flex mb-3'>
        <Link to="/" className='font-semibold mx-1'>Home</Link>
        <Link to="/doctors" className='font-semibold mx-1 cursor-pointer'>All Doctors</Link>
        <Link to="/about" className='font-semibold mx-1'>About</Link>
        
      </div>
      <div className='flex gap-2 mb-3'>
      <button onClick={handleclick} className='bg-blue-500 px-4 py-1 text-white rounded-full'>{(authadmin || authuser || authdoctor) ? "Logout" : "Login"}</button>
       <div className='mt-1 text-blue-500 flex lg:hidden cursor-pointer'>
        <Menu onClick={()=>props.setmshow(!props.mshow)}/>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
