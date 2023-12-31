"use client"
import React, { useRef, useState } from 'react'
import Cards from './Cards'


const Foreground = () => {
  const ref = useRef(null)
  const data = [
    {
    desc:" data hu mai jo foreground se genrate hu hai...",
    fileSize: "69mb",
     close:true,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
  },
    {
    desc:" data hu mai jo foreground se genrate hu hai...",
    fileSize: "89mb",
     close:false,
    tag:{isOpen:true,tagTitle:"upload",tagColor:"orange"},
  },
    {
    desc:" data hu mai jo foreground se genrate hu hai...",
    fileSize: "21mb",
     close:false,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"},
  },
    {
    desc:" data hu mai jo foreground se genrate hu hai...",
    fileSize: "23mb",
     close:false,
    tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"},
  },
    {
    desc:" data hu mai jo foreground se genrate hu hai...",
    fileSize: "9mb",
     close:true,
    tag:{isOpen:false,tagTitle:"Download Now",tagColor:"red"},
  },
]
  return (
   <div ref={ref} className=' absolute  w-full h-screen opacity-90 z-[3] flex flex-wrap gap-8 p-5'>
    
   {data.map((item, index)=>(

     <Cards data={item} refrence ={ref} />
   ))}
   
   </div>

  )
}

export default Foreground