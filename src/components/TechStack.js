import {
  FaReact,
  FaGit,
  FaGithub,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiVercel, SiNextdotjs, SiRailway, SiFastapi, SiOllama } from "react-icons/si";
import OpenRouterIcon from "./icons/OpenRouterIcon";

const TechStack = () => {
  return (
    <section className="pt-2">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-textWhite dark:text-dark-textPrimary pb-2">
        Tech Stack
        <span className="text-buttonBlue dark:text-dark-accent">.</span>
      </h3>
      <div className="flex flex-wrap md:justify-start gap-4 text-3xl md:text-4xl">
        {/* Individual Tech Item */}
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaReact className="text-blue-600 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">React</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiTailwindcss className="text-teal-500 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiNextdotjs className="text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Next.js</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaGit className="text-red-600 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Git</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaGithub className="text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">GitHub</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiVercel className="text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Vercel</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <FaPython className="text-[#1b5e94] text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Python</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiFastapi className="text-green-300 text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">FastAPI</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center">
          <SiRailway className="text-white text-4xl md:text-5xl" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">Railway</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center ">
          <OpenRouterIcon className="text-white w-10 h-10 md:w-12 md:h-12" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">OpenRouter</p>
        </div>
        <div className="flex flex-col items-center m-2 w-20 h-20 md:w-24 md:h-24 justify-center ">
          <SiOllama className="text-white w-10 h-10 md:w-12 md:h-12" />
          <p className="text-xs md:text-sm mt-2 text-textWhite">LLaMA Family</p>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
