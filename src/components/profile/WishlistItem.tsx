"use client";
import React, { useState } from "react";
import Button from "../Button";
import { ImCross } from "react-icons/im";
import IncrementDecrement from "../common/IncrementDecrement";
import { useToast } from "../common/ToastContext";
import usePost from "@/hook/usePost";
import { deleteWishlistItem } from "@/network/constants";

function WishListItem({
  name,
  price,
  inStock,
  quantity: initialQuantity,
  image
}: {
  name: string;
  price: any;
  inStock: boolean;
  quantity: number;
  image?:string
  id?:string
}) {
   const { addToast } = useToast();
  const [quantity, setQuantity] = useState<number>(initialQuantity);

  const {postData} = usePost({url:deleteWishlistItem})

  const handleDelete =async () => {
    await postData({id:"wishlistId"}).then((res) => {
      if (res.success === true) {
        addToast("Item removed from wishlist", "success");
      } else {
        addToast("Failed to remove item", "error");
      }
    });
  };

  return (
    <div className="flex flex-col h-[497px] rounded-[15px] px-4 py-2 justify-between lato-font">
      <div className=" flex flex-col bg-[#F5F5F5] h-[327px] py-2 px-1 gap-2 rounded-[15px]">
        <h1 className="flex justify-end">
          {" "}
          <ImCross className="text-[15px] flex justify-end" onClick={()=>handleDelete()}/>
        </h1>
        <img src="preStampCover/stamp1.png" className="h-[252px]" />
      </div>
      <div className="text-[15px] font-medium leading-[25px] gap-4 flex flex-col">
        <h1 className="uppercase">{name}</h1>
        <div className="flex gap-5">
          <h1>${price}</h1>
          {inStock ? (
            <h1 className="text-[#57A86E]">In stock</h1>
          ) : (
            <h1 className="text-red">Out of stock</h1>
          )}
        </div>
        <div className="flex justify-between gap-2">
         <IncrementDecrement item={2} className=" h-full w-full rounded-lg px-2"/>
          <Button className="text-[15px] px-5 w-full " text="Add to Cart" onClick={()=>addToast(`${name} added to cart`,"success")}/>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
