"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { cx } from "@/src/utils";
import LinkedInIcon from "../Icons/LinkedIn";
import { TwitterIcon } from "../Icons/Twitter";
import { GithubIcon } from "../Icons/Github";
import { DribbbleIcon } from "../Icons/Medium";
import { SunIcon } from "../Icons/SunIcon";

const Header = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBackground);
  }
  return (
    <header className="w-full bg-purple-400/30 backdrop-blur-sm border-b-2 border-pink-200/20 px-10 flex items-center justify-between fixed top-0 lef-0 right-0 z-40 dark:text-white">
      {/* scroll bg-animation */}
      <div
        className={cx(
          nav && "opacity-100 shadow-purple-300/20 shadow-lg",
          "opacity-0 transition duration-300 absolute inset-0 w-full h-full dark:bg-dark bg-white z-10"
        )}
      />
      {/*  */}
      <div className="z-20 flex w-full items-center justify-between ">
        <Logo />
        <nav className="w-max py-3 px-8 flex items-center font-medium capitalize gap-2">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <button>
            <SunIcon />
          </button>
        </nav>
        <div className="flex gap-3">
          <a href="http://example.com" className="w-6 h-6">
            <LinkedInIcon className=" mr-4 inline-block hover:scale-125 transition-all ease duration-300" />
          </a>
          <a href="http://example.com" className="w-6 h-6">
            <TwitterIcon className=" mr-4 inline-block hover:scale-125 transition-all ease duration-300" />
          </a>
          <a href="http://example.com" className="w-6 h-6">
            <GithubIcon className=" mr-4 inline-block hover:scale-125 transition-all ease duration-300" />
          </a>
          <a href="http://example.com" className="w-6 h-6">
            <DribbbleIcon className=" mr-4 inline-block hover:scale-125 transition-all ease duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
