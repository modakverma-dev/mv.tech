import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import SkillsSection from "../components/Home/SkillsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative justify-center ">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      {/* <SkillsSection /> */}
    </main>
  );
}
