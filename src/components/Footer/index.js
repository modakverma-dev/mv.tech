import Link from "next/link";
import React from "react";
import { TwitterIcon } from "../Icons/Twitter";
import { GithubIcon } from "../Icons/Github";
import LinkedInIcon from "../Icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 bg-black flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl sm:text-xl font-light mb-4">
          Interesting Stories | Updates | Guides
        </h3>
        <p className="mb-6 text-slate-200/80 text-sm font-extralight font-playwrite">
          Subscribe to learn about new technology and updates. Join over 5000+
          members community to stay up to date with the latest news.
        </p>

        <div className="grid grid-cols-3 mb-10 border-b-[1.2px] border-slate-200/40 pb-5">
          <div className="flex flex-col gap-1 text-start">
            <span className="uppercase font-light text-md">Content</span>
            <ul className="font-extralight text-sm text-slate-300/80">
              <li className="my-2 cursor-pointer hover:text-white transition">
                Home
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                About
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                Categories
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                Blogs
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 text-start">
            <span className="uppercase font-light text-md">Legal</span>
            <ul className="font-extralight text-sm text-slate-300/80">
              <li className="my-2 cursor-pointer hover:text-white transition">
                Condiciones generales
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                Política de Cookies
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                Prensa
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-1 text-start">
            <span className="uppercase font-light text-md">Contact</span>
            <ul className="font-extralight text-sm text-slate-300/80">
              <li className="my-2 cursor-pointer hover:text-white transition">
                <a href="tel:+91 8091775655">+91 8091775655</a>
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                <a href="https://wa.me/8091775655">Whatsapp</a>
              </li>
              <li className="my-2 cursor-pointer hover:text-white transition">
                <a href="mailto:modakverma.dev@gmail.com">Mail</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full items-center gap-2 justify-center mb-8">
          <div className="bg-slate-300/20 border-[1.5px] border-slate-200/20 p-2 rounded-md cursor-pointer">
            <TwitterIcon className="w-5 h-5" />
          </div>
          <div className="bg-slate-300/20 border-[1.5px] border-slate-200/20 p-2 rounded-md cursor-pointer">
            <GithubIcon className="w-5 h-5" />
          </div>
          <div className="bg-slate-300/20 border-[1.5px] border-slate-200/20 p-2 rounded-md cursor-pointer">
            <LinkedInIcon className="w-5 h-5" />
          </div>
        </div>

        <form className="flex flex-col sm:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="enter your email"
            className="w-full sm:w-auto px-4 py-1 bg-transparent border-white border focus:outline-none focus:ring-2 font-light text-sm bg rounded-s-sm"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-white px-4 rounded-e-sm border-white border py-1 transition duration-200 ease-in-out text-black text-sm hover:bg-black hover:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
      <p className="mt-6 text-slate-200/80 text-sm font-extralight self-center">
        © 2024 MV.TECH. All rights reserved. Made with ❤ by{" "}
        <a
          target="_blank"
          className="hover:text-pink-500 hover:scale-105 inline-block transition-all duration-300 hover:underline"
          href="https://github.com/modakverma-dev"
        >
          modak verma
        </a>
      </p>
    </footer>
  );
};

export default Footer;
