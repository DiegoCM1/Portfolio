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
    <section className="pt-2 bg-white text-gray-900">
      <h3 className="text-2xl font-bold mb-4">Tech Stack:</h3>
      <div className="flex flex-wrap space-x-5 text-4xl">
        <div className="flex flex-col items-center m-2">
          <FaHtml5 className="text-orange-600" />
          <p className="text-sm mt-2">HTML5</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaCss3 className="text-blue-700" />
          <p className="text-sm mt-2">CSS3</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaJs className="text-yellow-500" />
          <p className="text-sm mt-2">JavaScript</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaReact className="text-blue-600" />
          <p className="text-sm mt-2">React</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <SiTailwindcss className="text-teal-500" />
          <p className="text-sm mt-2">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <SiReact className="text-blue-500" />
          <p className="text-sm mt-2">React Native</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <SiTailwindcss className="text-purple-500" />
          <p className="text-sm mt-2">NativeWind</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaGit className="text-red-600" />
          <p className="text-sm mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaGithub className="text-black" />
          <p className="text-sm mt-2">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaFigma className="text-black" />
          <p className="text-sm mt-2">Figma</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
