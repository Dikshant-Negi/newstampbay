import Cart from "@/components/cart/Cart";
import Navbar from "@/components/common/Navbar";
import PriceSummary from "@/components/common/PriceSummary";

import React from "react";

function page() {
  return (
    <div className="text-black  font-primary  ">
      <div className="h-[149px] absolute w-full my-gradient"></div>
      <div className=" grid grid-cols-3 py-15 relative px-[70px] gap-10">
        <Cart />
        <PriceSummary />
      </div>
    </div>
  );
}

export default page;
