import React from "react";
import Link from "next/link";
import { shortBlogs } from "@/src/utils";
import BlogLayoutTwo from "../Blog/BlogLayoutTwo";
import CardHoverEffect from "../Cards/CardHoverEffect";

const RecentPosts = ({ blogs }) => {
  const sortedBlogs = shortBlogs(blogs);
  return (
    <section className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-full px-32 flex flex-col items-center justify-center  py-6 relative">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex w-full justify-between items-center">
        <h2 className="inline-block font-bold capitalize text-4xl text-blue-600 dark:z-10">
          Recent Posts
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-blue-500 text-lg underline underline-offset-2 z-10"
        >
          View All
        </Link>
      </div>
      <CardHoverEffect items={sortedBlogs?.slice(0, 6)} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:lg:grid-cols-4 grid-rows-2 gap-2 mt-6">
        {/* {sortedBlogs?.slice(5, 11)?.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutTwo blog={blog} />
            </article>
          );
        })} */}
      </div>
    </section>
  );
};

export default RecentPosts;
