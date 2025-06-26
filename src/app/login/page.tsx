"use client";
import usePost from "@/hook/usePost";
import { signindb, signup } from "@/network/constants";
import React, { useState, FormEventHandler } from "react";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react"; // Icon package (optional)
import Loader from "@/components/common/Loader";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/common/ToastContext";

function Page() {
  const { addToast } = useToast();
  const router = useRouter();
  const [signin, setSignin] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState(false);
  const { postData, loading } = usePost({ url: signup });
  const { postData: signInPostData, loading: signinloading } = usePost({
    url: signindb,
  });

  const [form, setForm] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (signin) {
      addToast("Login successfull", "success");
      router.push("/");
    } else {
      addToast("Signup successfull please login", "success");
      setSignin(true);
    }
    // try {
    //   const postFn = signin ? signInPostData : postData;
    //   const res = await postFn(form);
    // //  console.log("res -->", res);

    //   if (res.success === true) {
    //     if (signin) {
    //       localStorage.setItem("userId", res.user.id)
    //       localStorage.setItem("token",res.token)
    //     };

    //     toast.success(res.message);
    //     router.push('/')
    //   } else {
    //     toast.error(res.message);
    //   }
    // } catch (error) {
    //   toast.error(error as string);
    // //  console.error("Error in handleSubmit:", error);

    // }
  };

  if (loading || signinloading) return <Loader />;
  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between px-[70px] text-black lato-font"
    >
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center px-8 py-12 gap-8">
        <img
          src="/stampbay_logo.png"
          alt="Logo"
          className="w-60 h-28 cursor-pointer"
          onClick={() => router.push("/")}
        />
        <h1 className="text-xl text-center leading-relaxed max-w-xs font-medium">
          "Step into the world of rare finds and timeless stamps!"
        </h1>

        <div className="w-full px-16 space-y-5">
          <div>
            <label className="text-gray-600 text-lg">Email</label>
            <input
              className="w-full mt-2 rounded-xl px-5 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red font-sans"
              placeholder="Email"
              type="email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div>
            <label className="text-gray-600 text-lg">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full rounded-xl px-5 py-3 border border-gray-300 pr-12 focus:outline-none focus:ring-2 focus:ring-red"
                placeholder="Password"
                required
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {signin && (
            <div className="text-right text-sm text-red-500 hover:underline cursor-pointer">
              Forgot Password?
            </div>
          )}

          <button
            type="submit"
            className="bg-red text-white w-full py-3 rounded-xl font-semibold hover:bg-red-600 transition-all duration-300"
          >
            {signin ? "Sign in" : "Sign up"}
          </button>

          <div className="flex justify-center items-center gap-2 text-sm">
            <span>
              {signin ? "Don't have an account?" : "Already have an account?"}
            </span>
            <button
              type="button"
              className="text-red font-semibold hover:underline"
              onClick={() => setSignin((prev) => !prev)}
            >
              {signin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>

      <div className="h-full w-1/2 py-[30px]">
        <img src="/login.jpg" className="h-full w-full rounded-[24px]" />
      </div>
    </form>
  );
}

export default Page;
