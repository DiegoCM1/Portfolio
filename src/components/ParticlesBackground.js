import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useEffect, useState } from "react";

const ParticlesBackground = () => {
  const [bgColor, setBgColor] = useState("#000000"); // Default Light Mode

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setBgColor(isDarkMode ? "#121212" : "#000000");
  }, []);

  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine initialized");
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full -z-50"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: bgColor },
        particles: {
          number: { value: 100, density: { enable: true, value_area: 1200 } },
          color: { value: "#00ccff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.8,
            random: true,
            anim: { enable: true, speed: 0.5, opacity_min: 0.3 },
          },
          size: {
            value: 5,
            random: true,
            anim: { enable: true, speed: 1, size_min: 0.5 },
          },
          move: { enable: true, speed: 1, out_mode: "out" },
          links: {
            enable: true,
            distance: 160,
            color: "#00ccff",
            opacity: 0.7,
            width: 1.5,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "repulse" }},
          modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, push: { particles_nb: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
