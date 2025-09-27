import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Alldoctors = (props) => {
    const[id,setid]=useState("")
    const queryClient=useQueryClient()
    const navigate=useNavigate()

    const API = import.meta.env.VITE_API_URL;
    
    const {data:doctors}=useQuery({
        queryKey:["doctors"],
        queryFn:async()=>{
            try {
                const res=await axios.get(`${API}/doctor/alldoctors`,{withCredentials:true})
                console.log(res)
                return res?.data?.data  || []
            } catch (error) {
                console.log("an error occured",error)
            }
        }
    })

    const {mutate,data}=useMutation({
            mutationFn:async()=>{
                console.log(props.result)
                const res=await axios.post(`${API}/doctor/getspecial/${props.result}`,{},{withCredentials:true})
                console.log(res)
                return res.data.data
            },
            onSuccess:()=>{
            console.log("data fetched succesfully")
            },
            onError:(err)=>{
                console.log("an error occured",err)
            }
        })

    useEffect(()=>{
       if(props.result!==""){
        mutate()
       }
    },[props.result])
    const handleclick=(id)=>{
        console.log("running")
        localStorage.setItem("doctorid",JSON.stringify(id))
    
    navigate("/doctordata")
    }
  return (
    <div className='w-screen overflow-x-hidden'>
       <div className='flex flex-col mx-5 sm:mx-10 mt-10 items-center justify-center'>
        <h1 className='font-bold text-lg mb-5'>Top Doctors to Book</h1>
        <p className='font-semibold tracking-tighter w-80 md:w-100'>Simply browse through our extensive list of trusted doctors</p>
        
       {props.result ? (
        <div  className='grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-5 mb-10'>
        {data?.map(item=>(
           <div onClick={()=>handleclick(item._id)} className='cursor-pointer relative w-[110px] md:w-[160px] md:h-[240px] h-[200px] shadow-md'>
                <div className='shadow-md'>
                <h1 className='absolute bottom-13 mx-1 font-semibold text-blue-500'>available</h1>
                <h1 className='absolute bottom-8 mx-1 font-bold'>{item.username}</h1>
                <p className='absolute bottom-3 mx-1 text-sm font-semibold'>{item.specialization}</p>
            
                </div>
            </div> 
        ))}
        </div>
       ) : (
         <div  className='grid grid-cols-3 md:grid-cols-4 gap-1 md:gap-5 mb-10'>
        {doctors?.map(item=>(
            <div onClick={()=>handleclick(item._id)}  className='relative w-25 sm:w-30 mbl:w-30 md:w-40 md:h-60 h-50 shadow-md'>
                <div className='shadow-md'>
                <img src={item.image} className='absolute top-0 w-30 h-36'/>
                <h1 className='absolute bottom-8 mx-1 font-semibold text-blue-500'>available</h1>
                <h1 className='absolute bottom-4 mx-1 font-bold'>{item.username}</h1>
                <p className='absolute bottom-0 mx-1 text-sm font-semibold'>{item.specialization}</p>
            
                </div>
            </div>
        ))}
        </div>
       )}
      </div>
    </div>
  )
}

export default Alldoctors
