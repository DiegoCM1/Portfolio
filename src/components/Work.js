import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGit, FaGithub } from 'react-icons/fa'; // Importing necessary icons
import pcLearnitImage from '../assets/pcLearnit.png';
import pcMokeponImage from '../assets/pcMokepon.png';
import pcBlueEyeImage from '../assets/pcLearnit.png';
import pcEcommerceImage from '../assets/pcEcommerce.png';
import pcMedAIImage from '../assets/pcLearnit.png';
import pcTodoImage from '../assets/pcLearnit.png';



// Array of project details
const projects = [
  {
    title: 'LearnIt',
    description: 'App that gives you the most powerful learning techniques, all in one',
    imageUrl: pcLearnitImage,
    technologies: [<FaReact className="text-blue-600" />, <FaNodeJs className="text-green-600" />],
    codeLink: 'https://github.com/DiegoCM1/LearnIt',
    demoLink: 'https://diegocm1.github.io/LearnIt/',
  },
  {
    title: 'Mokepon',
    description: 'This is an online multiplayer videogame',
    imageUrl: pcMokeponImage,
    technologies: [<FaHtml5 className="text-orange-600" />, <FaCss3 className="text-blue-700" />, <FaJs className="text-yellow-500" />],
    codeLink: 'https://github.com/DiegoCM1/Mokepon',
    demoLink: 'https://diegocm1.github.io/Mokepon/',
  },
  {
    title: 'Ecommerce',
    description: 'Ecommerce to sell cars',
    imageUrl: pcEcommerceImage,
    technologies: [<FaReact className="text-blue-600" />, <FaHtml5 className="text-orange-600" />],
    codeLink: 'https://github.com/DiegoCM1/Ecommerce',
    demoLink: 'https://diegocm1.github.io/Ecommerce/',
  },
  {
    title: 'MedAI',
    description: 'App that uses AI to give precise diagnostics and prevent future diseases based on the given information',
    imageUrl: pcMedAIImage,
    technologies: [<FaGit className="text-red-600" />, <FaGithub className="text-black" />],
    codeLink: '',
    demoLink: '',
  },
  {
    title: 'BluEye',
    description: 'App powered by AI focused on giving early alerts and life saving recommendations when a hurricane is near you. Uses Llama 3.2',
    imageUrl: pcBlueEyeImage,
    technologies: [<FaCss3 className="text-blue-700" />, <FaJs className="text-yellow-500" />],
    codeLink: 'hhttps://github.com/Victor4286/MetaQuetzal',
    demoLink: 'https://project5.demo.com',
  },
  {
    title: 'To-do App',
    description: 'To-do app that will help you getting things done',
    imageUrl: pcTodoImage,
    technologies: [<FaReact className="text-blue-600" />, <FaNodeJs className="text-green-600" />, <FaGithub className="text-black" />],
    codeLink: 'https://github.com/yourgithub/project6',
    demoLink: 'https://project6.demo.com',
  },
];

// Work component displaying project cards
const Work = () => {
  return (
    <section id="work" className="pr-28 pl-28 py-10 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-4">My Work.</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <img src={project.imageUrl} alt={project.title} className="rounded-lg mb-4" /> {/* Project image */}
            <h3 className="text-xl font-bold">{project.title}</h3> {/* Project title */}
            <p className="mt-2">{project.description}</p> {/* Project description */}
            <div className="flex space-x-2 mt-2">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-2xl">
                  {tech} {/* Technology icon */}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a href={project.codeLink} className="bg-black text-white font-bold py-2 px-4 rounded my-2 mr-4" target="_blank" rel="noopener noreferrer">
                Code
              </a>
              <a href={project.demoLink} className="bg-blue-500 text-white font-bold py-2 px-4 rounded my-2" target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
