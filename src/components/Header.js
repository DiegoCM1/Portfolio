import React from "react";
import { FaFileAlt, FaFolderOpen } from "react-icons/fa"; // Importing icons
import myPhoto from "../assets/Me3.jpg";

const Header = () => {
  return (
    <header
      id="home"
      className="bg-primaryDarkBlue dark:bg-dark-background text-highlightBlue dark:text-dark-accent w-screen h-screen flex flex-row px-28"
    >
      {/* Left Section */}
      <div className="w-1/2 h-full flex flex-col justify-center">
        <div>
          <h2 className="text-4xl mt-2 text-textWhite dark:text-dark-textPrimary">
            Hi, I'm Diego
          </h2>
          <h1 className="text-6xl font-bold text-highlightBlue dark:text-dark-accent">
            Frontend Developer
          </h1>
          <p className="mt-2 text-2xl text-textWhite dark:text-dark-textSecondary">
            Passionate about technology and progress.
          </p>
        </div>

        <div className="mt-4 flex">
          {/* Resume Button */}
          <a
            href={`${process.env.PUBLIC_URL}/CV_Fronted Developer_Diego Colin.pdf`}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security best practice for external links
            className="flex items-center border border-buttonBlue dark:border-dark-accent text-buttonBlue dark:text-dark-accent font-bold py-2 px-4 rounded-full mr-2 hover:bg-buttonBlue hover:text-primaryDarkBlue dark:hover:bg-dark-accent dark:hover:text-dark-background transition-colors duration-200"
          >
            <FaFileAlt className="mr-2" /> Resume
          </a>

          {/* Portfolio Button */}
          <a
            href="#work"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default jump behavior
              const section = document.querySelector("#work");
              const offset = 60; // Adjust for your navbar height
              const position = section.offsetTop - offset; // Calculate position with offset
              window.scrollTo({ top: position, behavior: "smooth" }); // Smooth scroll
            }}
            className="flex items-center bg-buttonBlue text-primaryDarkBlue dark:text-dark-background hover:text-buttonBlue dark:hover:text-dark-accent font-bold py-2 px-4 rounded-full mr-2 hover:bg-secondaryDarkBlue dark:hover:bg-dark-secondary transition-colors duration-200"
          >
            <FaFolderOpen className="mr-2" /> Portfolio
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-1/2 h-full flex items-center justify-center">
        <img
          src={myPhoto}
          alt="Diego"
          className="rounded-3xl h-2/3 w-3/6 mb-4 border-4 border-buttonBlue dark:border-dark-accent object-cover bg-black"
        />
      </div>
    </header>
  );
};

export default Header;
