import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BootLoader = () => {
    const loadingTexts = [
  "INITIALIZING ZENITH...",
  "LOADING NEURAL CORE...",
  "CONNECTING AI MODULES...",
  "VOICE SYSTEM ONLINE...",
  "SYSTEM READY..."
];
const [currentText, setCurrentText] = useState(0);

useEffect(() => {

  const interval = setInterval(() => {

    setCurrentText((prev) => {

      if (prev === loadingTexts.length - 1) {
        clearInterval(interval);
        return prev;
      }

      return prev + 1;

    });

  }, 600);

  return () => clearInterval(interval);

}, []);

  return (

    <motion.div

      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 1, 0] }}
      transition={{
        duration: 3,
        times: [0, 0.7, 1]
        }}

      className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
    >

      <div className="text-center">

        <motion.h1

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            duration: 1
          }}

          className="text-cyan-400 text-4xl md:text-6xl font-bold tracking-[6px]
                     drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]"
        >

          ZENITH

        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}

          transition={{
            delay: 0.5,
            duration: 1
          }}

          className="text-gray-400 mt-6 tracking-[4px]"
        >

          {loadingTexts[currentText]}

        </motion.p>

      </div>

    </motion.div>
  );
};

export default BootLoader;