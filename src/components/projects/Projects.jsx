import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectsData from "./projectsData";

const Projects = () => {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) =>
      prev === 0 ? projectsData.length - 1 : prev - 1
    );
  };

  const nextProject = () => {
    setCurrent((prev) =>
      prev === projectsData.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };

    window.addEventListener("keydown", handleKey);

    return () =>
      window.removeEventListener("keydown", handleKey);
  }, []);

  const project = projectsData[current];

  return (
    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* BACKGROUND GLOW */}

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

        <div className="mb-20 text-center">
          <p
            className="
              text-cyan-400
              tracking-[4px]
              text-sm
              mb-5
            "
          >
            FEATURED PROJECTS
          </p>

          <h2
            className="
              text-5xl
              md:text-7xl
              font-bold
            "
          >
            Engineering
            <span className="text-cyan-400">
              {" "}Future Systems
            </span>
          </h2>
        </div>

        {/* CAROUSEL */}

        <div
          className="
            relative
            flex
            items-center
            justify-center
          "
        >
          {/* LEFT BUTTON */}

          <button
            onClick={prevProject}
            className="
              absolute
              left-0
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

              hover:scale-110
              transition-all
            "
          >
            <FaArrowLeft />
          </button>

          {/* PROJECT CARD */}

          <AnimatePresence mode="wait">
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                x: 120,
                scale: 0.95,
              }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                x: -120,
                scale: 0.95,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                relative
                w-full
                max-w-6xl
              "
            >
              <div
                className="
                  relative
                  rounded-[40px]
                  border
                  border-cyan-300/10

                  bg-[#050505]/90
                  backdrop-blur-2xl

                  shadow-[0_0_80px_rgba(0,255,255,0.08)]

                  grid
                  lg:grid-cols-2
                  gap-14
                  items-center

                  p-8
                  md:p-12
                "
              >
                {/* BIG NUMBER */}

                <h1
                  className="
                    absolute
                    right-8
                    bottom-0
                    text-[180px]
                    font-black
                    leading-none
                    text-white/[0.03]
                  "
                >
                  0{project.id}
                </h1>

                {/* LEFT CONTENT */}

                <div className="relative z-10">
                  <p
                    className="
                      text-cyan-400
                      tracking-[4px]
                      text-sm
                      mb-4
                    "
                  >
                    {project.status}
                  </p>

                  <h2
                    className="
                      text-5xl
                      font-bold
                      leading-tight
                    "
                  >
                    {project.title}
                  </h2>

                  <p
                    className="
                      mt-4
                      text-cyan-300
                      text-2xl
                    "
                  >
                    {project.subtitle}
                  </p>

                  <p
                    className="
                      mt-8
                      text-gray-400
                      leading-relaxed
                      text-lg
                    "
                  >
                    {project.description}
                  </p>

                  {/* BUTTONS */}

                  <div className="flex gap-4 mt-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-3 rounded-2xl
                        border border-cyan-300/20
                        text-cyan-300
                        hover:bg-cyan-400/10
                        transition-all
                      "
                    >
                      VIEW CODE
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        px-5 py-3 rounded-2xl
                        border border-cyan-300/10
                        text-white
                        hover:bg-white/[0.06]
                        transition-all
                      "
                    >
                      LIVE DEMO
                    </a>
                  </div>

                  {/* TECH */}

                  <div className="flex flex-wrap gap-4 mt-10">
                    {project.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="
                          flex items-center gap-3
                          border border-cyan-300/10
                          bg-white/[0.03]
                          px-5 py-3
                          rounded-2xl
                          text-cyan-200
                        "
                      >
                        <div className="text-xl">
                          {tech.icon}
                        </div>

                        <span className="text-sm tracking-[2px]">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT IMAGE */}

                <div className="relative group">
                  <div
                    className="
                      absolute
                      inset-0
                      bg-cyan-400/10
                      blur-[100px]
                      rounded-[40px]
                    "
                  />

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border border-cyan-300/10
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-[420px]
                        object-cover
                        group-hover:scale-105
                        transition duration-700
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* RIGHT BUTTON */}

          <button
            onClick={nextProject}
            className="
              absolute
              right-0
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

              hover:scale-110
              transition-all
            "
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;