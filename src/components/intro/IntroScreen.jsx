import { motion } from "framer-motion";

const IntroScreen = ({ onFinish }) => {

  return (

    <motion.div

      initial={{ opacity: 1 }}

      animate={{ opacity: 1 }}

      exit={{ opacity: 0 }}

      transition={{ duration: 1 }}

      className="
        fixed
        inset-0
        z-[9999]
        bg-black
        overflow-hidden
      "
    >

      {/* VIDEO */}

      <video

        autoPlay
        playsInline

        onEnded={onFinish}

        className="
          w-full
          h-full
          object-contain
            bg-black
        "
      >

        <source
          src="/assistant/videos/zenith-intro.mp4"
          type="video/mp4"
        />

      </video>

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0
          bg-black/20
        "
      />

    </motion.div>

  );
};

export default IntroScreen;

