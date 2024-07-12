"use client";

import { shortBlogs } from "@/src/utils";
import React, { useEffect, useState } from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";

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
    <section className="md:max-w-[1000px] w-full mt-20 px-5 flex flex-col items-center justify-center">
      <h1 className="w-full inline-block font-semibold capitalize text-4xl">
        Featured Posts
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-1 md:gap-4 mt-8">
        <article className="col-span-1 row-span-2">
          <BlogLayoutOne count={count} blog={sortedBlogs[count]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutOne
            count={count + 1}
            blog={sortedBlogs[(count + 1) % sortedBlogs.length]}
          />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutOne
            count={count + 2}
            blog={sortedBlogs[(count + 3) % sortedBlogs.length]}
          />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
