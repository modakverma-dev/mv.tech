"use client";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-20">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-2 border-2 border-slate-500/50 bg-white text-black w-12 h-12 text-xl flex items-center justify-center shadow-md hover:bg-slate-100/80 backdrop-blur-sm transition duration-300 rounded-full"
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
