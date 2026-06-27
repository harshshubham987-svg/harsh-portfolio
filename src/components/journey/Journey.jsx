import { useState } from "react";
import { motion } from "framer-motion";

import journeyData from "./journeyData";
import EvolutionGraph from "./EvolutionGraph";
import JourneyPanel from "./JourneyPanel";

const Journey = () => {

  const [activeStage, setActiveStage] = useState(0);

  return (

    <section
      id="journey"
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
          w-[1000px]
          h-[1000px]
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

          className="text-center mb-24"
        >

          <p
            className="
              text-cyan-400
              tracking-[5px]
              text-sm
              mb-6
            "
          >

            MY EVOLUTION JOURNEY

          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
            "
          >

            Building

            <span className="text-cyan-400">

              {" "}Future Intelligence

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

            A journey of continuous learning, engineering
            intelligent systems and building futuristic
            human-centered AI experiences.

          </p>

        </motion.div>

        {/* MAIN LAYOUT */}

        <div
          className="
            grid
            lg:grid-cols-[1.9fr_0.8fr]
            gap-16
            items-start
          "
        >

          {/* LEFT GRAPH */}

          <div
            className="
              relative
              min-h-[700px]

              rounded-[40px]
              border
              border-cyan-300/10

              bg-[#050505]/70
              backdrop-blur-2xl

              p-12
              overflow-hidden
            "
          >

            {/* GLOW */}

            <div
              className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-[400px]
                h-[400px]
                rounded-full
                bg-cyan-400/10
                blur-[120px]
              "
            />

            <div className="relative z-10">

              <EvolutionGraph
                journeyData={journeyData}
                activeStage={activeStage}
                setActiveStage={setActiveStage}
              />

            </div>

          </div>

          {/* RIGHT PANEL */}

          <JourneyPanel
            stage={journeyData[activeStage]}
          />

        </div>

      </div>

    </section>

  );
};

export default Journey;
