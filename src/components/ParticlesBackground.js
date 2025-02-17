import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // This should now work

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine initialized"); // Debugging log
    await loadSlim(engine); // Load the full engine
  }, []);

  return (
    <Particles
      className="absolute top-0 left-0 w-full h-full -z-50"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "#000000" },
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
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.5 },
          },
          move: { enable: true, speed: 2, out_mode: "out" },
          links: {
            enable: true,
            distance: 160,
            color: "#00ccff",
            opacity: 0.9,
            width: 1.5,
          },
        },
        interactivity: {
          events: { onHover: { enable: true, mode: "grab" }, onClick: { enable: true, mode: "push" } },
          modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, push: { particles_nb: 5 } },
        },
      }}
    />
  );
};

export default ParticlesBackground;
