import Particles from "@tsparticles/react";

const ParticleBackground = () => {
  return (

    <Particles

      options={{

        fullScreen: {
          enable: false,
        },

        background: {
          color: "transparent",
        },

        particles: {

          number: {
            value: 70,
          },

          color: {
            value: "#00ffff",
          },

          links: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },

        },

      }}

      className="absolute inset-0 z-0"

    />

  );
};

export default ParticleBackground;