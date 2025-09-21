import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Myprofile = () => {

    const {data}=useQuery({
        queryKey:["userprofile"],
        queryFn:async()=>{
            try {
              const res=await axios.get("/api/user/profile",{withCredentials:true})
              console.log(res)
              return res.data.data  
            } catch (error) {
               console.log("an error occured",error) 
            }
        },
        retry:false
    })
    useEffect(()=>{
   localStorage.setItem("user",JSON.stringify(data))
    },[data])
  return (
    <div>
      <div className='w-40 h-50 bg-gray-200'>
       <img src={data?.image} className='w-40 h-50'/>
      </div>
      <div>
        <h1><span className='font-bold'>Name:</span>{data?.username}</h1>
        <h1><span className='font-bold'>Email:</span>{data?.email}</h1>
      </div>
       </div>
  )
}

export default Myprofile
