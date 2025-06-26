'use client'
import React from "react";
import Button from "../Button";
import WishlistItem from "./WishlistItem";
import { useRouter } from "next/navigation";
import useFetch from "@/hook/useFetch";
import { getWishlist } from "@/network/constants";
import { useUser } from "@/hook/useUser";
const wishlistdata = [
  {
    name: "BURMA POSTAL HISTORY-1843",
    price: "5,500.00",
    inStock: true,
    quantity: 1,
  },
  {
    name: "BURMA POSTAL HISTORY-1843 ",
    price: "5,500.00",
    inStock: false,
    quantity: 1,
  },
  {
    name: "BURMA POSTAL HISTORY-1843",
    price: "5,500.00",
    inStock: true,
    quantity: 1,
  },
];

function Wishlist() {
  const router = useRouter()
  const userId = useUser()
  const {data} = useFetch({url:getWishlist,params:{userId}})

  return (
    <div className=" p-7 shadow-xl  bg-white rounded-[15px] w-[900px] h-[774px] gap-5 flex flex-col">
      <div className="flex justify-between w-full items-center">
        <h1 className="text-[20px] leading-[100%] font-semibold">
          My Wishlist
        </h1>
        <Button text="Add Item" className="text-[15px] px-3 py-2 " onClick={()=>router.push('/shop')}/>
      </div>
      <div className="grid grid-cols-3  gap-5 lato-font">
        {wishlistdata &&
          wishlistdata.map((item: any, index: number) => (
            <WishlistItem
              key={index}
              id={item?.id}
              name={item?.name}
              price={item?.price}
              inStock={item?.inStock}
              quantity={item?.quantity}
              image={item?.product?.coverImage}
            />
          ))}
      </div>
    </div>
  );
}

export default Wishlist;
