import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import { format } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

const BlogLayoutOne = ({ blog, count }) => {
  return (
    <AnimatePresence>
      <div className="inline-block overflow-hidden relative bg-transparent h-full">
        <motion.div
          key={blog?.url}
          initial={{
            x: count % 2 === 0 ? "100%" : "-100%",
            xlinkShow: "-100%",
          }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.75 }}
          className="w-full h-full relative"
        >
          <motion.div
            key={blog?.url}
            initial={{ y: "100%", xlinkShow: "-100%" }}
            animate={{ y: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.95 }}
            className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/80 z-0"
          />
          <Image
            src={blog?.image?.filePath?.replace("../public", "")}
            placeholder="blur"
            blurDataURL={blog?.image?.blurhashDataUrl}
            alt={blog?.title}
            width={blog.image.width}
            height={blog.image.height}
            className="h-full w-full object-center object-cover -z-10"
          />
          <div className="w-full absolute bottom-0 p-8 md:p-8 z-20 text-light">
            <div className="flex flex-wrap gap-1">
              {blog?.tags?.map((tag) => (
                <Tag
                  key={tag}
                  link={`/categories/${tag}`}
                  name={tag}
                  className="!py-1 px-2"
                />
              ))}
            </div>
            <Link href={blog?.url} className="mt-6">
              <h1 className="font-medium capitalize text-xl my-3">
                <span className="bg-gradient-to-r from-slate-100/50 to-slate-100/40 bg-[length:0px_2px] hover:bg-[length:100%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                  {blog?.title}
                </span>
              </h1>
            </Link>
            <span className="text-slate-200/80 text-sm font-light">
              {format(new Date(blog?.publishedAt), "MMMM dd, yyyy")}
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BlogLayoutOne;
