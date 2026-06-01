"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

/**
 * The signature constellation/network background.
 *
 * tsParticles must init its engine once on the client before any <Particles>
 * renders; we gate rendering on `ready`. Scoped to its container (not
 * fullScreen) so it can sit behind the hero only.
 */
export function ParticlesBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      background: { color: "transparent" },
      detectRetina: true,
      particles: {
        number: { value: 60, density: { enable: true } },
        color: { value: "#38bdf8" },
        links: { enable: true, color: "#38bdf8", distance: 140, opacity: 0.22, width: 1 },
        move: { enable: true, speed: 0.6, outModes: { default: "out" } },
        size: { value: { min: 1, max: 2.4 } },
        opacity: { value: { min: 0.2, max: 0.5 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: "grab" } },
        modes: { grab: { distance: 160, links: { opacity: 0.4 } } },
      },
    }),
    [],
  );

  if (!ready) return null;

  return (
    <Particles
      id="hero-particles"
      options={options}
      className="absolute inset-0 z-0 h-full w-full"
    />
  );
}
