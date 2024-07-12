"use client";

import { shortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import styled from "styled-components";

const HomeCoverSection = ({ blogs }) => {
  const shortedBlogs = shortBlogs(blogs);
  const blog = shortedBlogs[0];
  return (
    <Container className="w-full inline-block ">
      <article className="flex flex-col items-start justify-end relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% to-dark/80 z-0 " />
        <Image
          src={blog?.image?.filePath?.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl}
          alt={blog?.title}
          fill
          className="h-full w-full object-center object-cover -z-10"
        />
        <div className="w-3/4 p-8 md:p-12 items-start justify-center z-0 text-light">
          {blog?.tags?.map((tag) => (
            <Tag key={tag} link={`/categories/${tag}`} name={tag} />
          ))}
          <Link href={blog?.url} className="mt-6">
            <h1 className="font-bold capitalize text-4xl my-3">
              <span className="bg-gradient-to-r from-slate-100/70 to-slate-100/70 bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog?.title}
              </span>
            </h1>
          </Link>
          <p className="font-extralight text-lg text-light/90">
            {blog?.description}
          </p>
        </div>
      </article>
    </Container>
  );
};

export default HomeCoverSection;

const Container = styled.div`
  /* perspective: "preserve-3d";
  transform: perspective(200px) translateZ(-50px) scale(50px);
  position: "absolute";
  top: 0; */
`;
