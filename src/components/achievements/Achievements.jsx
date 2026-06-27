import { motion } from "framer-motion";

import achievementsData from "./achievementsData";
import AchievementCard from "./AchievementCard";

const Achievements = () => {

  return (

    <section
      id="achievements"
      className="
        relative
        px-6
        py-32
        overflow-hidden
      "
    >

      {/* GRID BACKGROUND */}

      <div
        className="
          absolute
          inset-0
          opacity-20

          bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)]

          bg-[size:80px_80px]
        "
      />

      {/* AMBIENT GLOW */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[900px]
          h-[900px]

          rounded-full
          bg-cyan-400/5

          blur-[180px]
        "
      />

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
        "
      >

        {/* HEADING */}

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
            duration: 0.8,
          }}

          viewport={{
            once: true,
          }}

          className="
            text-center
            mb-24
          "
        >

          <p
            className="
              text-cyan-400
              tracking-[5px]
              text-sm
              mb-6
            "
          >

            ENGINEERING MILESTONES

          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >

            Achievement

            <span className="text-cyan-400">

              {" "}System

            </span>

          </h2>

          <p
            className="
              mt-8
              text-gray-400
              text-lg
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >

            A collection of milestones representing
            continuous learning, intelligent system
            building and futuristic engineering exploration.

          </p>

        </motion.div>

        {/* ACHIEVEMENTS GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {achievementsData.map((achievement, index) => (

            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
            />

          ))}

        </div>

      </div>

    </section>

  );
};

export default Achievements;
