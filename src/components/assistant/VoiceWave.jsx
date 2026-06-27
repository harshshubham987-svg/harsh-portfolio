import { motion } from "framer-motion";

const bars = [1, 2, 3, 4, 5, 6, 7];

const VoiceWave = () => {
  return (

    <div className="flex items-end gap-1 h-10">

      {bars.map((bar) => (

        <motion.div

          key={bar}

          animate={{
            height: [10, 35, 15, 40, 10]
          }}

          transition={{
            duration: 1,
            repeat: Infinity,
            delay: bar * 0.1,
            ease: "easeInOut"
          }}

          className="w-1.5 rounded-full bg-cyan-400
                     shadow-[0_0_10px_rgba(0,255,255,0.8)]"
        />

      ))}

    </div>
  );
};

export default VoiceWave;