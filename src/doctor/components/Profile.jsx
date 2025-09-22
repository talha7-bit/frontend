import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {

  const API = import.meta.env.VITE_API_URL;

    const {data:profile}=useQuery({
        queryKey:["profile"],
        queryFn:async(req,res,data)=>{
            try {
             const res=await axios.get(`${API}/doctor/profile`,{withCredentials:true}) 
             console.log(res)
             return res.data.data  
            } catch (error) {
                console.log("an error occured",error)
            }
        }
    })

    useEffect(()=>{
      localStorage.setItem("doctor",JSON.stringify(profile))
    },[profile])
  return (
    <div className='md:mx-1'>
      <div>
        <div className='w-40 h-50 bg-gray-100'>
          <img src={profile?.image} className='w-40 h-50'/>
        </div>
        <h1><span className='font-bold'>Name:</span> {profile?.username}</h1>
        <h1><span className='font-bold'>Duration:</span> {profile?.duration?.start}-{profile?.duration?.end}</h1>
        <h1><span className='font-bold'>Qualification:</span>{profile?.qualification}</h1>
        <h1><span className='font-bold'>Specialization:</span>{profile?.specialization}</h1>
        <p className='w-110 md:w-150'>{profile?.bio}</p>
      </div>
    </div>
  )
}

export default Profile
