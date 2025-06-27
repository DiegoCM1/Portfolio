import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track the active section
  const navbarHeight = 64; // Adjust this to match your navbar's height in pixels

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    // Map section positions
    let sectionMap = Array.from(sections).map((section) => ({
      id: section.id,
      offsetTop: section.offsetTop,
      offsetBottom: section.offsetTop + section.offsetHeight,
    }));

    // Observer logic
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        threshold: 0.3,
        rootMargin: `-${navbarHeight}px 0px 0px 0px`,
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Scroll fallback
    const handleScroll = () => {
      const scrollPosition = window.scrollY + navbarHeight + 1;

      const current = sectionMap.find(
        (section) =>
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetBottom
      );

      if (current && current.id !== activeSection) {
        setActiveSection(current.id);
      }
    };

    // Update offsets on resize
    const handleResize = () => {
      sectionMap = Array.from(document.querySelectorAll("section")).map(
        (section) => ({
          id: section.id,
          offsetTop: section.offsetTop,
          offsetBottom: section.offsetTop + section.offsetHeight,
        })
      );
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection]);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offsetPosition = target.offsetTop - navbarHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id); // Force update on click
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <nav className="bg-secondaryDarkBlue dark:bg-dark-background bg-opacity-90 dark:bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-lg md:px-10 lg:px-28">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-0 md:px-0">
        {/* Logo */}
        <div className="text-textWhite dark:text-dark-textPrimary text-xl md:text-2xl font-bold hover:text-buttonBlue dark:hover:text-dark-accent">
          <a href="#home" onClick={(e) => handleScroll(e, "home")}>
            Diego<span className="text-buttonBlue dark:text-dark-accent">.</span>
          </a>
        </div>

        {/* Navbar Links */}
        <ul
          className={`lg:flex lg:space-x-6 ${isOpen ? "block" : "hidden"
            } absolute lg:static top-16 left-0 right-0 bg-secondaryDarkBlue dark:bg-dark-background lg:bg-transparent lg:dark:bg-transparent text-buttonBlue dark:text-dark-accent flex-col lg:flex-row items-center space-y-4 lg:space-y-0 py-4 lg:py-0 px-6 lg:px-0 transition-all duration-300`}
        >
          {[
            { label: "Home", id: "home" },
            { label: "Achievements", id: "achievements" },
            { label: "About", id: "about" },
            { label: "Projects", id: "projects" },
            { label: "Contact", id: "contact" },
          ].map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={`hover:text-textWhite dark:hover:text-dark-textPrimary ${activeSection === item.id
                  ? "text-textWhite dark:text-dark-textPrimary font-bold"
                  : ""
                  }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden block text-white dark:text-dark-accent focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Debug: show active section */}
      {/* <p className="text-xs text-white fixed bottom-2 left-2 z-50">
        Active: {activeSection}
      </p> */}
    </nav>
  );
};

export default Navbar;
