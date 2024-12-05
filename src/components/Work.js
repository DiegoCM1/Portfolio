import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaGit, FaGithub } from 'react-icons/fa'; // Importing necessary icons

// Array of project details
const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1',
    imageUrl: 'https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg',
    technologies: [<FaReact className="text-blue-600" />, <FaNodeJs className="text-green-600" />],
    codeLink: 'https://github.com/yourgithub/project1',
    demoLink: 'https://project1.demo.com',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2',
    imageUrl: 'https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg',
    technologies: [<FaHtml5 className="text-orange-600" />, <FaCss3 className="text-blue-700" />, <FaJs className="text-yellow-500" />],
    codeLink: 'https://github.com/yourgithub/project2',
    demoLink: 'https://project2.demo.com',
  },
  {
    title: 'Project 3',
    description: 'Description of project 3',
    imageUrl: 'https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg',
    technologies: [<FaReact className="text-blue-600" />, <FaHtml5 className="text-orange-600" />],
    codeLink: 'https://github.com/yourgithub/project3',
    demoLink: 'https://project3.demo.com',
  },
  {
    title: 'Project 4',
    description: 'Description of project 4',
    imageUrl: 'https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg',
    technologies: [<FaGit className="text-red-600" />, <FaGithub className="text-black" />],
    codeLink: 'https://github.com/yourgithub/project4',
    demoLink: 'https://project4.demo.com',
  },
  {
    title: 'Project 5',
    description: 'Description of project 5',
    imageUrl: 'https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg',
    technologies: [<FaCss3 className="text-blue-700" />, <FaJs className="text-yellow-500" />],
    codeLink: 'https://github.com/yourgithub/project5',
    demoLink: 'https://project5.demo.com',
  },
  {
    title: 'Project 6',
    description: 'Description of project 6',
    imageUrl: 'https://ii.ct-stc.com/2/logos/candidates/2024/11/03/1920488503699thumbnail.jpeg',
    technologies: [<FaReact className="text-blue-600" />, <FaNodeJs className="text-green-600" />, <FaGithub className="text-black" />],
    codeLink: 'https://github.com/yourgithub/project6',
    demoLink: 'https://project6.demo.com',
  },
];

// Work component displaying project cards
const Work = () => {
  return (
    <section id="work" className="pr-28 pl-28 py-10 bg-gray-100 text-gray-900">
      <h2 className="text-3xl font-bold mb-4 text-center">My Work.</h2>
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
