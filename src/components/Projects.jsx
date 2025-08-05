import { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGithub,
  FaLink,
  FaPython,
  FaNewspaper
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVercel,
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiRailway,
  SiExpo,
  SiOllama,
} from "react-icons/si";
import OpenRouterIcon from "./icons/OpenRouterIcon";
import BluEyePC from "../assets/images/pcBluEyeLanding.webp";
import BluEyeMapPc from "../assets/images/pcBluEyeMap.webp";
import bluEyeInterface from "../assets/videos/bluEyeInterface.mp4";
import bluEyeLandingMobile from "../assets/images/bluEyeMobile.webp";
import AiWorking from "../assets/videos/ai-portfolio-working.mp4";
import idleAIAssistant from "../assets/images/idle-ai-portfolio.webp";
import pcTodoImage from "../assets/images/pcTodoApp.webp";
import phoneTodoImage from "../assets/images/phoneTodoApp.webp";
import alvaDesktopImage from "../assets/images/alvaDesktopImage.webp";
import alvaMobileImage from "../assets/images/alvaMobileImage.webp";
import verskodLanding from "../assets/images/verskod-landing.webp";
import verskodLandingPc from "../assets/images/verskod-landing-pc.webp";

// Helper component to render images or videos
const Media = ({ src, alt, onClick }) =>
  src.endsWith(".mp4") ? (
    <video
      loading="lazy"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
      onClick={onClick}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  ) : (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onClick={onClick}
    />
  );

