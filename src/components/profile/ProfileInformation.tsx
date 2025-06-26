'use client';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import GreyButton from "../GreyButton";
import Button from "../Button";
import { useToast } from "../common/ToastContext";
import RedButton from "../common/RedButton";
import usePost from "@/hook/usePost";
import { userProfile } from "@/network/constants";

function ProfileInformation() {
  const { addToast } = useToast();
  const { postData } = usePost({ url: userProfile });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "john@example.com",
      phone: "0000000000",
      password: "123456",
      gender: "Male",
    },
  });

  // Watch values
  const selectedGender = watch("gender");
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const phone = watch("phone");
  const password = watch("password");

  // States to control edit mode
  const [editName, setEditName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  const [editPhone, setEditPhone] = useState(false);
  const [editPassword, setEditPassword] = useState(false);

  const isNameDisabled = !editName && (firstName !== "" || lastName !== "");
  const isEmailDisabled = !editEmail && email !== "";
  const isPhoneDisabled = !editPhone && phone !== "";
  const isPasswordDisabled = !editPassword && password !== "";

  const onSubmit = async (data: any) => {
     addToast("Saved profile", "success");
    // try {
    //   const res = await postData({
    //     email: data.email,
    //     firstName: data.firstName,
    //     lastName: data.lastName,
    //     gender: data.gender,
    //     phone: data.phone,
    //   });
    //   if (res.sucess) {
    //     addToast(res.message, "success");
    //   }
    // } catch (error) {
    //   addToast((error as any)?.message || "An error occurred", "error");
    // }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-7 shadow-xl bg-white rounded-[15px] w-[900px] h-[774px] gap-5 flex flex-col lato-font"
    >
      {/* Full Name */}
      <div className="w-1/2 flex justify-between items-center">
        <h1 className="text-[#6B7280] text-[20px] font-semibold">Full Name</h1>
        {(firstName || lastName) && (
          <button
            type="button"
            className="text-red text-[16px] font-semibold leading-[24px] cursor-pointer"
            onClick={() => setEditName(true)}
          >
            Edit
          </button>
        )}
      </div>
      <div className="flex justify-between w-full gap-5">
        <input
          {...register("firstName")}
          className="w-1/2 rounded-[12px] bg-[#F3F3F3] disabled:cursor-not-allowed px-5 py-3 outline-none"
          placeholder="Your First Name"
          disabled={isNameDisabled}
        />
        <input
          {...register("lastName")}
          className="w-1/2 rounded-[12px] disabled:cursor-not-allowed bg-[#F3F3F3] px-5 py-3 outline-none"
          placeholder="Last Name"
          disabled={isNameDisabled}
        />
      </div>

      {/* Gender */}
      <div className="flex flex-col gap-2">
        <h1 className="text-[20px] text-[#6B7280] font-semibold">
          Your Gender
        </h1>
        <div className="flex gap-5 py-3">
          <GreyButton
            text="Male"
            onClick={() => setValue("gender", "Male")}
            className={`w-[100px] ${
              selectedGender === "Male" ? "bg-red text-white" : "bg-gray-300"
            }`}
          />
          <GreyButton
            text="Female"
            onClick={() => setValue("gender", "Female")}
            className={`w-[100px] ${
              selectedGender === "Female" ? "bg-red text-white" : "bg-gray-300"
            }`}
          />
        </div>
      </div>

      {/* Email */}
      <div className="w-[50%] flex justify-between items-center">
        <h1 className="text-[#6B7280] text-[20px] font-semibold">
          Email Address
        </h1>
        {email && (
          <button
            type="button"
            className="text-red text-[16px] font-semibold leading-[24px] cursor-pointer "
            onClick={() => setEditEmail(true)}
          >
            Edit
          </button>
        )}
      </div>
      <input
        {...register("email")}
        className="w-[50%] rounded-[12px] outline-none bg-[#F3F3F3] px-5 py-3 disabled:cursor-not-allowed"
        placeholder="Your Email address"
        disabled={isEmailDisabled}
      />

      {/* Phone Number */}
      <div className="w-[50%] flex justify-between items-center">
        <h1 className="text-[#6B7280] text-[20px] font-semibold">
          Phone Number
        </h1>
        {phone && (
          <button
            type="button"
            className="text-red text-[16px] font-semibold leading-[24px] cursor-pointer"
            onClick={() => setEditPhone(true)}
          >
            Edit
          </button>
        )}
      </div>
      <input
        {...register("phone")}
        className="w-[50%] rounded-[12px] outline-none bg-[#F3F3F3] px-5 py-3 disabled:cursor-not-allowed"
        placeholder="Enter your phone number"
        disabled={isPhoneDisabled}
      />

      {/* Password */}
      <div className="w-[50%] flex justify-between items-center">
        <h1 className="text-[#6B7280] text-[20px] font-semibold">Password</h1>
        {password && (
          <button
            type="button"
            className="text-red text-[16px] font-semibold leading-[24px] cursor-pointer"
            onClick={() => setEditPassword(true)}
          >
            Edit
          </button>
        )}
      </div>
      <input
        {...register("password")}
        className="w-[50%] rounded-[12px] outline-none  bg-[#F3F3F3] px-5 py-3 disabled:cursor-not-allowed"
        type="password"
        placeholder="Password"
        disabled={isPasswordDisabled}
      />

      <input type="hidden" {...register("gender")} />

      {/* Buttons */}
      <div className="flex gap-5 text-white text-[15px] py-5">
        <button
          type="button"
          className="px-5 py-3 rounded-[12px] hover:cursor-pointer bg-[#6B7280] cursor-pointer"
          onClick={() => {
            addToast("Deactivated Successfully", "success");
          }}
        >
          Deactivate
        </button>
        <RedButton
          className="px-5 py-3 rounded-[15px]"
          children="Delete"
          type="button"
          onClick={() => {
            addToast("Deleted Successfully", "success");
          }}
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-[12px] bg-blue-600 text-white font-semibold  cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default ProfileInformation;
