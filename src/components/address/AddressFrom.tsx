'use client'
import React, { useEffect, useState } from "react";
import Select from "../common/Select";
import RedButton from "../common/RedButton";
import usePost from "@/hook/usePost";
import { createAddress } from "@/network/constants";
import { useToast } from "../common/ToastContext";
import { validateForm } from "@/lib/utils";

function AddressForm({
  setFetch,
  selectedAddress,
}: {
  setFetch: React.Dispatch<React.SetStateAction<boolean>>;
  selectedAddress: any;
}) {
  const userId = "";
  const { addToast } = useToast();
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const { postData } = usePost({ url: createAddress });
  const [form, setForm] = useState<any>({
    firstname: "",
    lastname: "",
    companyname: "",
    country: "",
    address: "",
    town: "",
    state: "",
    zipcode: "",
    phone: "",
    email: "",
  });

  const updateAddress = (stateName: string, data: string) => {
    setForm({ ...form, [stateName]: data });
    if (errors[stateName]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[stateName];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!validateForm(form, setErrors)) {
      return;
    }
    try {
      
      
      const res = await postData({
        name: `${form.firstname} ${form.lastname}`,
        address: form.address,
        phoneno: form.phone,
        userId,
      });
      if (res.success === true) {
        addToast(res.message, "success");
        setFetch((prev) => !prev);
      }
    } catch (error) {
      if (error instanceof Error) {
        addToast(error.message, "error");
      } else {
        addToast("An unexpected error occurred", "error");
      }
    }
  };

  useEffect(() => {
    if (selectedAddress) {
      const [firstname, lastname] = selectedAddress.name.split(" ");
      setForm({
        firstname,
        lastname,
        companyname: "",
        country: "",
        address: selectedAddress.address,
        town: "",
        state: "",
        zipcode: "",
        phone: selectedAddress.phoneno,
        email: "",
      });
    }
  }, [selectedAddress]);

  return (
    <div className="w-full flex items-center justify-center lato-font">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-black overflow-y-scroll no-scrollbar"
      >
        <div className="flex gap-3">
          <div>
            <label htmlFor="">First Name *</label>
            <input
              type="text"
              className="input-box"
              value={form.firstname}
              onChange={(e) => updateAddress("firstname", e.target.value)}
            />
            {errors.firstname && (
              <p className="text-sm text-red-600 mt-1">{errors.firstname}</p>
            )}
          </div>
          <div>
            <label htmlFor="">Last Name *</label>
            <input
               value={form.lastname}
              type="text"
              className="input-box"
              onChange={(e) => updateAddress("lastname", e.target.value)}
            />
            {errors.lastname && (
              <p className="text-sm text-red-600 mt-1">{errors.lastname}</p>
            )}
          </div>
        </div>
        <div>
          <label htmlFor="">Company Name (optional)</label>
          <input
             value={form.companyname}
            type="text"
            className="input-box"
            onChange={(e) => updateAddress("companyname", e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Country / Region *</label>
          <Select
          value={form.country}
            options={["India", "United States"]}
            heading="country"
            onChange={updateAddress}
            stateName="country"
          />
          {errors.country && (
            <p className="text-sm text-red-600 mt-1">{errors.country}</p>
          )}
        </div>

        <div>
          <label htmlFor="">Address *</label>
          <input
             value={form.address}
            type="text"
            className="input-box"
            onChange={(e) => updateAddress("address", e.target.value)}
          />
          {errors.address && (
            <p className="text-sm text-red-600 mt-1">{errors.address}</p>
          )}
        </div>

        <div>
          <label htmlFor="">Town / City *</label>
          <input
             value={form.town}
            type="text"
            className="input-box"
            onChange={(e) => updateAddress("town", e.target.value)}
          />
          {errors.city && (
            <p className="text-sm text-red-600 mt-1">{errors.city}</p>
          )}
        </div>

        <div>
          <label htmlFor="">State *</label>
          <Select
             value={form.state}
            options={["Alaska", "Arizona"]}
            heading="state"
            onChange={updateAddress}
            stateName="state"
          />
          {errors.state && (
            <p className="text-sm text-red-600 mt-1">{errors.state}</p>
          )}
        </div>

        <div>
          <label htmlFor="">Zip Code *</label>
          <input
             value={form.zipcode}
            type="text"
            className="input-box"
            onChange={(e) => updateAddress("zipcode", e.target.value)}
          />
          {errors.zipcode && (
            <p className="text-sm text-red-600 mt-1">{errors.zipcode}</p>
          )}
        </div>

        <div>
          <label htmlFor="">Phone *</label>
          <input
             value={form.phone}
            type="text"
            className="input-box"
            onChange={(e) => updateAddress("phone", e.target.value)}
          />
          {errors.phone && (
            <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
          )}
        </div>
        <div>
          <label htmlFor="">email *</label>
          <input
             value={form.email}
            type="email"
            className="input-box"
            onChange={(e) => updateAddress("email", e.target.value)}
          />
          {errors.email && (
            <p className="text-sm text-red-600 mt-1">{errors.email}</p>
          )}
        </div>

        <RedButton
          children={selectedAddress ? "Save changes":"+ Add new Address"}
          className="w-full py-3 rounded-lg "
          type="submit"
        />
      </form>
    </div>
  );
}

export default AddressForm;
