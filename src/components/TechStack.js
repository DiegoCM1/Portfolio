import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaGithub,
} from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";
import { SiTailwindcss, SiReact } from "react-icons/si";

const TechStack = () => {
  return (
    <section className="pt-2 pl-6">
      <h3 className="text-3xl font-bold mb-4 text-textWhite">Tech Stack:</h3>
      <div className="flex flex-wrap space-x-5 text-4xl">
        <div className="flex flex-col items-center m-2">
          <FaHtml5 className="text-orange-600" />
          <p className="text-sm mt-2 text-textWhite">HTML5</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaCss3 className="text-blue-700" />
          <p className="text-sm mt-2 text-textWhite">CSS3</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaJs className="text-yellow-500" />
          <p className="text-sm mt-2 text-textWhite">JavaScript</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaReact className="text-blue-600" />
          <p className="text-sm mt-2 text-textWhite">React</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <SiTailwindcss className="text-teal-500" />
          <p className="text-sm mt-2 text-textWhite">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <SiReact className="text-blue-500" />
          <p className="text-sm mt-2 text-textWhite">React Native</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <SiTailwindcss className="text-purple-500" />
          <p className="text-sm mt-2 text-textWhite">NativeWind</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaGit className="text-red-600" />
          <p className="text-sm mt-2 text-textWhite">Git</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaGithub className="text-black" />
          <p className="text-sm mt-2 text-textWhite">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaFigma className="text-black" />
          <p className="text-sm mt-2 text-textWhite">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
