'use client'
import React, { useState } from 'react'

interface types{
    item:number,
    className:string
}
function IncrementDecrement({item,className}:types) {
    const [quantity,setQuantity] = useState<number>(item || 0)
    function Inc()
    {
        setQuantity((prev)=>prev+1)
    }

    function Dec(){
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    }
  return (
    <div className={`bg-gray-200 flex items-center justify-between ${className}`}>
        <button onClick={()=>Inc()} type='button' className='cursor-pointer'>+</button>
        <span className='text-[20px]/[20px] font-medium'>{quantity}</span>
        <button onClick={()=>Dec()} type='button' className='cursor-pointer'>-</button>
    </div>
  )
}

export default IncrementDecrement