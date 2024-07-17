"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { GithubIcon } from "../Icons/Github";
import Image from "next/image";
import siteLink from "@/public/siteLink.gif";

const ProjectsSection = ({ projects }) => {
  const sortedRepos = projects.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );
  return (
    <div className="bg-white p-10 pb-0 flex flex-col relative w-screen overflow-hidden">
      <h1 className="font-playwrite text-4xl font-semibold text-center">
        Fun Projects
      </h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10">
        {sortedRepos?.map((proj, index) => {
          const updatedAt = new Date(proj?.updated_at).toLocaleDateString();
          return (
            <motion.div
              initial={{ y: "50%" }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.13 }}
              viewport={{ once: true }}
              key={proj}
              className="bg-white shadow-md p-2 border-slate-400/30 rounded-lg border-2 relative"
            >
              {/* clone_url  // forks_url */}
              <h1 className="font-medium text-lg mb-2">{proj?.name} </h1>
              <div className=" absolute top-1 right-1 flex items-center gap-2">
                {proj?.homepage && (
                  <Link
                    target="_blank"
                    className="bg-slate-200/40 px-2 py-1 border-2 rounded-md border-slate-200/50 shadow-lg focus:scale-110 transition-all"
                    href={proj?.homepage}
                  >
                    <Image
                      className="w-5 h-5 mix-blend-multiply"
                      src={siteLink}
                      width={300}
                      height={300}
                      alt="link"
                    />
                  </Link>
                )}
                {proj?.html_url && (
                  <Link
                    target="_blank"
                    className="bg-slate-200/40 px-2 py-1 border-2 rounded-md border-slate-200/50 shadow-lg focus:scale-110 transition-all w-[40px] h-[34px]"
                    href={proj?.html_url}
                  >
                    <GithubIcon className="w-[20px] h-[20px]" />
                  </Link>
                )}
              </div>
              <div className="w-full h-[1.8px] bg-slate-200/50 my-3" />
              <p className="text-slate-700/80 text-sm font-light mb-1">
                {proj?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {proj?.topics?.map((topic) => {
                  return (
                    <span
                      className="px-2 py-1 bg-teal-500/20 border-2 border-slate-400/50 rounded-lg"
                      key={topic}
                    >
                      {topic}
                    </span>
                  );
                })}
              </div>
              <span className="text-slate-600 text-sm">{updatedAt}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
