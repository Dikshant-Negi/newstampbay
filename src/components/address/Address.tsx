import React from 'react'

function Address() {
      const data = [
      {img:'/cart/stamp.jpg',title:"BURMA POSTAL HISTORY - 1843 ",amount:'$5500',quantity:1},
      {img:'/cart/stamp.jpg',title:"BURMA POSTAL HISTORY - 1845 ",amount:'$5200',quantity:2}
    ]
     return (
        <div className='col-span-2 p-7 shadow-xl z-50 bg-white rounded-[15px] w-[900px] h-screen gap-12 flex flex-col'>
          <span className='text-[20px] font-semibold'>Cart</span>
         
        </div>
   
  )
}

export default Address