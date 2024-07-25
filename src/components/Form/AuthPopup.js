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
import { Input } from "../Cards/Input";

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
        className="absolute w-[70%] top-20 h-[500px] left-[15%] dark:text-white bg-white dark:bg-black shadow-md overflow-clip flex items-center justify-center border-[1px] border-slate-200/40 rounded-2xl margin-x-auto"
      >
        <LoginFormIllus
          color="#EDF7FA"
          className="absolute -top-10 -right-10 z-10"
        />
        <div className=" absolute -left-48 -bottom-48 border-[#EDF7FA] rounded-full border-[100px] w-[600px] h-[600px] z-10 dark:border-slate-300" />
        <div className="absolute -left-12 -bottom-12 z-0 bg-[#EDF7FA] rounded-full w-[300px] h-[300px] dark:bg-slate-400" />

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
          <h1 className=" mb-3 text-lg md:text-xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-blue-600  text-center font-sans font-medium">
            Subscribe Fast, to get regular updates..
            <span className="dark:hidden">
              <Image
                src={aeroplaneGif}
                width={400}
                height={400}
                className="w-10 h-10 mix-blend-multiply"
                alt="aeroplane gif"
              />
            </span>
          </h1>
          <div className="w-full flex flex-col gap-2 mb-4">
            <label
              className="text-md font-medium dark:text-blue-500"
              htmlFor=""
            >
              Name
            </label>
            <Input
              type="text"
              {...register("name", { required: true, maxLength: 40 })}
              placeholder="Ex. John Doe"
              className="py-6"
            />
          </div>
          <div className="w-full flex flex-col gap-2 mb-4">
            <label
              className="text-md font-medium dark:text-blue-500"
              htmlFor=""
            >
              Email
            </label>
            <Input
              type="email"
              {...register("email", { required: true, maxLength: 80 })}
              placeholder="Ex. johndoe@gmail.com"
              className="py-6"
            />
          </div>
          <button
            type="submit"
            className="bg-black rounded-lg text-white w-full py-2.5 mt-2 border-2 border-black dark:bg-white dark:text-black dark:border-white dark:shadow-md transition-all ease duration-300 hover:shadow-lg text-lg font-semibold"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default AuthPopup;
