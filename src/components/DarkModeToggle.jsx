import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

// Component that creates a toggle switch for dark/light mode
const DarkModeToggle = () => {
  // State to track whether dark mode is enabled
  const [darkMode, setDarkMode] = useState(false);

  // Effect that runs once when component mounts
  // Checks localStorage for saved theme preference
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Effect that runs whenever darkMode state changes
  // Updates HTML class and saves preference to localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // Container div for the toggle switch
    // Uses Tailwind classes for styling and transitions
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer w-14 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      {/* Toggle button/circle that slides */}
      {/* Changes position and color based on dark mode state */}
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-transform duration-300 ${
          darkMode ? "translate-x-6 bg-blue-500" : "translate-x-0 bg-gray-900"
        }`}
      >
        {/* Icon changes between sun and moon based on state */}
        {darkMode ? (
          <SunIcon className="w-4 h-4 text-white" />
        ) : (
          <MoonIcon className="w-4 h-4 text-white" />
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
