import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import achievementsData from "./achievementsData";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  const [currentBatch, setCurrentBatch] = useState(0);

  const batchSize = 3;
  const totalBatches = Math.ceil(
    achievementsData.length / batchSize
  );

  const nextBatch = () => {
    setCurrentBatch((prev) =>
      prev === totalBatches - 1 ? 0 : prev + 1
    );
  };

  const prevBatch = () => {
    setCurrentBatch((prev) =>
      prev === 0 ? totalBatches - 1 : prev - 1
    );
  };

  const visibleAchievements =
    achievementsData.slice(
      currentBatch * batchSize,
      currentBatch * batchSize + batchSize
    );

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

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="text-center mb-20">

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
            "
          >
            Achievement
            <span className="text-cyan-400">
              {" "}System
            </span>
          </h2>

        </div>

        {/* SLIDER */}

        <div className="relative flex items-center">

          {/* LEFT BUTTON */}

          <button
            onClick={prevBatch}
            className="
              absolute
              left-[-30px]
              z-20

              w-14
              h-14

              rounded-full
              border
              border-cyan-300/20

              bg-black/50
              backdrop-blur-xl

              flex
              items-center
              justify-center

              text-cyan-300
            "
          >
            <FaArrowLeft />
          </button>

          {/* CARDS */}

          <AnimatePresence mode="wait">

            <motion.div
              key={currentBatch}
              initial={{
                opacity: 0,
                x: 120,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -120,
              }}
              transition={{
                duration: 0.5,
              }}
              className="
                grid
                md:grid-cols-3
                gap-8
                w-full
              "
            >
              {visibleAchievements.map(
                (achievement, index) => (
                  <AchievementCard
                    key={achievement.id}
                    achievement={achievement}
                    index={index}
                  />
                )
              )}
            </motion.div>

          </AnimatePresence>

          {/* RIGHT BUTTON */}

          <button
            onClick={nextBatch}
            className="
              absolute
              right-[-30px]
              z-20

              w-14
              h-14

              rounded-full
              border
              border-cyan-300/20

              bg-black/50
              backdrop-blur-xl

              flex
              items-center
              justify-center

              text-cyan-300
            "
          >
            <FaArrowRight />
          </button>

        </div>

      </div>
    </section>
  );
};

export default Achievements;