import { motion } from "framer-motion";

const GlowButton = ({ text }) => {
  return (

    <motion.button

        whileHover={{
          scale: 1.08,
          y: -5
        }}

        whileTap={{
          scale: 0.95
        }}

      className="relative overflow-hidden px-8 py-4 rounded-2xl
                 border border-cyan-400/30
                 bg-cyan-400/10
                 text-cyan-400
                 font-semibold
                 backdrop-blur-md
                 transition-all duration-500
                 hover:scale-105
                 hover:bg-cyan-400
                 hover:text-black
                 hover:shadow-[0_0_40px_rgba(0,255,255,0.7)]"

    >

      {/* GLOW EFFECT */}

      <span className="absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-10 transition duration-500"></span>

      <span className="relative z-10">
        {text}
      </span>

    </motion.button>
  );
};

export default GlowButton;