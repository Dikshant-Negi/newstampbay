'use client';
import React from "react";
import Button from "../Button";
import { useToast } from "../common/ToastContext";
import { useRouter } from "next/navigation";

type SidebarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const Sidebar = ({ activeSection, setActiveSection }: SidebarProps) => {
  const {addToast} = useToast()
  const router = useRouter()
  const sections = [
    "Profile Information",
    "My Addresses",
    "Orders",
    "Wishlist",
    "Change Password",
  ];
  return (
    <div className=" whitespace-nowrap flex flex-col  bg-white  shadow-xl rounded-[15px] px-7 py-4 gap-4 justify-between  h-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center p-3">
          <img
            src="/profile_photo.jpg"
            className="rounded-full h-[140px] w-[140px]"
          />
        </div>

        <div className="flex flex-col gap-2 justify-center items-center">
          <h1 className="text-[20px] font-medium text-black">Alexa Rawles</h1>
          <h3 className="text-[16px] text-[#6B7280]">alexarawles@gmail.com</h3>
        </div>

        <div className="flex flex-col gap-3 justify-center  items-start text-[20px] text-[#6B7280] py-2 leading-[100%]">
          {sections.map((item, index) => (
            <button
              onClick={() => setActiveSection(item)}
              className={`hover:bg-red justify-start flex px-3 hover:text-white w-full py-3 hover:rounded-[12px] ${activeSection === item ?"text-red bg-red-300 rounded-[15px]":""}`}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <Button
        className="text-[20px] font-semibold mb-3 justify-center"
        text="Log out"
        onClick={()=>{
          addToast("Logout successfully",'success')
          router.push('/')
        }}
      ></Button>
    </div>
  );
};

export default Sidebar;
