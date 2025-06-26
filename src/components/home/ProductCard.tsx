'use client'
import React from "react";
import RedButton from "../common/RedButton";
import { useRouter } from "next/navigation";

function ProductCard() {
const router = useRouter()
  const data = [
    {
      title: "RETAIL",
      description:
        "We welcome you to a world where every stamp tells a story. Whether you're sealing important moments,",
      image: "/home/retail.jpg",
      content: "One line here",
      route: "/",
    },
    {
      title: "AUCTION",
      description:
        "Our April Auction has concluded",
      image: "/home/retail.jpg",
      content: "One line here",
      route: "/",
    },
    {
      title: "PRIVATE TREATY",
      description:
        "We welcome you to a world where every stamp tells a story. Whether you're sealing important moments,",
      image: "/home/retail.jpg",
      content: "One line here",
      route: "/",
    },
    {
      title: "STAMP SOFTWARE",
      description:
        "We welcome you to a world where every stamp tells a story. Whether you're sealing important moments,",
      image: "/home/retail.jpg",
      content: "One line here",
      route: "/",
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-10 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="row-span-1 px-8 py-8 gap-5  rounded-lg flex flex-col justify-center items-center bg-[#F5F5F5]"
        >
          <span className=" text-[40px]/[48px] font-bold ">{item.title}</span>
          <span className="text-center px-8 text-[20px]/[28px] font-medium lato-font">{item.description}</span>
          <img src={item.image} className="w-[191px] h-[191px] bg-[#F5F5F5]" />
          <span className="text-center text-[22px]/[28px] font-bold lato-font" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quae, quas fuga perspiciatis laudantium distinctio </span>
          <RedButton children="Explore Now" className="py-2 px-5 rounded-lg text-[20px]/[28px] font-normal lato-font" onClick={()=>{router.push(item.route)}}/>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
