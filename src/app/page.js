import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import SkillsSection from "../components/Home/SkillsSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import MainLayout from "../components/Layouts/MainLayout";
import ContainerScroll from "../components/Cards/ContainerScroll";
import Image from "next/image";
import hiBannerImg from "@/public/homeBanner.png";
import hiBannerImgDark from "@/public/homeBannerDark.png";
import InfiniteMovingCards from "../components/Cards/InfiniteMovingCards";

export default async function Home() {
  const username = "modakverma-dev";
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center relative justify-center dark:bg-black">
        <HomeCoverSection blogs={allBlogs} />
        <div className="bg-white z-20 ">
          <div className=" w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-xl font-semibold text-slate-400PIn">
                    Discover our handpicked favorites – top reads you won't want
                    to miss! <br />
                    <span className=" text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-blue-600 ">
                      Hi !👋
                    </span>
                  </h1>
                </>
              }
            >
              <Image
                src={hiBannerImg}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top dark:hidden"
                draggable={false}
              />
              <Image
                src={hiBannerImgDark}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top light:hidden"
                draggable={false}
              />
            </ContainerScroll>
          </div>
          <FeaturedPosts blogs={allBlogs} />
          <RecentPosts blogs={allBlogs} />
          <ProjectsSection projects={data} />
          {/* <SkillsSection /> */}
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </main>
    </MainLayout>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
