'use client';
import React from "react";
import { MdDelete } from "react-icons/md";
import IncrementDecrement from "../common/IncrementDecrement";
import usePost from "@/hook/usePost";

import { deleteCartItem } from "@/network/constants";
import { useToast } from "../common/ToastContext";
interface types {
  img: string;
  title: string;
  amount: string;
  quantity: number;
  index: any;
  id: string;
}

function CartCard({ img, title, amount, quantity, index, id }: types) {
  const { postData: deleteCart } = usePost({ url: deleteCartItem });
  const { addToast } = useToast();
  const handleDelete = async () => {
    try {
      const response = await deleteCart({ id: id });
      if (response.success) {
        addToast(response.message, "success");
      } else {
        addToast(response.message, "error");
      }
    } catch (e) {
        console.error("Error deleting cart item:", e);
    }
  };

  return (
    <div className="flex w-full justify-between lato-font" key={index}>
      <div className="flex gap-3">
        <img src={img} alt="" />
        <div className="flex flex-col gap-5  ">
          <span className="text-center text-gray-100 text-[15px]/[25px] font-semibold">
            {title}
          </span>
          <span className="text-[16px]/[30px] font-semibold">{amount}</span>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <MdDelete className="h-[26px] text-red cursor-pointer" size={30} onClick={()=>{handleDelete()}} />
        <IncrementDecrement
          item={quantity}
          className="gap-2 bg-gray-200 w-[104px] h-[40px] px-2 rounded-sm"
        />
      </div>
    </div>
  );
}

export default CartCard;
