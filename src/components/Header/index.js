"use client";
import React, { useEffect, useState } from "react";
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

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const scrollTotal =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollProgress = (window.scrollY / scrollTotal) * 100;
    setScrollPosition(scrollProgress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={cx(
        "w-full  px-10 flex items-center justify-between fixed top-0 lef-0 right-0 z-40 bg-transparent",
        nav ? "text-black shadow-lg" : "text-white"
      )}
    >
      {/* scroll bg-animation */}
      <div
        className={cx(
          nav && "opacity-100 border-slate-200/20 border-[1px]",
          "opacity-0 transition duration-300 absolute inset-0 w-full h-full bg-white z-10"
        )}
      >
        <div
          className="h-[4px] -top-[2px] bg-black absolute"
          style={{ width: `${scrollPosition}%` }}
        ></div>
      </div>
      {/*  */}
      <div className="z-20 flex w-full items-center justify-between ">
        <Logo nav={nav} />
        <nav className="w-max py-3 px-8 flex items-center font-medium capitalize gap-4">
          <Link href="/">Home</Link>
          <Link href="/categories/all">Categories</Link>
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
