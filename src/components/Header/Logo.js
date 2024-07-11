import Image from "next/image";
import Link from "next/link";
import React from "react";
import profileImg from "@/public/profile.jpg";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-dark dark:text-white gap-2"
    >
      <div className="w-11 h-11 rounded-full overflow-hidden border border-solid border-dark">
        <Image
          src={profileImg}
          width={250}
          height={250}
          alt="profile-logo"
          className="rounded-full object-cover h-auto w-full"
        />
      </div>
      <span className="font-bold text-xl mix-blend-multiply">MV.TECH</span>
    </Link>
  );
};

export default Logo;
