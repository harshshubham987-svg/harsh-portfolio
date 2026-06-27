import { motion } from "framer-motion";

const BackgroundFX = () => {
  return (

    <div className="fixed inset-0
                    overflow-hidden
                    pointer-events-none
                    z-0">

      {/* GRID */}

      <div
        className="absolute inset-0
                   opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* AMBIENT GLOW */}

      <div className="absolute top-1/3 left-1/2
                      -translate-x-1/2
                      w-[900px] h-[900px]
                      bg-cyan-400/5
                      blur-[180px]
                      rounded-full" />

      {/* FLOATING PARTICLES */}

      {[...Array(40)].map((_, i) => (

        <motion.div

          key={i}

          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
          }}

          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}

          className="absolute
                     rounded-full
                     bg-cyan-300/40"

          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

      {/* SCANNER SWEEP */}

      <motion.div

        animate={{
          y: ["-20%", "120%"],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}

        className="absolute left-0
                   w-full h-[200px]
                   bg-gradient-to-b
                   from-cyan-300/[0.03]
                   to-transparent
                   blur-3xl"
      />

    </div>
  );
};

export default BackgroundFX;