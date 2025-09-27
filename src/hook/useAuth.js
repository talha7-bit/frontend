import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const useAuth=()=>{
    //console.log(`api from env ${import.meta.env.VITE_API_URL }`)
    const API = import.meta.env.VITE_API_URL ;
    const {data,isLoading,error}=useQuery({
    queryKey:["auth"],
    queryFn:async()=>{
        try {
            const res=await axios.get(`${API}/doctor`,{withCredentials:true})
            console.log(res)
            return res.data
        } catch (error) {
            console.log("an error occured",error)
            return null
        }
    },
    retry:false
})
return {data,isLoading,error}
}

export const useAuthenticate=()=>{
    //console.log(`api from env ${import.meta.env.VITE_API_URL }`)
    const UPI = import.meta.env.VITE_API_URL ;
        const {data,isLoading}=useQuery({
            queryKey:["authenticate"],
            queryFn:async()=>{
                try {
                    const res=await axios.get(`${UPI}/user`,{withCredentials:true})
                    console.log(res)
                    return res.data
                } catch (error) {
                    console.log("an error occured",error)
                }
            },
            retry:false
        })
        return {data,isLoading}
    
}

export const useAdmin=()=>{
    //console.log(`api from env ${import.meta.env.VITE_API_URL }`)
    const AdPI = import.meta.env.VITE_API_URL ;
    const {data,isLoading}=useQuery({
        queryKey:["admin"],
        queryFn:async()=>{
           try {
             const res=await axios.get(`${AdPI}/admin`,{withCredentials:true})
             console.log(res)
             console.log("succesful")
             return res.data
           } catch (error) {
            console.log("an error occured",error)
            throw(error)
           }
        }
    })
    return {data,isLoading}
}