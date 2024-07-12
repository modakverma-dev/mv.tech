import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogLayoutTwo = ({ blog }) => {
  return (
    <div className="flex flex-col items-center">
      <Link
        href={blog?.url}
        className="h-full roundex-md overflow-hidden border-2 border-black rounded-xl hover:rounded-none transition-all ease duration-700 delay-200 "
      >
        <Image
          src={blog?.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          alt={blog?.title}
          width={blog.image.width}
          height={blog.image.height}
          className="aspect-[3/2] w-full h-full object-cover object-center hover:scale-125 transition-all ease duration-500 delay-200 "
        />
      </Link>
      <div className="flex w-full flex-wrap gap-1 mt-2">
        {blog?.tags?.map((tag) => (
          <span
            className="text-slate-700 uppercase text-sm rounded-md px-1 text-bold bg-white border-[2px] border-black"
            key={tag}
          >
            {tag}
          </span>
        ))}
        <Link href={blog?.url}>
          <h2 className="font-medium capitalize text-lg">
            <span className="bg-gradient">{blog?.title}</span>
          </h2>
        </Link>

        <span className="font-light text-slate-600 text-sm">
          {format(new Date(blog?.publishedAt), "MMMM dd, yyyy")}
        </span>
      </div>
    </div>
  );
};

export default BlogLayoutTwo;
