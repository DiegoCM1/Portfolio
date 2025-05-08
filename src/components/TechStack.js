import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiTailwindcss, SiReact, SiVercel } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="pt-2">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-textWhite">
        Tech Stack:
      </h3>
      <div className="flex flex-wrap md:justify-start gap-4 text-3xl md:text-4xl">
        {/* Individual Tech Item */}
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaHtml5 className="text-orange-600 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">HTML5</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaCss3 className="text-blue-700 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">CSS3</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaJs className="text-yellow-500 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">JavaScript</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaReact className="text-blue-600 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">React</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiTailwindcss className="text-teal-500 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaGit className="text-red-600 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Git</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaGithub className="text-black dark:text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaFigma className="text-black dark:text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Figma</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaPython className="text-[#1b5e94] text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Python</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiVercel className="text-black dark:text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Vercel</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
