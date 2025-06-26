"use client";
import React, { useState } from "react";
import Button from "../Button";
import GreyButton from "../GreyButton";
import Order from "./Order";
import useFetch from "@/hook/useFetch";
import { allOrders } from "@/network/constants";
import { useUser } from "@/hook/useUser";

function Orders() {
  const userId = useUser()
  const [activeOrder, setActiveOrder] = useState<string>('Active Orders');
  const {data}  = useFetch({url:allOrders,params:{
    userId:userId
  }})
  
  console.log("data in order",data)
  return (
    <div className=" p-7 shadow-xl  bg-white rounded-[15px] w-[900px] h-[774px] gap-5 flex flex-col lato-font">
      <div className="flex gap-5">
       <button className={`h-[40px] px-4 rounded-[15px] cursor-pointer ${activeOrder === 'Active Orders' ? "bg-red text-white" : "bg-gray-200"} `}onClick={()=>setActiveOrder('Active Orders')}>Active Order</button>
        <button className={`h-[40px] px-4 rounded-[15px] cursor-pointer ${activeOrder === 'Past Orders' ? "bg-red text-white" : "bg-gray-200"}`} onClick={()=>setActiveOrder('Past Orders')}>Past Order</button>
      </div>
      <div className="flex flex-col gap-3">
        {activeOrder === "Active Orders" ? (
          <Order
            imageUrl="/preStampCover/stamp1.png"
            title="INDIA CAMPAIGN MAIL: "
            address="1825–26 SIEGE OF BHARATPUR - (DEC 23) STAMPL..."
            price={985.0}
            deliveryDate="21 Dec, Thursday, 10:00am"
          />
        ) : (
          <Order
            imageUrl="/preStampCover/stamp1.png"
            title="INDIA CAMPAIGN MAIL: "
            address="1825–26 SIEGE OF BHARATPUR - (DEC 23) STAMPL..."
            price={1000.0}
            deliveryDate="21 Dec, Thursday, 10:00am"
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
