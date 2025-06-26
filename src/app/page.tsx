import Banner from "@/components/Banner";

import Footer from "@/components/Footer";
import ProductCard from "@/components/home/ProductCard";

import React from "react";

import Swipper from "@/components/common/Swipper";
import { data } from "@/lib/utils";

function page() {
  return (
    <div className="px-[70px] flex flex-col gap-10 h-full text-black bg-[#FFFFFF] font-primary pt-12">
      {/* <Intro/> */}
      <ProductCard />
      <Swipper data={data} heading="FEATURED PRODUCTS" />
      <Banner />
      <Swipper heading="PRE STAMP COVER" data={data} />
      <Footer />
    </div>
  );
}

export default page;
