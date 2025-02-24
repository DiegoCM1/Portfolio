import React from "react";
import { FaFileAlt, FaFolderOpen } from "react-icons/fa"; // Importing icons
import myPhoto from "../assets/ME.jpg";
import ParticlesBackground from "./ParticlesBackground";
import TextGenerateEffect from "./ui/TextGenerateEffect";

const Header = () => {
  return (
    <header
      id="home"
      className="relative text-highlightBlue dark:text-dark-accent w-full h-screen flex flex-col md:flex-row px-6 md:px-28 items-center justify-center overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Left Section */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <TextGenerateEffect
          words="Hi, I'm Diego"
          className="text-xl sm:text-2xl md:text-4xl mt-2 text-textWhite dark:text-dark-textPrimary"
          duration={300} // Duration for animation
        />

        {/* H1 - Title */}
        <TextGenerateEffect
          words="Frontend Developer"
          className="text-3xl sm:text-5xl md:text-6xl font-bold text-buttonBlue dark:text-dark-accent"
          duration={300}  // Duration for animation
          delay={900}     // Delay of 0.5 seconds before starting
        />

        {/* P - Description */}
        <TextGenerateEffect
          words="Passionate about technology and progress."
          className="mt-2 text-base sm:text-lg md:text-2xl text-textWhite dark:text-dark-textSecondary"
          duration={300}  // Duration for animation
          delay={1800}     // Delay of 0.5 seconds before starting
        />

        <div className="mt-6 flex flex-row w-full items-center justify-center md:justify-start">
          {/* Resume Button */}
          <a
            href={`${process.env.PUBLIC_URL}/CV_Fronted Developer_Diego Colin.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center border border-buttonBlue dark:border-dark-accent text-buttonBlue dark:text-dark-accent font-bold py-2 px-4 rounded-full mr-2 hover:bg-buttonBlue hover:text-primaryDarkBlue dark:hover:bg-dark-accent dark:hover:text-dark-background transition-colors duration-200"
          >
            <FaFileAlt className="mr-2" /> Resume
          </a>

          {/* Portfolio Button */}
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              const section = document.querySelector("#work");
              const offset = 60; // Adjust for navbar height
              const position = section.offsetTop - offset;
              window.scrollTo({ top: position, behavior: "smooth" });
            }}
            className="flex items-center justify-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background hover:text-buttonBlue dark:hover:text-dark-accent font-bold py-2 px-4 rounded-full hover:bg-secondaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
          >
            <FaFolderOpen className="mr-2" /> Portfolio
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center md:mt-0">
        <img
          src={myPhoto}
          alt="Diego"
          className="rounded-3xl h-3/4 w-4/5 sm:w-3/4 md:w-4/6 border-4 border-buttonBlue dark:border-dark-accent object-cover bg-black"
        />
      </div>
    </header>
  );
};

export default Header;
