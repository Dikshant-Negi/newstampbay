'use client'
import { trim } from "@/lib/utils";
import React from "react";
import RedButton from "../common/RedButton";
import { useRouter } from "next/navigation";

function ShopCard() {
  const router = useRouter()
  const data = [
    {
      img: "/featuredProducts/f1.png",
      heading:
        "Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)",
      cost: "$625.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "China – 1901 Deutsche Reichpost/Feld-Postkarte Great Britain used in India – 1898 (Feb 18)",
      cost: "$850.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "1827 entire letter from Norwood, Great Britain to Calcutta, India Great Britain used in India – 1898 (Feb 18)",
      cost: "$12,500.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)",
      cost: "$625.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "China – 1901 Deutsche Reichpost/Feld-Postkarte Great Britain used in India – 1898 (Feb 18)",
      cost: "$850.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "1827 entire letter from Norwood, Great Britain to Calcutta, India Great Britain used in India – 1898 (Feb 18)",
      cost: "$12,500.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)Great Britain used in India – 1898 (Feb 18) Great Britain used in India – 1898 (Feb 18)",
      cost: "$625.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "China – 1901 Deutsche Reichpost/Feld-Postkarte Great Britain used in India – 1898 (Feb 18)",
      cost: "$850.00",
    },
    {
      img: "/featuredProducts/f1.png",
      heading:
        "1827 entire letter from Norwood, Great Britain to Calcutta, India Great Britain used in India – 1898 (Feb 18)",
      cost: "$12,500.00",
    },
  ];

  return (
    <div className="flex flex-col gap-6  col-span-3 ">
      <span className="text-[26px]/[18px] font-semibold">SHOP</span>

      <div className="grid grid-cols-3 w-full justify-between gap-6 lato-font">
        {data.map(({ img, heading, cost }, index) => (
          <div
            className="flex flex-col justify-between col-span-1 border border-gray-200 shadow-md items-center px-3 py-6 cursor-pointer bg-gray-200 rounded-lg gap-4"
            key={heading + index}
            onClick={()=>{router.push('/product-detail')}}
          >
            <img
              src={img}
              alt=""
              className="h-[130px]  object-cover"
            />
            <span className="text-center">{trim(heading, 100)}</span>
            <div className="flex justify-around w-full items-center ">
            <span className="font-bold">{cost}</span>
            <RedButton children="Add to cart" className="py-1 px-3 rounded-md"/>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopCard;
