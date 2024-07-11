import { shortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../Blog/BlogLayoutOne";

const FeaturedPosts = ({ blogs }) => {
  const sortedBlogs = shortBlogs(blogs);
  return (
    <section className="md:max-w-[1000px] w-full mt-20 px-5 flex flex-col items-center justify-center">
      <h1 className="w-full inline-block font-semibold capitalize text-4xl">
        Featured Posts
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-1 md:gap-4 mt-8">
        <article className="col-span-1 row-span-2">
          <BlogLayoutOne blog={sortedBlogs[2]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutOne blog={sortedBlogs[3]} />
        </article>
        <article className="col-span-1 row-span-1">
          <BlogLayoutOne blog={sortedBlogs[4]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPosts;
