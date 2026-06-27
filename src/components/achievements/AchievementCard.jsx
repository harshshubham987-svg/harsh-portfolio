import { motion } from "framer-motion";

const AchievementCard = ({
  achievement,
  index,
}) => {

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 40,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}

      viewport={{
        once: true,
      }}

      whileHover={{
        y: -10,
      }}

      className="
        group
        relative

        rounded-[32px]
        border
        border-cyan-300/10

        bg-[#050505]/70
        backdrop-blur-2xl

        p-8

        overflow-hidden
      "
    >

      {/* AMBIENT GLOW */}

      <div
        className="
          absolute
          top-0
          right-0

          w-32
          h-32

          rounded-full
          bg-cyan-400/10

          blur-[80px]
        "
      />

      {/* ICON */}

      <div
        className="
          relative
          z-10

          w-20
          h-20

          rounded-3xl

          border
          border-cyan-300/10

          bg-white/[0.03]

          flex
          items-center
          justify-center

          text-4xl
          text-cyan-300

          shadow-[0_0_30px_rgba(0,255,255,0.12)]
        "
      >

        {achievement.icon}

      </div>

      {/* TITLE */}

      <h3
        className="
          relative
          z-10

          mt-8

          text-2xl
          font-bold

          text-cyan-100

          tracking-[2px]
        "
      >

        {achievement.title}

      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          relative
          z-10

          mt-5

          text-gray-400
          leading-relaxed
        "
      >

        {achievement.description}

      </p>

      {/* BOTTOM LABEL */}

      <div
        className="
          relative
          z-10

          mt-8

          flex
          items-center
          justify-between
        "
      >

        <p
          className="
            text-xs
            tracking-[4px]
            text-cyan-400
          "
        >

          ACHIEVEMENT UNLOCKED

        </p>

        <div
          className="
            w-3
            h-3

            rounded-full
            bg-cyan-300

            shadow-[0_0_15px_rgba(0,255,255,0.8)]
          "
        />

      </div>

    </motion.div>

  );
};

export default AchievementCard;
