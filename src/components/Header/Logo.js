"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { cx } from "@/src/utils";
import { motion } from "framer-motion";

const Logo = ({ nav }) => {
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(0, 0, 0, 1)",
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)",
    },
  };
  return (
    <Link
      href="/"
      className="flex items-center text-dark dark:text-white gap-2"
    >
      <div className="w-10 h-10 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={profileImg}
          width={250}
          height={250}
          alt="profile-logo"
          className="rounded-full object-cover h-auto w-full"
        />
      </div>
      <span
        className={cx(
          "font-bold text-xl mix-blend-multiply flex items-center gap-1",
          nav ? "text-black" : "text-white"
        )}
      >
        <svg
          className="w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
            variants={icon}
            initial={!nav ? "hidden" : "visible"}
            animate={!nav ? "visible" : "hidden"}
          />
        </svg>
        V.TECH
      </span>
    </Link>
  );
};

export default Logo;