// Array of project details
const projects = [
  {
    title: "BluEye MVP - Mobile (APK)",
    description:
      "Developed as the core deliverable of our $100,000-winning project in Meta’s Llama Impact Hackathon, BluEye is an AI-powered hurricane assistant built for mobile. This React Native app delivers real-time, location-based alerts and preparedness guidance through an intuitive, multimodal interface. Designed with NativeWind and Tailwind CSS for a seamless user experience, it connects to a powerful AI backend for personalized, life-saving recommendations — all supported by Meta’s Llama ecosystem and grant program.",
    imageUrl: BluEyeMapPc,
    imageUrl2: bluEyeInterface,
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiExpo className="text-white" />,
      <SiRailway className="text-white" />,
      // <SiExpressdotjs className="text-green-500" />, // Express
    ],
    codeLink: "https://github.com/DiegoCM1/MetaQuetzal",
    demoLink: "https://expo.dev/artifacts/eas/vooZNx2xhnMGVyugxTXxR5.apk",
  },
  {
    title: "BluEye - AI",
    description:
      "BluEye’s AI backend powers the app’s (MVP - APK) intelligent, multimodal response system using cutting-edge Llama AI models. Engineered with Python and FastAPI, it handles real-time weather analysis, provides offline-capable text-only AI models, and seamlessly integrates with OpenRouter and Ollama for robust AI performance. Deployed on Railway for scalable, reliable backend service.",
    imageUrl: BluEyeMapPc,
    mobileImages: [bluEyeInterface],
    technologies: [
      <FaPython className="text-blue-500" />,
      <SiFastapi className="text-green-500" />,
      <SiRailway className="text-white" />,
      <OpenRouterIcon className="text-white w-6 h-6" />,
      <SiOllama className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/ai-blueye",
    docsLink: "https://github.com/DiegoCM1/MetaQuetzal",
  },
  {
    title: "BluEye - Official Landing Page",
    description:
      "The official BluEye landing page showcases our award-winning hurricane prevention app, clearly communicating its purpose and impact. Designed with Next.js and styled using Tailwind CSS, it offers responsive layouts, optimized performance, and compelling storytelling to engage users and partners. Built with TypeScript for maintainability and hosted on Vercel for reliable and lightning-fast accessibility.",
    imageUrl: BluEyePC,
    mobileImages: [bluEyeLandingMobile],
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiNextdotjs className="text-white" />,
      <SiTypescript className="text-blue-500" />,
      <SiVercel className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/blueye-landing",
    demoLink: "https://blueye-landing.vercel.app/",
  },
  {
    title: "AI Portfolio Assistant – Ask Me Anything",
    description:
      "A full-stack AI-powered assistant built to answer questions about my background, projects, and skills. The project demonstrates backend integration with LLM APIs using FastAPI, OpenRouter, and dynamic prompt handling.",
    imageUrl: AiWorking,
    mobileImages: [idleAIAssistant],
    technologies: [
      <FaPython className="text-blue-500" />,
      <SiFastapi className="text-green-300" />,
      <SiRailway className="text-white" />,
      <OpenRouterIcon className="text-white w-6 h-6" />,
      <SiOllama className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/portfolio-ai-assistant",
    demoLink: "https://yourportfolio.vercel.app/",
  },
  {
    title: "Alva – AI Assistant for sleeping and waking up (Landing Page)",
    description:
      "Modern and responsive landing page for Alva, a conversational alarm app. Built to introduce the product, capture early user interest, and encourage waitlist sign-ups.",
    imageUrl: alvaDesktopImage,
    mobileImages: [alvaMobileImage],
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiTypescript className="text-blue-500" />,
      <SiNextdotjs className="text-white" />,
      <SiVercel className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/Alva",
    demoLink: "https://alvaassistant.vercel.app/",
  },
  {
    title: "Verskod - Official Landing Page",
    description:
      "Modern and responsive landing page for Verskod, my tech-driven startup focused on AI education and innovation. Designed to showcase the brand's mission, present its vision, and invite users to join the community as early supporters of its upcoming tools and initiatives.",
    imageUrl: verskodLandingPc,
    mobileImages: [verskodLanding],
    technologies: [
      <FaReact className="text-blue-600" />,
      <SiTailwindcss className="text-teal-400" />,
      <SiTypescript className="text-blue-500" />,
      <SiNextdotjs className="text-white" />,
      <SiVercel className="text-white" />,
    ],
    codeLink: "https://github.com/DiegoCM1/verskod-landing",
    demoLink: "https://verskod-landing.vercel.app/",
  },
  {
    title: "Vanilla To-do App",
    description:
      "Simple and efficient task manager to help you stay organized and at the same time keep track of your goals.",
    imageUrl: pcTodoImage,
    mobileImages: [phoneTodoImage],
    technologies: [
      <FaJs className="text-yellow-500" />,
      <FaHtml5 className="text-orange-600" />,
      <FaCss3 className="text-blue-600" />,
    ],
    codeLink: "https://github.com/DiegoCM1/TODOList",
    demoLink: "https://diegocm1.github.io/TODOList/",
  },
];

// Projects component displaying project cards
const Projects = () => {
  const [modalImage, setModalImage] = useState(null); // Allows to click on images

  return (
    // Section for displaying work/projects
    <section
      id="projects"
      className="px-6 sm:px-10 lg:px-28 py-10 bg-primaryDarkBlue dark:bg-dark-surface text-textWhite dark:text-dark-textPrimary"
    >
      {/* Section title */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8">
        My Projects
        <span className="text-buttonBlue dark:text-dark-accent">.</span>
      </h2>

      {/* Grid layout for project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mapping through the projects array to render each project */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-primaryDarkBlue dark:bg-dark-background border border-buttonBlue/40 rounded-xl p-5 text-textWhite dark:text-dark-textPrimary shadow-md"
          >
            {/* Check if the project has secondary images */}
            {project.mobileImages && project.mobileImages.length > 0 ? (
              project.mobileImages.length === 1 ? (
                <div className="flex flex-row items-center gap-4">
                  {/* Main image */}
                  <div className="w-8/12 aspect-video overflow-hidden rounded-lg">
                    <Media
                      src={project.imageUrl}
                      alt={project.title}
                      onClick={() => setModalImage(project.imageUrl)}
                    />
                  </div>
                  {/* Single mobile image */}
                  <div className="w-3/12 aspect-[3/4] overflow-hidden rounded-lg">
                    <Media
                      src={project.mobileImages[0]}
                      alt={`${project.title} mobile`}
                      onClick={() => setModalImage(project.mobileImages[0])}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-row gap-4 items-stretch">
                  {/* Main image */}
                  <div className="w-8/12 aspect-video overflow-hidden rounded-lg">
                    <Media
                      src={project.imageUrl}
                      alt={project.title}
                      onClick={() => setModalImage(project.imageUrl)}
                    />
                  </div>
                  {/* Multiple mobile images */}
                  <div className="w-3/12 flex flex-col gap-4 h-full">
                    {project.mobileImages.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="flex-1 overflow-hidden rounded-lg">
                        <Media
                          src={img}
                          alt={`${project.title} mobile ${idx + 1}`}
                          onClick={() => setModalImage(img)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )
            ) : (
              // If no secondary image, just show the main image
              <div className="w-full aspect-video overflow-hidden rounded-lg">
                <Media
                  src={project.imageUrl}
                  alt={project.title}
                  onClick={() => setModalImage(project.imageUrl)}
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

            {/* Links to project code and live demo or docs*/}
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
              {/* Docs Link */}
              {project.docsLink && (
                <a
                  href={project.docsLink}
                  className="flex items-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background font-bold py-2 px-4 rounded hover:text-buttonBlue dark:hover:text-dark-accent hover:bg-primaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Docs <FaNewspaper className="ml-2" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal for displaying clicked images/videos */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        >
          {/********  decide what to show  ********/}
          {modalImage.endsWith(".mp4") ? (
            <video
              src={modalImage}
              className="max-w-full max-h-full rounded-lg shadow-lg"
              autoPlay
              loop
              muted
            />
          ) : (
            <img
              src={modalImage}
              alt="Zoomed"
              className="max-w-full max-h-full rounded-lg shadow-lg"
            />
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
