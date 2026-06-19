"use client";

import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const engine = {} as Engine;
      await loadSlim(engine);
      setInit(true);
    };

    initParticles();
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: {
            value: "#000814",
          },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 90,
          },
          color: {
            value: ["#00FFFF", "#3B82F6", "#8B5CF6"],
          },
          links: {
            enable: true,
            color: "#38BDF8",
            distance: 150,
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1.5,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: {
              min: 1,
              max: 4,
            },
          },
        },
      }}
    />
  );
}