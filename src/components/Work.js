import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaLink,
  FaPython
} from "react-icons/fa"; // Importing necessary icons
import {
  SiTailwindcss,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiOpenai,
  SiRailway,
  SiExpo
} from "react-icons/si";
import BluEyePC from "../assets/bluEyePc.png";
import bluEyeInterface from "../assets/bluEyeInterface.gif";
import bluEyeLandingMobile from "../assets/bluEyeMobile.png";
import AiWorking from "../assets/ai-portfolio-working.gif"
import idleAIAssistant from "../assets/idle-ai-portfolio.png"
import pcTodoImage from "../assets/pcTodoApp.png";
import phoneTodoImage from "../assets/phoneTodoApp.jpg";
import alvaDesktopImage from "../assets/alvaDesktopImage.png";
import alvaMobileImage from "../assets/alvaMobileImage.jpeg";

// Array of project details
const projects = [
  {
    title: "BluEye - Stay Safe Before, During, and After Hurricanes",
    description:
      "Winner of Meta’s Llama Impact Hackathon, BluEye is a mobile AI-powered hurricane assistant. It delivers real-time, location-based guidance using Llama 3.2 and weather APIs. Features include offline mode, dynamic checklists, and a conversational interface. Built with React Native on top of Expo, used NativeWind for styling, Python and FastAPI for the backend, and OpenRouter for LLM integration.",
    imageUrl: BluEyePC,
    imageUrl2: bluEyeInterface,
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiTailwindcss className="text-teal-400" />,
      <FaPython className="text-blue-500" />,
      <SiFastapi className="text-green-500" />,
      <SiRailway className="text-white" />,
      <SiExpo className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/ai-blueye",
    demoLink: "https://github.com/DiegoCM1/ai-blueye"
  },
  {
    title: "BluEye - Official Landing Page",
    description:
      "Official landing page for BluEye, designed to communicate its AI-powered hurricane prevention mission with clarity and impact. Built with Next.js, Tailwind CSS, and TypeScript, the site features responsive layouts, optimized performance, and a modern UI. Hosted on Vercel, it supports real-time product storytelling and reinforces BluEye’s recognition as a Meta Hackathon-winning project.",
    imageUrl: BluEyePC,
    imageUrl2: bluEyeLandingMobile,
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiNextdotjs className="text-white" />,
      <SiTypescript className="text-blue-500" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiVercel className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/blueye-landing",
    demoLink: "https://github.com/DiegoCM1/blueye-landing",
  },
  {
    title: "AI Portfolio Assistant – Ask Me Anything",
    description:
      "A full-stack AI-powered assistant built to answer questions about my background, projects, and skills. The project demonstrates backend integration with LLM APIs using FastAPI, OpenRouter, and dynamic prompt handling.",
    imageUrl: AiWorking,
    imageUrl2: idleAIAssistant,
    technologies: [
      <FaPython className="text-blue-500" />,
      <SiFastapi className="text-green-300" />,
      <SiRailway className="text-white" />,
      <SiOpenai className="text-white" />,
      <FaReact className="text-blue-600" />,
      <SiTailwindcss className="text-teal-400" />,
    ],
    codeLink: "https://github.com/DiegoCM1/portfolio-ai-assistant",
    demoLink: "https://yourportfolio.vercel.app/",
  },
  {
    title: "Alva – AI Assistant for sleeping and waking up (Landing Page)",
    description:
      "Modern and responsive landing page for Alva, a conversational alarm app. Built to introduce the product, capture early user interest, and encourage waitlist sign-ups.",
    imageUrl: alvaDesktopImage,
    imageUrl2: alvaMobileImage,
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiNextdotjs className="text-white" />,
      <SiTypescript className="text-blue-500" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiVercel className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/Alva",
    demoLink: "https://alvaassistant.vercel.app/",
  },
  {
    title: "Vanilla To-do App",
    description:
      "Simple and efficient task manager to help you stay organized and at the same time keep track of your goals.",
    imageUrl: pcTodoImage,
    imageUrl2: phoneTodoImage,
    technologies: [
      <FaJs className="text-yellow-500" />,
      <FaHtml5 className="text-orange-600" />,
      <FaCss3 className="text-blue-600" />,
    ],
    codeLink: "https://github.com/DiegoCM1/TODOList",
    demoLink: "https://diegocm1.github.io/TODOList/",
  },
];

// Work component displaying project cards
const Work = () => {

  const [modalImage, setModalImage] = useState(null); // Allows to click on images

  return (
    // Section for displaying work/projects
    <section
      id="work"
      className="px-6 sm:px-10 lg:px-28 py-10 bg-primaryDarkBlue dark:bg-dark-surface text-textWhite dark:text-dark-textPrimary"
    >
      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
        My Work<span className="text-buttonBlue dark:text-dark-accent">.</span>
      </h2>

      {/* Grid layout for project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapping through the projects array to render each project */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl p-5 text-textWhite dark:text-dark-textPrimary shadow-md"
          >
            {/* Check if the project has a secondary image */}
            {project.imageUrl2 ? (
              <div className="flex flex-row items-center gap-4">
                {/* Main image */}
                <div className="w-8/12 aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onClick={() => setModalImage(project.imageUrl)}

                  />
                </div>
                {/* Secondary image */}
                <div className="w-3/12 aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl2}
                    alt={`${project.title} Secondary`}
                    className="w-full h-full object-cover"
                    onClick={() => setModalImage(project.imageUrl2)}
                  />
                </div>
              </div>
            ) : (
              // If no secondary image, just show the main image
              <div className="w-full aspect-video overflow-hidden rounded-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Project title */}
            <h3 className="text-lg sm:text-xl font-bold mt-4 ">
              {project.title}
            </h3>

            {/* Project description */}
            <p className="mt-2 text-sm sm:text-base text-buttonBlue dark:text-dark-accent">
              {project.description}
            </p>

            {/* Display project technologies as icons/text */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xl sm:text-2xl">
                  {tech}
                </span>
              ))}
            </div>

            {/* Links to project code and live demo */}
            <div className="mt-4 flex space-x-4 flex-wrap">
              {/* GitHub Code Link */}
              {project.codeLink && (
                <a
                  href={project.codeLink}
                  className="flex items-center border border-buttonBlue dark:border-dark-accent text-buttonBlue dark:text-dark-accent font-bold py-2 px-4 rounded hover:bg-buttonBlue dark:hover:bg-dark-accent hover:text-primaryDarkBlue dark:hover:text-dark-background transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code <FaGithub className="ml-2" />
                </a>
              )}

              {/* Live Demo Link */}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="flex items-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background font-bold py-2 px-4 rounded hover:text-buttonBlue dark:hover:text-dark-accent hover:bg-primaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo <FaLink className="ml-2" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalImage && (   // JSX to render when modalImage has a value
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          <img
            src={modalImage}
            alt="Zoomed"
            className="max-w-full max-h-full rounded-lg shadow-lg"
          />
        </div>
      )}

    </section>
  );
};

export default Work;
