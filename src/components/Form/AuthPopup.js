"use client";
import React, { useState } from "react";
import LoginFormIllus from "../Icons/LoginFormIllus";
import Image from "next/image";
import crossIcon from "@/public/crossIcon.svg";
import { useDispatch } from "react-redux";
import { setAuthForm } from "@/src/redux/slice/formSlice";
import { motion } from "framer-motion";
import aeroplaneGif from "@/public/airplane.gif";
import { useForm } from "react-hook-form";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const AuthPopup = () => {
  const supabase = createClientComponentClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    const { name, email } = data;
    try {
      setLoading(true);
      let { data, error } = await supabase.rpc("subscribe_user", {
        name_text: name,
        email_text: email,
      });
      if (error) console.error(error);
      else {
        if (data === true) {
          dispatch(setAuthForm(false));
          window.alert("Subscribed successfully!🥳");
        } else {
          window.alert("This account is already subscribed!");
        }
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setAuthForm(false));
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 ">
      <div
        onClick={handleCloseModal}
        className="fixed top-0 left-0 right-0 bottom-0 cursor-pointer bg-slate-800/50 backdrop-blur-sm z-0"
      />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute w-[70%] top-20 h-[500px] left-[15%] bg-white shadow-md overflow-clip flex items-center justify-center border-[1px] border-slate-200 margin-x-auto"
      >
        <LoginFormIllus
          color="#EDF7FA"
          className="absolute -top-10 -right-10 z-10"
        />
        <div className=" absolute -left-48 -bottom-48 border-[#EDF7FA] rounded-full border-[100px] w-[600px] h-[600px] z-10" />
        <div className="absolute -left-12 -bottom-12 z-0 bg-[#EDF7FA] rounded-full w-[300px] h-[300px]" />

        <button onClick={handleCloseModal} className="z-20">
          <Image
            src={crossIcon}
            className="mix-blend-multiply absolute top-5 right-7 w-8 h-8 hover:scale-105 transition-all"
            width={400}
            height={400}
            alt="cross"
          />
        </button>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full bg-transparent p-8 max-w-[500px] z-20"
        >
          <h1 className="text-xl mb-2 flex">
            Subscribe Fast, to get regular updates..
            <span>
              <Image
                src={aeroplaneGif}
                width={400}
                height={400}
                className="w-10 h-10 mix-blend-multiply"
                alt="aeroplane gif"
              />
            </span>
          </h1>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-light" htmlFor="">
              Name
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 40 })}
              placeholder="Ex. John Doe"
              className="text-sm py-3.5 outline-none focus:outline-none border-[1.8px] shadow shadow-slate-200/50 border-slate-300 px-3 mb-4 focus:ring-4 focus:border-black focus:ring-slate-400/40"
            />
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="text-sm font-light" htmlFor="">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true, maxLength: 80 })}
              placeholder="Ex. johndoe@gmail.com"
              className="text-sm py-3.5 outline-none focus:outline-none border-[1.8px] shadow shadow-slate-200/50 border-slate-300 px-3 mb-4 focus:ring-4 focus:border-black focus:ring-slate-400/40"
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white w-full py-2.5 mt-2 border-2 border-black hover:bg-transparent hover:text-black transition-all ease duration-300 hover:shadow-lg text-md"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthPopup;
