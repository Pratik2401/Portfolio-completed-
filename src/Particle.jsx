import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import './Particle.css'

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
          onHover: { 
            enable: true,
            mode: "repulse"
          },
          onClick: { 
            enable: true,
            mode: "push"
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            quantity: 4
          }
        }
      },
      particles: {
        color: { 
          value: ["#cd0ff9", "#0ff9cd", "#f9cd0f"],
          animation: {
            enable: true,
            speed: 20,
            sync: false
          }
        },
        links: {
          color: "#cd0ff9",
          enable: true,
          distance: 200,
          opacity: 0.5,
          width: 2,
          triangles: {
            enable: true,
            opacity: 0.1
          }
        },
        move: {
          enable: true,
          speed: 2,
          random: true,
          straight: false,
          outModes: {
            default: "bounce"
          },
          trail: {
            enable: true,
            length: 3,
            fillColor: "#000000"
          },
          attract: {
            enable: true,
            rotateX: 1000,
            rotateY: 1000
          }
        },
        number: {
          density: { 
            enable: true,
            area: 800
          },
          value: 60,
        },
        opacity: { 
          value: 0.8,
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.4,
            sync: false
          }
        },
        shape: { 
          type: ["circle", "triangle", "polygon"],
          options: {
            polygon: {
              sides: 6
            }
          }
        },
        size: { 
          value: { min: 2, max: 8 },
          animation: {
            enable: true,
            speed: 2,
            minimumValue: 1,
            sync: false
          }
        },
        twinkle: {
          particles: {
            enable: true,
            color: "#cd0ff9",
            frequency: 0.05,
            opacity: 1
          }
        },
        life: {
          duration: {
            sync: false,
            value: 3
          },
          count: 1
        }
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div className="particles-background">
        <Particles 
          id="tsparticles" 
          particlesLoaded={particlesLoaded} 
          options={options}
          className="glow"
        />
        <div className="content-wrapper">
        </div>
      </div>
    );
  }

  return null;
};

export default ParticlesBackground;