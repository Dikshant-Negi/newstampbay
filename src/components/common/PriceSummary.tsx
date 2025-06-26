'use client'
import React from "react";
import RedButton from "./RedButton";

function PriceSummary() {
  return (
    <div className="col-span-1 w-full p-7 shadow-xl  bg-white rounded-[15px] h-screen gap-12 flex flex-col">
      <span className="text-[20px] font-semibold">Price Breakdown</span>

      <div className="flex items-center flex-col w-full px-[20px] gap-5 lato-font">
        <div className="flex justify-between w-full border-b border-gray-700 pb-1">
          <span className="text-left">Subtotal</span>
          <span>$1000</span>
        </div>
        <div className="flex justify-between w-full border-b border-gray-700 pb-1">
          <span className="text-left">Taxes</span>
          <span>$0</span>
        </div>
        <div className="flex justify-between w-full  ">
          <span className="text-left">Total</span>
          <span className="text-right">$1000</span>
        </div>

        <RedButton children="Proceed To Pay " className="py-1 rounded-md w-full"  />
      </div>
    </div>
  );
}

export default PriceSummary;
