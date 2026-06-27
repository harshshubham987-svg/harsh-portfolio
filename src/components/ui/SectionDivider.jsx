import { motion } from "framer-motion";

const SectionDivider = () => {
  return (

    <div className="relative
                    w-full
                    h-40
                    flex items-center
                    justify-center
                    overflow-hidden">

      {/* MAIN ENERGY LINE */}

      <motion.div

        animate={{
          opacity: [0.3, 1, 0.3],
          scaleX: [0.9, 1.05, 0.9],
        }}

        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="relative
                   w-[70%]
                   h-[1px]
                   bg-gradient-to-r
                   from-transparent
                   via-cyan-300
                   to-transparent"
      />

      {/* CENTER ENERGY CORE */}

      <motion.div

        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5],
        }}

        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute
                   w-4 h-4
                   rounded-full
                   bg-cyan-300
                   shadow-[0_0_30px_rgba(0,255,255,1)]"
      />

      {/* SIDE PARTICLES */}

      {[...Array(8)].map((_, i) => (

        <motion.div

          key={i}

          animate={{
            x: [-20, 20, -20],
            opacity: [0, 0.6, 0],
          }}

          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="absolute
                     w-1 h-1
                     rounded-full
                     bg-cyan-300/60"

          style={{
            left: `${15 + i * 10}%`,
          }}
        />

      ))}

      {/* AMBIENT GLOW */}

      <div className="absolute
                      w-[400px]
                      h-[120px]
                      bg-cyan-300/10
                      blur-[100px]
                      rounded-full" />

    </div>

  );
};

export default SectionDivider;