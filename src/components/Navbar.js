import React, { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const navbarHeight = 64; // Adjust this to match your navbar's height in pixels

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section when it's visible
          }
        });
      },
      { threshold: 0.6 } // 60% of the section must be visible to trigger
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetPosition = target.offsetTop - navbarHeight; // Account for navbar height
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="bg-secondaryDarkBlue dark:bg-dark-background bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 pl-28 pr-28">
        {/* Logo on the left */}
        <div className="text-textWhite dark:text-dark-textPrimary text-2xl font-bold hover:text-buttonBlue dark:hover:text-dark-accent">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            Diego<span className="text-buttonBlue dark:text-dark-accent">.</span>
          </a>
        </div>

        {/* Navbar Links on the right */}
        <ul
          className={`lg:flex lg:space-x-6 ${
            isOpen ? "block" : "hidden"
          } text-buttonBlue dark:text-dark-accent flex items-center`}
        >
          <li>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className={`hover:text-textWhite dark:hover:text-dark-textPrimary ${
                activeSection === "home"
                  ? "text-textWhite dark:text-dark-textPrimary font-bold"
                  : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className={`hover:text-textWhite dark:hover:text-dark-textPrimary ${
                activeSection === "about"
                  ? "text-textWhite dark:text-dark-textPrimary font-bold"
                  : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "work")}
              className={`hover:text-textWhite dark:hover:text-dark-textPrimary ${
                activeSection === "work"
                  ? "text-textWhite dark:text-dark-textPrimary font-bold"
                  : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className={`hover:text-textWhite dark:hover:text-dark-textPrimary ${
                activeSection === "contact"
                  ? "text-textWhite dark:text-dark-textPrimary font-bold"
                  : ""
              }`}
            >
              Contact
            </a>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-highlightBlue dark:text-dark-accent focus:outline-none"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
  