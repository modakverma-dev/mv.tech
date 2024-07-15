"use client";

import { shortBlogs } from "@/src/utils";
import React, { useEffect, useState } from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";
import featureIllus from "@/public/FeaturedIllus.svg";
import featuredIllusExtra from "@/public/featuredIllusExtra.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = shortBlogs(blogs);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const countInterval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % sortedBlogs.length);
    }, 8500);
    return () => clearInterval(countInterval);
  }, [sortedBlogs.length]);

  return (
    <div className="relative overflow-x-clip w-screen flex justify-center">
      <motion.div
        initial={{
          x: "80%",
        }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute w-[280px] h-[280px] -bottom-20 -right-8 "
      >
        <Image
          src={featuredIllusExtra}
          width={150}
          height={150}
          alt="illustration"
          className="z-10 w-full h-full"
        />
      </motion.div>
      <motion.div
        initial={{
          y: "40%",
        }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="absolute w-[500px] h-[580px] -bottom-32 -left-40"
      >
        <Image
          src={featureIllus}
          width={150}
          height={150}
          alt="illustration"
          className="z-10 w-full h-full"
        />
      </motion.div>
      <section className="md:max-w-[1000px] w-full mt-10 px-5 flex flex-col items-center justify-center relative">
        <h1 className="w-full inline-block font-semibold capitalize text-4xl font-playwrite">
          Featured Posts
        </h1>
        <div className="grid grid-cols-2 grid-rows-2 gap-1 md:gap-6 mt-8 h-[90vh] w-full">
          <article className="col-span-1 row-span-2 rounded-md overflow-hidden w-full h-full ">
            <BlogLayoutOne count={count} blog={sortedBlogs[count]} />
          </article>
          <article className="col-span-1 row-span-1 w-full h-full rounded-md overflow-hidden ">
            <BlogLayoutOne
              count={count + 1}
              blog={sortedBlogs[(count + 1) % sortedBlogs.length]}
            />
          </article>
          <article className="col-span-1 row-span-1 w-full h-full rounded-md overflow-hidden">
            <BlogLayoutOne
              count={count + 2}
              blog={sortedBlogs[(count + 3) % sortedBlogs.length]}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default FeaturedPosts;
