
import PriceSummary from "@/components/common/PriceSummary";
import Addresses from "@/components/profile/Addresses";

import React from "react";

function page() {
  return (
    <div className="text-black  font-primary  ">
      <div className="h-[149px] absolute w-full my-gradient"></div>
      <div className="   grid grid-cols-3 py-15 relative px-[70px] gap-4">
        <Addresses />
        <PriceSummary />
      </div>
    </div>
  );
}

export default page;

