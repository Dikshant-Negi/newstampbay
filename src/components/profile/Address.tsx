"use client"
import React, { useState } from 'react'
import { BiSolidEdit } from 'react-icons/bi'

function Address({name,phoneno,address,id,onEdit}:{name:string,phoneno:string,address:string,id:string,onEdit:React.Dispatch<any>}) {
    
  return (
    <div className='flex gap-2' key={id}>
      <input type="radio" name="radio" id="" className='' />
     <div className='bg-gray-200 flex justify-between rounded-[12px] p-5 w-full  '>
       <div className='flex flex-col gap-3'>
        <div className='flex gap-2'>
        <p className=''>{name}:</p>
        <p className=''>{phoneno}</p>
        </div>
        <p className='w-[60%]'>{address}</p>
        </div> 
        <BiSolidEdit className='w-[15px] h-[15px] ' onClick={onEdit}/>
      
    </div>
   
    </div>
  )
}

export default Address
