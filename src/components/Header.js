import React from "react";
import { FaFileAlt, FaFolderOpen } from "react-icons/fa"; // Importing icons
import myPhoto from "../assets/Me3.jpg";

const Header = () => {
  return (
    <header
      id="home"
      className="bg-primaryDarkBlue dark:bg-dark-background text-highlightBlue dark:text-dark-accent w-full h-screen flex flex-col md:flex-row px-6 md:px-28 items-center justify-center"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-4xl mt-2 text-textWhite dark:text-dark-textPrimary">
          Hi, I'm Diego
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-highlightBlue dark:text-dark-accent">
          Frontend Developer
        </h1>
        <p className="mt-2 text-base sm:text-lg md:text-2xl text-textWhite dark:text-dark-textSecondary">
          Passionate about technology and progress.
        </p>

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
      <div className="w-full md:w-1/2 flex items-center justify-center md:mt-0">
        <img
          src={myPhoto}
          alt="Diego"
          className="rounded-3xl h-3/4 w-4/5 sm:w-3/4 md:w-3/6 border-4 border-buttonBlue dark:border-dark-accent object-cover bg-black"
        />
      </div>
    </header>
  );
};

export default Header;
