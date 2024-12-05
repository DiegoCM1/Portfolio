import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaGit, FaGithub } from 'react-icons/fa';

const TechStack = () => {
  return (
    <section className="pt-2 bg-white text-gray-900">
      <h2 className="text-3xl font-bold mb-4">Tech Stack:</h2>
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
          <FaGit className="text-red-600" />
          <p className="text-sm mt-2">Git</p>
        </div>
        <div className="flex flex-col items-center m-2">
          <FaGithub className="text-black" />
          <p className="text-sm mt-2">GitHub</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
