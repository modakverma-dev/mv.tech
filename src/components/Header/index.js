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
import { useDispatch } from "react-redux";
import { setAuthForm } from "@/src/redux/slice/formSlice";
import { useThemeSwitch } from "../Hooks/useThemeSwitcher";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const dispatch = useDispatch();
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

  const handleShowAuthModal = () => {
    dispatch(setAuthForm(true));
  };
  return (
    <header
      className={cx(
        "w-full  px-10 flex items-center justify-between fixed top-0 lef-0 right-0 z-40 bg-transparent",
        nav ? "text-black shadow-lg dark:text-white" : "text-white"
      )}
    >
      {/* scroll bg-animation */}
      <div
        className={cx(
          nav && "opacity-100 border-slate-200/20 border-[1px]",
          "opacity-0 transition duration-300 absolute inset-0 w-full h-full bg-white dark:bg-black z-10"
        )}
      >
        <div
          className="h-[4px] -top-[2px] bg-blue-400 absolute"
          style={{ width: `${scrollPosition}%` }}
        ></div>
      </div>
      {/*  */}
      <div className="z-20 flex w-full items-center justify-between ">
        <Logo nav={nav} />
        <nav className="w-max py-3 px-8 flex items-center font-medium capitalize gap-4">
          <Link
            className="hover:scale-105 hover:translate-y-[1px] transition"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:scale-105 hover:translate-y-[1px] transition"
            href="/categories/all"
          >
            Categories
          </Link>
          <button
            className="hover:scale-105 hover:translate-y-[1px] transition"
            onClick={handleShowAuthModal}
          >
            Subscribe
          </button>
          <Link
            className="hover:scale-105 hover:translate-y-[1px] transition"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:scale-105 hover:translate-y-[1px] transition"
            href="/contact"
          >
            Contact
          </Link>
          <button
            onClick={() => {
              setMode(mode === "light" ? "dark" : "light");
            }}
          >
            <SunIcon />
          </button>
        </nav>
        <div className="flex gap-4">
          <a href="http://example.com" className="w-6 h-6">
            <LinkedInIcon className=" inline-block hover:scale-125 transition-all ease duration-300" />
          </a>
          <a href="http://example.com" className="w-6 h-6">
            <TwitterIcon className="inline-block hover:scale-125 transition-all ease duration-300" />
          </a>
          <a
            href="https://github.com/modakverma-dev"
            className="w-6 h-6 bg-white rounded-full"
          >
            <GithubIcon className="inline-block hover:scale-125 transition-all ease duration-300 -translate-y-[1px] scale-[1.06]" />
          </a>
          <a href="http://example.com" className="w-6 h-6">
            <DribbbleIcon className=" nline-block hover:scale-125 transition-all ease duration-300" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
