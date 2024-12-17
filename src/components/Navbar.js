import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section

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
      { threshold: 0.5 } // 50% of the section must be visible to trigger
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <nav className="bg-gray-800 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 pl-28 pr-28">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-white focus:outline-none"
        >
          ☰
        </button>
        <ul className={`lg:flex lg:space-x-4 ${isOpen ? "block" : "hidden"}`}>
          <li>
            <a
              href="#home"
              className={`hover:underline ${
                activeSection === "home" ? "text-blue-400" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`hover:underline ${
                activeSection === "about" ? "text-blue-400" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className={`hover:underline ${
                activeSection === "work" ? "text-blue-400" : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`hover:underline ${
                activeSection === "contact" ? "text-blue-400" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
