import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaLink,
  FaPython,
} from "react-icons/fa"; // Importing necessary icons
import { SiTailwindcss } from "react-icons/si";
import pcLearnitImage from "../assets/pcLearnit.png";
import phoneLearnitImage from "../assets/phoneLearnit.png";
import pcMokeponImage from "../assets/pcMokepon.png";
import phoneMokeponImage from "../assets/phoneMokepon.png";
import pcBlueEyeImage from "../assets/pcBlueEyesImage.png";
import phoneBlueEyeImage from "../assets/phoneBluEyesImage.png";
import pcEcommerceImage from "../assets/pcEcommerce.png";
import pcTodoImage from "../assets/pcTodoApp.png";
import phoneTodoImage from "../assets/phoneTodoApp.jpg";
import LogoMedAI from "../assets/LogoMedAI.webp";
import InterfaceMedAI from "../assets/InterfaceMedAI.webp";

// Array of project details
const projects = [
  // {
  //   title: "LearnIt",
  //   description:
  //     "AI-powered study app enhancing learning through flashcards, the Feynman technique, Pomodoro timer, and an intelligent chatbot to boost learning",
  //   imageUrl: pcLearnitImage,
  //   imageUrl2: null,
  //   technologies: [
  //     <FaHtml5 className="text-orange-600" />,
  //     <FaCss3 className="text-blue-700" />,
  //     <FaJs className="text-yellow-500" />,
  //   ],
  //   codeLink: "https://github.com/DiegoCM1/LearnIt",
  //   demoLink: "https://diegocm1.github.io/LearnIt/",
  // },
  {
    title: "Mokepon",
    description:
      "Online strategy game where players select and battle unique creatures in thrilling competitive matches.",
    imageUrl: pcMokeponImage,
    imageUrl2: null,
    technologies: [
      <FaHtml5 className="text-orange-600" />,
      <FaCss3 className="text-blue-700" />,
      <FaJs className="text-yellow-500" />,
      <FaNodeJs className="text-green-600" />,
    ],
    codeLink: "https://github.com/DiegoCM1/Mokepon",
    demoLink: "https://diegocm1.github.io/Mokepon/",
  },
  // {
  //   title: "Ecommerce",
  //   description:
  //     "Clone of Mercado Libre in process. A specialized platform for buying and selling cars and related accessories, streamlining the process and ensuring trustworthy transactions in the automotive market.",
  //   imageUrl: pcEcommerceImage,
  //   imageUrl2: null,
  //   technologies: [
  //     <FaHtml5 className="text-orange-600" />,
  //     <FaCss3 className="text-blue-700" />,
  //     <FaJs className="text-yellow-500" />,
  //     <FaReact className="text-blue-600" />,
  //     <SiTailwindcss className="text-teal-500" />,
  //   ],
  //   codeLink: "https://github.com/DiegoCM1/Ecommerce",
  //   demoLink: "https://diegocm1.github.io/Ecommerce/",
  // },
  // {
  //   title: "MedAI",
  //   description:
  //     "AI-powered mobile app focused on prevention and precise diagnostics by combining user input with the latest medical breakthroughs, revolutionizing healthcare.",
  //   imageUrl: LogoMedAI,
  //   imageUrl2: null,
  //   technologies: [
  //     <FaReact className="text-blue-600" />,
  //     <SiTailwindcss className="text-teal-500" />,
  //   ],
  //   codeLink: "https://github.com/Victor4286/MetaQuetzal",
  //   demoLink: "https://project5.demo.com",
  // },
  {
    title: "BluEye",
    description:
      "BluEye delivers real-time personalized guidance to help you prepare, survive, and recover from hurricanes — powered by cutting-edge AI technology and winner of Meta's hackathon.",
    imageUrl: pcBlueEyeImage,
    imageUrl2: null,
    technologies: [
      <FaReact className="text-blue-600" />,
      <FaPython className="text-blue-600" />,
      <SiTailwindcss className="text-teal-500" />,
    ],
    codeLink: "https://github.com/Victor4286/MetaQuetzal",
    demoLink: "https://blueyes-landing-l2ty.vercel.app/",
  },
  {
    title: "Vanilla To-do App",
    description:
      "Simple and efficient task manager to help users stay organized and on top of their daily goals.",
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
            className="bg-secondaryDarkBlue dark:bg-dark-background shadow-md rounded-lg p-4 lg:p-6 flex flex-col"
          >
            {/* Check if the project has a secondary image */}
            {project.imageUrl2 ? (
              <div className="flex flex-row items-center gap-4">
                {/* Main image */}
                <div className="w-full sm:w-8/12 aspect-video overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Secondary image */}
                <div className="w-full sm:w-3/12 aspect-[3/4] overflow-hidden rounded-lg">
                  <img
                    src={project.imageUrl2}
                    alt={`${project.title} Secondary`}
                    className="w-full h-full object-cover"
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
            <h3 className="text-lg sm:text-xl font-bold mt-4 text-buttonBlue dark:text-dark-accent">
              {project.title}
            </h3>

            {/* Project description */}
            <p className="mt-2 text-sm sm:text-base">{project.description}</p>

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
    </section>
  );
};

export default Work;
