import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { IoLogoTwitter } from 'react-icons/io'

function Footer() {
  return (
    <div className='h-full  flex flex-col -mx-[70px]'>
    <div className=' w-full flex gap-4 p-7  justify-between bg-dark-blue text-white'>
        <div className='flex gap-4  justify-between w-[75%]'>
      <div className='flex flex-col w-1/4 gap-3'>
        <h1 className='font-bold text-[14px] leading-[30px]'>TERMS & CONDITIONS</h1>
         <div className="flex flex-col text-[10px] font-medium leading-[16px]">
        <p>By using this website/app, you agree to our Terms & Conditions. All content, products, and services provided are subject to availability and may change without notice.
             We are not responsible for any errors, inaccuracies, or interruptions in service.
             </p>
             </div>
      </div>
      <div className='flex flex-col w-1/4 gap-3'>
        <h1 className='font-bold text-[14px] leading-[30px]'>SUPPORT & HELP</h1>
        <div className="flex flex-col text-[10px]  font-medium leading-[16px]">
        <p> Need assistance? We're here for you!</p>
<p>Customer Support – Contact us for personalized assistance.</p>
<p>📩 Email: support@[yourappname].com </p>
<p>📞 Phone: +123 456 7890</p>
<p>For more details, visit our [Help Center]. </p>

        </div>
      </div>
    <div className='flex flex-col w-1/4 gap-3'>
        <h1 className='font-bold text-[14px] leading-[30px]'>CONTACT</h1>
         <div className="flex flex-col text-[10px]  font-medium leading-[16px] gap-2">
     
       <p className='flex gap-2 text-[10px]'> <FaFacebookF  className='h-[15px] '/>Facebook: [facebook.com/] </p> 
       <p className='flex gap-2'><IoLogoTwitter className='h-[15px] '/>Twitter: [twiiter.com/] </p> 
       <p className='flex gap-2'><GrInstagram className='h-[15px] '/>Instagram: [instagram.com/] </p> 
       </div>
    </div>
    <div className='flex flex-col w-1/4 gap-3'>
        <h1 className='font-bold text-[14px] leading-[30px]'>PRIVACY AND DETAILS</h1>
        
        <div className="flex flex-col text-[10px]  font-medium leading-[16px] gap-1.5">
       <p className='text-[10px] leading-[20px] font-medium'>Your privacy matters to us. We are committed to protecting your personal information and ensuring a secure experience.</p>
       <p className='text-[10px] leading-[20px] font-medium'>
Data Collection – We collect only the necessary information to improve our services.</p>
<p className='text-[10px] leading-[20px] font-medium'>
For full details, please review our [Privacy Policy] page.  </p> 
     </div>
    </div>
    </div>
    <div className='flex flex-col w-[30%] p-5 gap-4'>
        <input className='rounded-[14px] w-full bg-[#353535CC] text-white z-50 px-5 py-4' placeholder='EMAIL'/>
        <input className='rounded-[14px] w-full text-black bg-white z-50 px-5 py-4' placeholder='SUBSCRIBE'/>
    </div>
    </div>
<div className='bg-lighter-blue justify-between flex text-white items-center px-7 py-4'>
<img src="/stampbay_logo.png" className='h-[80px] w-[204px]'/>
<h1 className='font-bold text-[20px] leading-[100%]'>Copyright © 2020 Stampbay, Inc. - All Rights Reserved.</h1>
</div>
    </div>
  )
}

export default Footer
