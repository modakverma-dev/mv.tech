import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutTwo from "@/src/components/Blog/BlogLayoutTwo";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";
import React from "react";
import categoriesBanner from "@/public/categories-banner.jpg";
import Image from "next/image";

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];
  allBlogs?.map((blog) => {
    if (blog?.isPublished) {
      blog?.tags?.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });
  return paths;
}

const page = ({ params }) => {
  const allCategories = ["all"];
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });
  return (
    <article className="min-h-screen">
      <div className="bg-slate-600 h-80 text-white relative overflow-hidden">
        <Image
          src={categoriesBanner}
          className="right-0 w-full h-full object-cover"
          width={1000}
          height={1000}
          alt="banner"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/80 " />
        <div className="absolute top-40 left-20">
          <h1 className="text-4xl font-medium z-20">#{params?.slug}</h1>
          <span className="z-20 py-2 text-slate-200/80 font-extralight">
            Discover more categories
          </span>
        </div>
      </div>
      <Categories categories={allCategories} active={params?.slug} />
      <div className="grid grid-cols-3 grid-rows-2 gap-3 mt-10 px-32 pb-20">
        {blogs?.map((blog, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <BlogLayoutTwo blog={blog} />
            </article>
          );
        })}
      </div>
    </article>
  );
};

export default page;
