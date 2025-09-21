import React, { useEffect } from 'react'

const Edit = () => {
    useEffect(()=>{
        const item=JSON.parse(localStorage.getItem("doctor"))
        console.log("e",item)
    },[])
  return (
    <div>
      edit
    </div>
  )
}

export default Edit
