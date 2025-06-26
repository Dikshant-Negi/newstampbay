"use client";
import React, { useState } from "react";
import Navbar from "@/components/HomeNavbar";
import Addresses from "@/components/profile/Addresses";
import Orders from "@/components/profile/Orders";
import ProfileInformation from "@/components/profile/ProfileInformation";
import Sidebar from "@/components/profile/Sidebar";
import Wishlist from "@/components/profile/Wishlist";
import ChangePassword from "@/components/profile/ChangePassword";

function Page() {
  const [activeSection, setActiveSection] = useState("Profile Information");

  const renderActiveComponent = () => {
    switch (activeSection) {
      case "Profile Information":
        return <ProfileInformation />;
      case "My Addresses":
        return <Addresses />;
      case "Orders":
        return <Orders />;
      case "Wishlist":
        return <Wishlist />;
      case "Change Password":
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-12 text-black">
      <div className="relative h-[149px] w-full ">
        <div className="h-[149px] absolute w-full my-gradient -z-10"></div>
        <div className="grid grid-cols-3 py-15 gap-10 px-[70px]">
          <Sidebar
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          />
          {renderActiveComponent()}
        </div>  
      </div>

      <div className="px-[70px]">{/* Add additional content if needed */}</div>
    </div>
  );
}

export default Page;
