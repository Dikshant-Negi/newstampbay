import Orders from '@/components/profile/Orders';
import WishListItem from '@/components/profile/WishlistItem';
import Filter from '@/components/shop/Filter';
import ShopCard from '@/components/shop/ShopCard';
import React from 'react'

function page() {

  const filter = [
  { type: "Pre Stamp Covers", count: "27" },
  { type: "Scinde Dawks", count: "2" },
  { type: "Essays & Proofs", count: "48" },
  { type: "1854 Lithographs", count: "71" },
  { type: "Stamps", count: "109" },
  { type: "Early India Cancellations", count: "45" },
  { type: "Postal History", count: "82" },
  { type: "Military & Campaign", count: "31" },
  { type: "Post Independence", count: "9" },
  { type: "Used Abroad", count: "48" },
  { type: "Airmail", count: "43" },
  { type: "Miscellaneous", count: "37" },
  { type: "Telegraphs & Revenues", count: "4" },
  { type: "Gandhi", count: "13" },
  { type: "Other countries", count: "2" },
  { type: "Publications", count: "2" },
  { type: "Uncategorized", count: "1" }
];

  return (
    <div className='grid grid-cols-4 text-black py-12 px-[70px] w-full'>
      <div className='flex flex-col gap-5 w-full'>
        <span className='text-[26px]/[18px] font-semibold'>CATEGORIES</span>
       <Filter filtername={filter}/>
      </div>

      <ShopCard/>
    

    </div>
  )
}

export default page