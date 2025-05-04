"use client";
import React from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="fixed inset-0 z-0 h-screen w-full pointer-events-none">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: {
              value: 30,
              density: { enable: true, area: 800 }
            },
            color: { value: "#888" },
            shape: { type: "circle" },
            opacity: { value: 0.3 },
            size: { value: 3 },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "bounce" }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#999",
              opacity: 0.4,
              width: 1
            }
          },
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "grab" }
            },
            modes: {
              push: { quantity: 5 }
            }
          }
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
};

export default ParticleBackground;
