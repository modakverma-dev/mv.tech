import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import SkillsSection from "../components/Home/SkillsSection";
import ProjectsSection from "../components/Home/ProjectsSection";

export default async function Home() {
  const username = "modakverma-dev";
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  return (
    <main className="flex min-h-screen flex-col items-center relative justify-center ">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPosts blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
      <ProjectsSection projects={data} />
      {/* <SkillsSection /> */}
    </main>
  );
}
