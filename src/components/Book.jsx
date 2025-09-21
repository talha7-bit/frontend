import React from 'react'

const Book = () => {
    const list=[
        {
            id:1,
            status:"available",
            name:"doctor",
            specialization:"genralPhysician"
        },
        {
            id:2,
            status:"available",
            name:"doctor",
            specialization:"gynicologist"
        },
        {
            id:3,
            status:"available",
            name:"doctor",
            specialization:"genralneurologist"
        },
        {
            id:4,
            status:"available",
            name:"doctor",
            specialization:"dermitologist"
        },
        {
            id:5,
            status:"available",
            name:"doctor",
            specialization:"gynicologist"
        },
        {
            id:6,
            status:"available",
            name:"doctor",
            specialization:"psycitrist"
        },
        {
            id:7,
            status:"available",
            name:"doctor",
            specialization:"genralPhysician"
        },
        {
            id:8,
            status:"available",
            name:"doctor",
            specialization:"spycitrist"
        },
        {
            id:9,
            status:"available",
            name:"doctor",
            specialization:"dermitologist"
        },
        {
            id:10,
            status:"available",
            name:"doctor",
            specialization:"neurologist"
        },
        {
            id:11,
            status:"available",
            name:"doctor",
            specialization:"neurologist"
        },
        {
            id:12,
            status:"available",
            name:"doctor",
            specialization:"neurologist"
        }
    ]
            return (
    <div className='absolute top-180 w-screen h-full'>
      <div className='flex flex-col w-[85%] mx-10 md:mx-30 mt-10 items-center justify-center'>
        <h1 className='font-bold'>Top Doctors to Book</h1>
        <p className='font-semibold tracking-tighter'>Simply browse through our extensive list of trusted doctors</p>
        <div  className='grid grid-cols-3 lg:grid-cols-6 gap-5 mb-10'>
        {list.map(item=>(
            <div key={item.id} className='relative w-30 md:w-40 md:h-60 h-50 shadow-md'>
                <div className='shadow-md'>
                <h1 className='absolute bottom-13 mx-1 font-semibold text-blue-500'>{item.status}</h1>
                <h1 className='absolute bottom-8 mx-1 font-bold'>{item.name}</h1>
                <p className='absolute bottom-3 mx-1 text-sm font-semibold'>{item.specialization}</p>
            
                </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Book
