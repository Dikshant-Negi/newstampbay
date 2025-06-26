'use client'

import React, { useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/ui/carousel" // adjust based on your file structure
import { ArrowLeft, ArrowRight } from "lucide-react"

const data = [
  {
    img:"preStampCover/stamp1.png",
    price: 2400.00,
    text: "INDIA 1826 ENTIRE FROM CHANDERNAGORE TO INDIGO FACTORY,ADDAH...",
  },
  {
    img: "preStampCover/stamp2.png",
    price: 450.50,
    text: "INDIA 1838 CALCUTTA “SHIP POSTAGE 3/ INLAND DO.6 / AN.9/2 TOLAS”HG SR43 ...",
  },
  {
    img: "preStampCover/stamp3.png",
    price: 325.00,
    text: "INDIA 1818 “CALCUTTA POST NOT PAID/28 JULY 1818” D.C. ON...",
  },
  {
    img: "preStampCover/stamp4.png",
    price: 5500.00,
    text: "INDIA 1830 PRE-STAMP COVER FROM UK TO CALCUTTA",
  },
  {
    img: "preStampCover/stamp5.png",
    price: 12500.00,
    text: "1827 ENTIRE LETTER FROM NORWOOD GREAT BRITAIN TO...",
  }
];

function PreStampCover() {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <div className="relative flex flex-col gap-10 w-full max-w-[1440px] mx-auto px-5 ">
        <div className='flex justify-between'>
      <h1 className="text-[30px] leading-[30px] uppercase font-bold mb-6">
        Pre Stamp Cover
      </h1>
      <h1 className="text-[20px] leading-[30px]  font-bold mb-6 text-red">
        See all
      </h1>

        </div>

      <Carousel setApi={setApi} opts={{ loop: true, align: 'start' }}>
        <CarouselContent className="-ml-2 md:-ml-4">
          {data.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/4 px-2 md:px-4"
            >
              <FeatureCard img={item.img} price={item.price} text={item.text} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Optional navigation buttons */}
        <div className="absolute -left-18 top-1/2 transform -translate-y-1/2 z-10">
          <button className='flex gap-2 items-center justify-center'
          onClick={() => api?.scrollPrev()} aria-label="Previous">
          <h1 className='text-red text-[15px] leading-[30px] font-bold'>PREV</h1>  <ArrowLeft className="w-4 h-4 text-[#D71920]" />
          </button>
        </div>
        <div className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10">
          <button className='flex gap-2 items-center justify-center'
          onClick={() => api?.scrollNext()} aria-label="Next">
          <h1 className='text-red text-[15px] leading-[30px] font-bold'>NEXT</h1>  <ArrowRight className="w-4 h-4 text-[#D71920]" />
          </button>
        </div>
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 gap-2 items-center">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all  ${
              index === current ? "bg-red w-3 h-3" : "bg-gray-300"
            }`}
            aria-label={`Go to product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default PreStampCover;
