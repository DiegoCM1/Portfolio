import React, { useState, useEffect } from "react";

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
    <nav className="bg-primaryDarkBlue text-highlightBlue sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 pl-28 pr-28">
        {/* Logo on the left */}
        <div className="text-textWhite text-2xl font-bold hover:text-buttonBlue">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>Diego.</a>
        </div>

        {/* Navbar Links on the right */}
        <ul
          className={`lg:flex lg:space-x-6 ${isOpen ? "block" : "hidden"} text-buttonBlue`}
        >
          <li>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className={`hover:text-textWhite ${activeSection === "home" ? "text-textWhite font-bold" : ""}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className={`hover:text-textWhite ${activeSection === "about" ? "text-textWhite font-bold" : ""}`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              onClick={(e) => handleScroll(e, "work")}
              className={`hover:text-textWhite ${activeSection === "work" ? "text-textWhite font-bold" : ""}`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className={`hover:text-textWhite ${activeSection === "contact" ? "text-textWhite font-bold" : ""}`}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-highlightBlue focus:outline-none"
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
