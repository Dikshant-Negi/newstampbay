'use client'
import React from "react";
import IncrementDecrement from "../common/IncrementDecrement";
import GreyButton from "../GreyButton";
import RedButton from "../common/RedButton";
import { IoSearchOutline } from "react-icons/io5";
import { useToast } from "../common/ToastContext";
import { trim } from "@/lib/utils";
import ZoomCard from "../common/ZoomCard";
function ShowProduct() {
  const {addToast} = useToast()

  const data = {
    img: "/featuredProducts/f1.png",
    heading: "India Campaign Mail",
    price: "$985.00",
    subheading:
      "India Campaign Mail: 1825-26 Siege of Bharatpur – 1825 (Dec 23) stampless folded letter written by Anne Clark to her husband Hezzeikaih Clark, 36th Regt. Native Infantry, 3rd Brigade Field Army before Bharatpore, privately carried by cooly. No postal markings have been recorded for this campaign and all letters seen were processed through the established post office at Agra.",
    quantity: 1,
    stock: 2,
  };

  return (
    <div className="grid grid-cols-3  row-span-1 gap-2">
      {/* <div className="col-span-2 bg-gray-200 flex justify-center rounded-2xl relative">
        <img src={data.img} alt="" className="object-cover  w-[376px] " />
        <div className="w-10 h-10 rounded-full cursor-pointer bg-white absolute right-2 top-2 flex items-center justify-center">
          <IoSearchOutline size={20} />
        </div>
      </div> */}
      <ZoomCard data={data}/>

      <div className="col-span-1 flex flex-col justify-between p-4 bg-white">
        <span className="text-[30px]/[40px] font-semibold">{data.heading}</span>
        <span className="text-[24px]  font-semibold">{data.price}</span>
        <p className="text-[15px]/[24px] text-gray-700">{data.subheading}</p>
        <div className="flex items-center gap-4 mt-2">
          <span className="font-semibold">Quantity</span>
          <IncrementDecrement
            item={data.quantity}
            className="w-[104px] py-1 bg-gray-200 px-2"
          />
        </div>
        <span
          className={` font-sans text-sm ${
            data.stock < 10 ? "text-red" : "text-black"
          }`}
        >
          {" "}
          {`only ${data.stock} left in stock`}
        </span>
        <div className="flex justify-between gap-5 w-full lato-font">
          <GreyButton
            text="Add to cart"
            className="bg-gray-100 text-white h-[50px] w-full  text-sm whitespace-nowrap"
            onClick={()=>addToast(`${trim(data.heading,20)} added to cart`,"success")}
          />
          <RedButton
            children="Buy now"
            className="h-[50px] rounded-[15px] w-full"
       
          />
        </div>
      </div>
    </div>
  );
}

export default ShowProduct;
