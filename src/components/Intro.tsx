import React from 'react'

function Intro() {
  return (
    <div className='flex justify-between w-full gap-10  '>
      <div className='w-1/2'>
        <h1 className='text-[40px] leading-[48px] font-bold'>"A small stamp, a big statement."</h1>
        <p className='text-[20px] leading-[28px] font-medium'>
            "We welcome you to a world where every stamp tells a story. Whether you're sealing important moments, 
            adding a personal touch, or making a lasting impression, we’re here to bring your vision to life. Let’s create something timeless—together."
            </p>
      </div>
      <div className='grid grid-cols-3 gap-[20px] w-1/2'>
        <img src="/intro/intro1.jpg" className='w-[191px] h-[191px] rounded-[26.34px]'/>
        <img src="/intro/intro2.jpg" className='w-[191px] h-[191px] rounded-[26.34px]'/>
        <img src="/intro/intro3.jpg" className='w-[191px] h-[191px] rounded-full'/>
        <img src="/intro/intro4.jpg" className='w-[191px] h-[191px] rounded-full'/>
        <img src="/intro/intro5.jpg" className='w-[191px] h-[191px] rounded-[26.34px]'/>
        <img src="/intro/intro6.jpg" className='w-[191px] h-[191px] rounded-[26.34px]'/>
      </div>
    </div>
  )
}

export default Intro
