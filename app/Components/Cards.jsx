import React from 'react'

import { FaRegFileCode } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { MdFileUpload } from "react-icons/md";
import { motion } from 'framer-motion';
const Cards = ({data,refrence}) => {
  
  return (
    <motion.div drag dragConstraints={refrence}  dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }} whileTap={{ scale: 1.2 }} whileHover={{scale:0.8}} className=' relative max-w-48  max-h-60 rounded-3xl overflow-hidden bg-zinc-800  py-5 px-4 text-white'>
      <FaRegFileCode className=' text-2xl ml-2 mt-2' />
      <p className=' p-2 text-sm leading-tight'>{data.desc}</p>
      <div className=' futter  left-0 w-full  absolute bottom-0 ' >
        <div className=' flex items-center justify-between py-3 px-6'>
          <h5>{data.fileSize}</h5>
          <span className='cursor-pointer flex items-center justify-center bg-zinc-200 w-7 h-5 rounded-full'>
            {data.close ?   <IoCloseSharp className=' text-black'/>  :data.tag.tagColor =="orange" ?  <MdFileUpload  className=' text-black'/>:<MdFileDownload className=' text-black'/>}
        </span>
        
        
        </div>
        {data.tag.isOpen && (
<div className={`tag ${data.tag.tagColor !== "green" ? `bg-${data.tag.tagColor}-600 `: "bg-green-600"} w-full h-9 flex items-center justify-center`}>
<h5 className="font-bold">{data.tag.tagTitle}</h5>
</div>
)}
      

      </div>
    </motion.div>
  )
}

export default Cards