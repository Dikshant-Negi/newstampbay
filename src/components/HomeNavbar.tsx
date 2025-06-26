'use client'
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./common/SearchBar";

function Navbar() {
  const pathname = usePathname();
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  return (
    <div className="w-full flex justify-between gap-20 pt-5 text-black px-[70px] lato-font">
      <img className="w-[204px] h-[80px] cursor-pointer" src="stampbay_logo.png" onClick={()=>router.push('/')}/>

      <SearchBar search={search} setSearch={setSearch}/>

      <div className="flex gap-[15px] justify-center items-center ">
         <Link
          href="/login"
          className={`pb-1 ${pathname.startsWith("/login") ? "border-b-2 border-red" : ""}`}
        >
          Login/Signin
        </Link>
        <Link
          href="/"
          className={`pb-1 ${pathname === "/" ? "border-b-2 border-red" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/shop"
          className={`pb-1 ${pathname.startsWith("/shop") ? "border-b-2 border-red" : ""}`}
        >
          Shop
        </Link>
        {/* <Link
          href="/resource"
          className={`pb-1 ${pathname.startsWith("/resource") ? "border-b-2 border-black" : ""}`}
        >
          Resource
        </Link> */}
        <FaShoppingCart
          className="h-[30px] cursor-pointer"
          onClick={() => router.push("/cart")}
        />
        <FaRegCircleUser
          className="h-[30px] cursor-pointer"
          onClick={() => router.push("/profile")}
        />
      </div>
    </div>
  );
}

export default Navbar;
