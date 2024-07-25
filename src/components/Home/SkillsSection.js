"use client";
import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  return (
    <div className="bg-white dark:bg-black p-10 w-full flex flex-col items-center overflow-hidden relative ">
      <h1 className="w-full text-center pb-10 text-5xl font-semibold uppercase text-slate-200 font-mono">
        Skills
      </h1>
      {/* <div className="w-[850px] h-[600px] rotate-65 bg-blue-900/30 absolute blur-2xl -right-60 rounded-full -bottom-20  " />
      <div className="w-[330px] h-[300px] rotate-65 bg-blue-600/40 absolute blur-3xl rounded-full " /> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((skill, index) => (
          <motion.div
            initial={{ y: "50%" }}
            whileInView={{ y: 0 }}
            transition={{ delay: index * 0.065 }}
            viewport={{ once: true }}
            key={skill}
            className="w-52 h-40 rounded-md border-[1.5px] border-slate-400/30 shadow-lg bg-slate-200/20"
          ></motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
