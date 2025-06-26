"use client";
import React, { useEffect, useMemo, useState } from "react";
import RedButton from "./RedButton";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useToast } from "./ToastContext";
import { trim } from "@/lib/utils";

type Props = {
  data: any[];
  heading: string;
  intitialItem: number;
};

function ScrollableCards({ data: newdata, heading, intitialItem }: Props) {
 const { addToast } = useToast();
  const [fullData, setFullData] = useState<any[]>(newdata);
  const [visibleData, setVisibleData] = useState<any[]>([]);
  const [prev, setPrev] = useState<number>(0);
  const [next, setNext] = useState<number>(intitialItem);
  const router = useRouter()
  const dots = useMemo(() => {
    return Math.ceil(fullData.length / intitialItem);
  }, [fullData, intitialItem]);

  useEffect(() => {
    setVisibleData(fullData.slice(prev, next));
  }, [prev, next, fullData]);

  function Prev() {
    if (prev > 0) {
      const newPrev = Math.max(0, prev - intitialItem);
      const newNext = newPrev + intitialItem;
      setPrev(newPrev);
      setNext(newNext);
    }
  }

  function Next() {
    if (next < fullData.length) {
      const newPrev = next;
      const newNext = Math.min(fullData.length, next + intitialItem);
      setPrev(newPrev);
      setNext(newNext);
    }
  }

  function getDot(index: number) {
    return Math.floor(prev / intitialItem) === index;
  }

  return (
    <div className="flex flex-col gap-8 ">
      <div className="flex justify-between items-center">
        <span className="text-[30px]/[30px] font-bold">{heading}</span>
        <span className="text-[20px] text-red cursor-pointer font-semibold">
          See all
        </span>
      </div>

      <div className="flex justify-between text-red font-bold text-[20px] ">
        <button
          onClick={Prev}
          className="flex gap-2 items-center cursor-pointer disabled:cursor-not-allowed"
          disabled={prev === 0}
        >
          <img
            src="/icon/prev.jpg"
            alt=""
            className="h-[15px] object-contain"
          />
          <span>Prev</span>
        </button>
        <button
          onClick={Next}
          className="flex gap-2 items-center cursor-pointer disabled:cursor-not-allowed"
          disabled={next === fullData.length}
        >
          <span>Next</span>
          <img
            src="/icon/next.jpg"
            alt=""
            className="h-[15px] object-contain"
          />
        </button>
      </div>

      <div className="w-full relative overflow-hidden lato-font">
        <AnimatePresence mode="wait">
          <motion.div
            key={prev}
            className="flex gap-6 w-full"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.4 }}
          >
            {visibleData.map(
              ({ img, text: heading, price }: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 min-w-[200px]  justify-between cursor-pointer"
                  onClick={()=>{router.push('/product-detail')}}
                >
                  <div className="bg-gray-200 flex justify-center rounded-[15px]">
                    <img src={img} className=" h-[237px] object-contain" />
                  </div>
                  <div className="text-text-100 text-[15px]/[25px]">
                    {heading}
                  </div>
                  <div className="flex items-center justify-between">
                    <span>{price}</span>
                    <RedButton
                      children="Add to cart"
                      className="h-[40px] text-sm rounded-xl px-2.5 whitespace-nowrap"
                      onClick={()=>addToast(`${trim(heading,20)} added to cart`,"success")}
                    />
                  </div>
                </div>
              )
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-2 justify-center">
        {Array.from({ length: dots }).map((_, index) => {
          const isActive = getDot(index);
          return (
            <div
              key={index}
              className={`${
                isActive
                  ? "bg-red w-[13px] h-[13px] "
                  : "bg-gray-50 w-[10px] h-[10px] "
              } rounded-full`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ScrollableCards;
