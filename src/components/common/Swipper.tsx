"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { trim } from "@/lib/utils";
import { useRouter } from "next/navigation";
import RedButton from "./RedButton";
import { useToast } from "./ToastContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import usePost from "@/hook/usePost";
import { addToCart } from "@/network/constants";
import { useUser } from "@/hook/useUser";

type Props = {
  data: any[];
  heading?: string;
};

function Swipper({ data, heading }: Props) {
  const userId = useUser()
  const { addToast } = useToast();
  const router = useRouter();
  const {postData} = usePost({url:addToCart});
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Wait until refs are mounted
  useEffect(() => {
    setIsReady(true);
  }, []);

  const handleAddToCart = async (item: any) => {
    try {
      const response = await postData({userId, productId: item.id, quantity: item.quantity || 1 });
      if (response.success) {
        addToast(`${trim(item.text, 20)} added to cart`, "success");
      } else {
        addToast(response.message, "error");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      addToast("Failed to add item to cart", "error");
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 relative">
      {heading && <div className="text-[30px]/[30px] font-bold">{heading}</div>}

      {/* Custom Navigation Buttons */}
      <div className="flex justify-between text-red font-bold text-[20px] ">
        <div
          ref={prevRef}
          className="flex gap-2 items-center cursor-pointer"
        >
          <img src="/icon/prev.jpg" alt="prev" className="h-[15px]" />
          <span>Prev</span>
        </div>
        <div
          ref={nextRef}
          className="flex gap-2 items-center cursor-pointer"
        >
          <span>Next</span>
          <img src="/icon/next.jpg" alt="next" className="h-[15px]" />
        </div>
      </div>

      {isReady && (
        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          slidesPerGroup={5}
        
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false ,pauseOnMouseEnter:true}}
          pagination={{
            el: paginationRef.current!,
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current!,
            nextEl: nextRef.current!,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            // @ts-ignore
            swiper.params.pagination.el = paginationRef.current;
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full"
        >
          {data.map(({ img, text: itemTitle, price }: any, index: number) => (
            <SwiperSlide key={index}>
              <div
                className="flex flex-col gap-3 justify-between cursor-pointer h-full lato-font"
                onClick={() => router.push("/product-detail")}
              >
                <div className="bg-gray-200 flex justify-center rounded-[15px]">
                  <img src={img} className="h-[237px] object-contain" />
                </div>
                <div className="text-text-100 text-[15px]/[25px]">
                  {itemTitle}
                </div>
                <div className="flex items-center justify-between">
                  <span>${price}</span>
                  <RedButton
                    children="Add to cart"
                    className="h-[40px] text-sm rounded-xl px-2.5 whitespace-nowrap"
                    onClick={(e: any) => {
                      e.stopPropagation();
                      addToast(`${trim(itemTitle, 20)} added to cart`, "success");
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Dots below */}
      <div
        ref={paginationRef}
        className="custom-pagination flex justify-center gap-2 mt-4"
      />
    </div>
  );
}

export default Swipper;
