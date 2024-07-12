import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 bg-dark flex flex-col items-center">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl font-normal mb-4">
          Interesting Stories | Updates | Guides
        </h3>
        <p className="text-lg mb-6 font-extralight text-slate-300/80">
          Subscribe to learn about new technology and updates. Join over 5000+
          members community to stay up to date with the latest news.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-auto px-4 py-2 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-md transition duration-200 ease-in-out"
          >
            Subscribe
          </button>
        </form>
      </div>
      <p className="mt-6 text-indigo-500 text-sm font-extralight self-center">
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
