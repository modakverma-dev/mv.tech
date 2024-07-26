"use client";

import { cn } from "@/src/lib/utils";
import React, { useEffect, useState } from "react";

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div className="dark:bg-black dark:text-slate-300/60">
      <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-600  text-center font-sans font-bold pb-10">
        Skills
      </h1>
      <div
        ref={containerRef}
        className={cn(
          "pb-10 scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
            start && "animate-scroll ",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items?.map((item, idx) => (
            <li
              className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px] flex flex-col gap-5 text-slate-500/60"
              style={{
                background:
                  "linear-gradient(rgb(59 130 246 / 0.25), rgb(59 130 246 / 0.5))",
              }}
              key={item?.name}
            >
              <h1 className="text-5xl font-semibold">{item?.name}</h1>
              <div className="flex flex-wrap gap-2">
                {item?.techList?.map((skill, index) => {
                  return (
                    <span
                      key={index}
                      className="text-black shadow dark:text-white p-2 bg-blue-400/70 dark:bg-blue-200/50 rounded-md border-2 dark:border-blue-200/70 border-blue-500/60"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfiniteMovingCards;
