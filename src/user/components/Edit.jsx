import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  const navigate=useNavigate()
    const [user,setuser]=useState("")
    const {register,handleSubmit,reset}=useForm()
    useEffect(()=>{
        const item=JSON.parse(localStorage.getItem("user"))
        console.log(item)
        setuser(item)
    },[])

    useEffect(()=>{
      if(user){
        reset({
            name:user.name,
            email:user.email,
            image:user.image
        })
      }
    },[user])

    const {mutate}=useMutation({
      mutationFn:async(data)=>{
        const res=await axios.post("http://localhost:3000/api/user/edit",data,{withCredentials:true})
        console.log(res)
        return res.data;
      },
      onSuccess:(res)=>{
      console.log(res)
      alert(res.message)
      navigate("/userprofile")
      },
      onError:()=>{
        console.log("an error occured",error)
        alert("an error occured")
      }
    })

    const submit=(formdata)=>{
       mutate(formdata)
    }
    
  return (
    <div>
    <form onSubmit={handleSubmit(submit)} className='flex flex-col'>
      <label>Name</label>
        <input type='text' placeholder='Name' {...register("name",{required:true})}/>
        <label>Email</label>
        <input type='email' placeholder='Email' {...register("email",{required:true})}/>
        <button type='submit'>Save Changes</button>
    </form>
    </div>
  )
}

export default Edit
