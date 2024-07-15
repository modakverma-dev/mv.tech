"use client";

import { shortBlogs } from "@/src/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Tag from "../Elements/Tag";
import styled from "styled-components";
import { slug } from "github-slugger";
import homeBanner from "@/public/home-banner.jpg";

const HomeCoverSection = ({ blogs }) => {
  const shortedBlogs = shortBlogs(blogs);
  const blog = shortedBlogs[0];
  return (
    <Container className="w-full inline-block ">
      <article className="flex flex-col items-start justify-end relative h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent from-0% via-dark/60 to-dark/90 z-0 " />
        <Image
          src={homeBanner}
          placeholder="blur"
          blurDataURL={blog?.image?.blurhashDataUrl || ""}
          alt={blog?.title}
          fill
          className="h-full w-full object-center object-cover -z-10"
        />
        <div className="w-3/4 flex gap-5 p-8 md:p-12 items-start justify-start z-0 text-light">
          <div className="flex flex-col gap-2 border-slate-200/70 shadow-xl border-2 h-full w-[350px] mb-5 -z-10 rounded-xl overflow-hidden">
            <Image
              src={blog?.image?.filePath?.replace("../public", "")}
              placeholder="blur"
              blurDataURL={blog?.image?.blurhashDataUrl || ""}
              alt={blog?.title}
              width={500}
              height={500}
              className="h-full w-full object-center"
            />
          </div>
          <div className="flex-1">
            <Link href={blog?.url}>
              <h1 className="font-bold capitalize text-4xl">
                <span className="bg-gradient-to-r from-slate-100/70 to-slate-100/70 bg-[length:0px_3px] hover:bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                  {blog?.title}
                </span>
              </h1>
            </Link>
            <p className="font-extralight text-lg text-light/90 my-2">
              {blog?.description}
            </p>
            {blog?.tags?.map((tag) => (
              <Tag key={tag} link={`/categories/${slug(tag)}`} name={tag} />
            ))}
          </div>
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
