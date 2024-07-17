import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/profile.jpg";
import { cx } from "@/src/utils";

const Logo = ({ nav }) => {
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
          "font-bold text-xl mix-blend-multiply",
          nav ? "text-black" : "text-white"
        )}
      >
        MV.TECH
      </span>
    </Link>
  );
};

export default Logo;
