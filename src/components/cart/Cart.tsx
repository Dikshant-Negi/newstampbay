"use client";
import React from "react";
import CartCard from "./CartCard";
import useFetch from "@/hook/useFetch";
import { getCart } from "@/network/constants";
import Loader from "../common/Loader";
import { useUser } from "@/hook/useUser";
const cartdata = [
  {
    img: "/cart/stamp.jpg",
    title: "BURMA POSTAL HISTORY - 1843 ",
    amount: "$5500",
    quantity: 1,
  },
  {
    img: "/cart/stamp.jpg",
    title: "BURMA POSTAL HISTORY - 1845 ",
    amount: "$5200",
    quantity: 2,
  },
];
function Cart() {
  const userId = useUser();
  const { data, loading } = useFetch({
    url: getCart,
    params: { userId: userId },
  });
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="col-span-2 p-7 shadow-xl z-50 bg-white rounded-[15px] w-full h-screen gap-12 flex flex-col">
      <span className="text-[20px] font-semibold">Cart</span>
      {cartdata &&
        cartdata.map((item: any, index: number) => (
          // <CartCard
          //   index={index}
          //   id={item.id}
          //   img={item.product.coverImage}
          //   title={item.product.title}
          //   amount={item.product.price}
          //   quantity={item.product.stock}
          // />
          <CartCard
            index={index}
            id={item.id}
            img={item.img}
            title={item.title}
            amount={item.amount}
            quantity={item.quantity}
          />
        ))}
    </div>
  );
}

export default Cart;
