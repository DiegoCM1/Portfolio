import React, { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className={`cursor-pointer w-14 h-8 flex items-center rounded-full p-1 ${
        darkMode ? "bg-gray-700" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center transform transition-transform ${
          darkMode ? "translate-x-6 bg-blue-500" : "translate-x-0 bg-gray-900"
        }`}
      >
        {darkMode ? (
          <SunIcon className="w-4 h-4 text-white" /> // Sun icon for dark mode
        ) : (
          <MoonIcon className="w-4 h-4 text-white" /> // Moon icon for light mode
        )}
      </div>
    </div>
  );
};

export default DarkModeToggle;
