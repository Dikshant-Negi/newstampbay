
import ShowProduct from "@/components/product-details/ShowProduct";
import React from "react";
import Swipper from "@/components/common/Swipper";
import { data } from "@/lib/utils";

function page() {
  return (
    <div className="grid grid-rows-2 px-[70px] py-12 text-black gap-10 w-full">
      <ShowProduct />
      <div className="row-span-1 w-full overflow-hidden">
        <Swipper data={data} heading="SUGGESTED" />
      </div>
    </div>
  );
}

export default page;
