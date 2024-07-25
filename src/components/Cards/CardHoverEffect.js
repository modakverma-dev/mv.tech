"use client";
import { cn } from "@/src/lib/utils";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import React from "react";

const CardHoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items?.map((item, idx) => (
        <Link
          href={item?.url}
          key={item?.url}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-400 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="relative overflow-hidden rounded-xl">
              <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% via-dark/60 to-dark/90 z-10" />
              <Image
                src={item?.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={item?.image?.blurhashDataUrl || ""}
                alt={item?.title}
                width={item.image.width}
                height={item.image.height}
                className="aspect-[3/2] w-full h-full object-cover object-center group-hover:scale-125 transition-all ease duration-500 delay-200 "
              />
              <CardTitle className="absolute text-2xl line-clamp-4 bottom-2 p-2 z-20 font-semibold">
                {item.title}
              </CardTitle>
            </div>
            <CardDescription className="line-clamp-2">
              {item.description}
            </CardDescription>

            <div className="flex flex-wrap w-full gap-1 pt-3">
              {item?.tags?.map((tag) => (
                <span
                  className="p-1 uppercase text-xs rounded-md px-1 text-bold border-[2px] border-slate-400/50 bg-teal-300/30 text-white"
                  key={tag}
                >
                  #{tag}
                </span>
              ))}
            </div>
            <div className="flex w-full items-center justify-between py-2 text-slate-500">
              <span className="  text-sm">
                {format(new Date(item?.publishedAt), "MMMM dd, yyyy")}
              </span>
              <span className="w-[2px] h-full bg-slate-300 rounded-lg" />
              <span className=" text-sm">{item?.author}</span>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default CardHoverEffect;

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full  overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-zinc-100 font-semibold tracking-wide mt-4",
        className
      )}
    >
      {children}
    </h4>
  );
};
export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
