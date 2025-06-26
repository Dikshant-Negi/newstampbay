'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
function Navbar() {
  const [search,setSearch] = useState<string>("")
  return (
    <div className="w-full flex justify-between gap-20 pt-5 px-[70px] ">
      <img className="w-[204px] h-[80px]" src="stampbay_logo.png" />

      <div className="flex w-full  items-center  justify-center gap-5 lato-font">
        <Link href="/" >Home</Link>
        <Link href="/">Shop</Link>
        <Link href="/">Resource</Link>
      </div>

      <div className="flex gap-[15px] justify-center items-center">
        <FaSearch className=" h-[30px] cursor-pointer " />
        <FaShoppingCart className="h-[30px] cursor-pointer" />
        <FaRegCircleUser className="h-[30px] cursor-pointer" />
      </div>
    </div>
  );
}

export default Navbar;
