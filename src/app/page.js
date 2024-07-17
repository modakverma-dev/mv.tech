import { allBlogs } from "contentlayer/generated";
import HomeCoverSection from "../components/Home/HomeCoverSection";
import FeaturedPosts from "../components/Home/FeaturedPosts";
import RecentPosts from "../components/Home/RecentPosts";
import SkillsSection from "../components/Home/SkillsSection";
import ProjectsSection from "../components/Home/ProjectsSection";
import MainLayout from "../components/Layouts/MainLayout";

export default async function Home() {
  const username = "modakverma-dev";
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  const data = await res.json();
  return (
    <MainLayout>
      <main className="flex min-h-screen flex-col items-center relative justify-center ">
        <HomeCoverSection blogs={allBlogs} />
        <div className="bg-white z-20">
          <FeaturedPosts blogs={allBlogs} />
          <RecentPosts blogs={allBlogs} />
          <ProjectsSection projects={data} />
          {/* <SkillsSection /> */}
        </div>
      </main>
    </MainLayout>
  );
}
