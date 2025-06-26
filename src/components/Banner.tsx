"use client"
import { useRouter } from "next/navigation";
import React from "react";

function Banner() {
  const router=useRouter();
  return (
    <div className="-mx-[70px]">
      <div
        className="relative w-full h-[325px] md:h-[325px] lg:h-[350px] bg-cover bg-center"
        style={{ backgroundImage: `url('/banner.jpg')` }}
      >
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Text content */}

        <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4 max-w-screen-xl mx-auto">
          <div className="h-[200px] py-7  flex  gap-12  justify-between">
            <div className="w-1/2 flex flex-col gap-8">
              <h1 className=" text-4xl md:text-4xl lg:text-5xl font-bold text-left">
                GET 30% OFF <br /> ON COLLECTOR’S ITEM
              </h1>
              <button onClick={()=>router.push("/login")}
               className=" w-fit text-white px-5 py-3 hover:px-7 hover:py-4 cursor-pointer rounded-[14px] border-white border-[1px] bg-gradient-to-b from-[#5B5B59] to-[#999999]">
                Sign up now
              </button>
            </div>

            <p className="w-1/2  mt-14 text-[20px] leading-[30px] font-semibold text-justify">
              We offer a curated collection of rare, vintage, and exclusive
              collector stamps from around the globe. Whether you're a
              passionate philatelist or just starting your collection, discover
              unique pieces that tell a story.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
