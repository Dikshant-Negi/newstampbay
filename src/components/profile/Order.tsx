import { useRouter } from 'next/navigation'
import React from 'react'

type OrderProps = {
  imageUrl?: string
  title?: string
  price: number
 
  deliveryDate?: string
  address?:string
}

function Order({ imageUrl, address,title, price, deliveryDate }: OrderProps) {
  const router = useRouter()
  return (
    <div className=" border-[1px] border-[#E4E4E4] flex gap-4 rounded-[10px] p-4 w-full  bg-white">
      {/* Image */}
      <div className='bg-[#F5F5F5] rounded-[12px] w-[173px] h-[135px] flex items-center justify-center'>
      <img
        src={imageUrl}
        alt="Order item"
        className=" h-full object-contain rounded"
      />

      </div>

      {/* Order Info */}
      <div className="flex  justify-between  w-full">
        {/* Title & Price */}
        <div>
          <h2 className="text-[15px] font-medium text-[#6B7280]">
            {title}
          </h2>
          <h2 className="text-[15px] font-medium text-[#6B7280]">
            {address}
          </h2>
          <p className="text-[18px] font-semibold mt-2">${price.toFixed(2)}</p>
        </div>

        {/* Delivery Info and Details */}
        <div className="flex flex-col justify-between  mt-2">
          <div className="text-[15px] flex flex-col items-center justify-between text-green-600">
            <p className="font-semibold leading-[25px]">Will be delivered on</p>
            <p className="font-semibold text-[#6B7280] text-[13px] leading-[25px]">{deliveryDate}</p>
          </div>
          <button className="text-red text-[15px] font-semibold hover:underline cursor-pointer flex items-center justify-end gap-1" onClick={()=>router.push('/product-detail')}>
            Details 
            <img src="icon/next.jpg" alt="" className='w-[10px] h-[10px]'/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Order

