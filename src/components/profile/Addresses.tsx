"use client";
import React, { useEffect, useRef, useState } from "react";
import Address from "./Address";
import useFetch from "@/hook/useFetch";
import { getAddress } from "@/network/constants";
import AddressForm from "../address/AddressFrom";
import Loader from "../common/Loader";
import { useUser } from "@/hook/useUser";

function Addresses() {
  const userId = useUser()
  const [fetch, setFetch] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const {
    data: addressData,
    loading,
    fetchData,
  } = useFetch({
    url: getAddress,
    params: {
      userId:"",
    },
    fetchOnLoad: false,
  });

  useEffect(() => {
    fetchData();
  }, [fetch]);

  const handleEdit = (address: any) => {
    setSelectedAddress(address);
    // Smooth scroll to form
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (loading) return <Loader />;
  return (
    <div className="col-span-2 p-7 shadow-xl   bg-white rounded-[15px] w-full h-screen gap-12 flex flex-col overflow-y-auto no-scrollbar">
      {addressData && addressData.length > 0 && (
        <div className="flex flex-col gap-4">
          {" "}
          <h1 className="text-[20px] font-semibold leading-[100%]">
            My Address
          </h1>
          <div className="flex flex-col gap-5 lato-font">
            {addressData &&
              addressData?.map((address: any, index: number) => (
                <Address
                  id={address.id}
                  address={address?.address}
                  name={address?.name}
                  phoneno={address?.phoneno}
                  onEdit={(()=>handleEdit(address))}
                />
              ))}
          </div>
        </div>
      )}
      <div ref={formRef} className="flex flex-col gap-4">
        {" "}
        <h2 className="text-[20px] font-semibold leading-[100%]">
          Add Address
        </h2>
        <AddressForm setFetch={setFetch} selectedAddress={selectedAddress}/>
      </div>
    </div>
  );
}

export default Addresses;
