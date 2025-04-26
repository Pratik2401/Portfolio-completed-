import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#000000",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: { enable: false },
          onClick: { enable: false },
        },
      },
      particles: {
        color: { value: "#cd0ff9" },
        links: {
          color: "#cd0ff9",
          enable: true,
          distance: 200,
          opacity: 0.5,
          width: 2.5,
        },
        move: {
          enable: true,
          speed: 3,
          random: true,
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 50,
        },
        opacity: { value: 0.8 },
        shape: { type: "circle" },
        size: { value: { min: 3, max: 10 } },
        zIndex: { value: 10 },
        shadow: {
          enable: true,
          color: "#000000",
          blur: 10,
        },
        tilt: {
          enable: true,
          value: 5,
          random: true,
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh", // Limit height to 100vh
          zIndex: -1, // Lower than content
          overflow: "hidden",
        }}
      >
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
        <div
          style={{
            position: "relative",
            zIndex: 1, // Ensures text and content are above particles
            textAlign: "center",
            color: "white",
            minHeight: "100vh", // Prevents scrolling issues
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
        </div>
      </div>
    );
  }

  return null;
};

export default ParticlesBackground;