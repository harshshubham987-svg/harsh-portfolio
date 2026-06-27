import { motion } from "framer-motion";
import projectsData from "./projectsData";

const Projects = () => {

  return (

    <section
      id="projects"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* AMBIENT GLOW */}

      <div
        className="absolute
                   top-1/2
                   left-1/2
                   -translate-x-1/2
                   -translate-y-1/2
                   w-[900px]
                   h-[900px]
                   bg-cyan-400/5
                   blur-[180px]
                   rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="mb-24">

          <p
            className="text-cyan-400
                       tracking-[4px]
                       text-sm
                       mb-5"
          >

            FEATURED PROJECTS

          </p>

          <h2
            className="text-5xl
                       md:text-7xl
                       font-bold
                       leading-tight"
          >

            Engineering

            <span className="text-cyan-400">

              {" "}Future Systems

            </span>

          </h2>

        </div>

        {/* PROJECT STACK */}

        <div className="relative">

          {projectsData.map((project, index) => (

            <div
              key={project.id}
              className="
                sticky
                top-0
                h-screen
                flex
                items-center
                justify-center
                
              "
              style={{
                zIndex: index + 1,
              }}
            >

              <motion.div

                initial={false}

                className="
                  w-full
                  max-w-7xl
                "
              >

                <div
                  className={`
                    relative
                    overflow-hidden
                    will-change-transform
                    rounded-[40px]
                    border border-cyan-300/10
                    bg-[#050505]/90
                    backdrop-blur-2xl
                    shadow-[0_0_80px_rgba(0,255,255,0.08)]

                    grid
                    lg:grid-cols-2
                    gap-14
                    items-center

                    p-8
                    md:p-12

                    min-h-[620px]

                    ${project.direction === "right"
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                    }
                  `}
                >

                  {/* BIG NUMBER */}

                  <h1
                    className="absolute
                               right-8
                               bottom-0
                               text-[180px]
                               font-black
                               leading-none
                               text-white/[0.03]
                               pointer-events-none"
                  >

                    0{project.id}

                  </h1>

                  {/* LEFT */}

                  <div className="relative z-10">

                    <p
                      className="text-cyan-400
                                 tracking-[4px]
                                 text-sm
                                 mb-4"
                    >

                      {project.status}

                    </p>

                    <h2
                      className="text-5xl
                                 md:text-6xl
                                 font-bold
                                 leading-[1]"
                    >

                      {project.title}

                    </h2>

                    <p
                      className="mt-5
                                 text-cyan-300
                                 text-2xl"
                    >

                      {project.subtitle}

                    </p>

                    <p
                      className="mt-8
                                 text-gray-400
                                 text-lg
                                 leading-relaxed
                                 max-w-xl"
                    >

                      {project.description}

                    </p>
                    
                    
                    {/* PROJECT BUTTONS */}

                    <div className="flex gap-4 mt-8">

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-5
                          py-3
                          rounded-2xl

                          border border-cyan-300/20
                          bg-cyan-400/5

                          text-cyan-300
                          text-sm
                          tracking-[2px]

                          transition-all
                          duration-300

                          hover:bg-cyan-400/10
                          hover:border-cyan-300/40
                          hover:-translate-y-1
                        "
                      >

                        VIEW CODE

                      </a>

                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          px-5
                          py-3
                          rounded-2xl

                          border border-cyan-300/10
                          bg-white/[0.03]

                          text-white
                          text-sm
                          tracking-[2px]

                          transition-all
                          duration-300

                          hover:bg-white/[0.06]
                          hover:-translate-y-1
                        "
                      >

                        LIVE DEMO

                      </a>

                    </div>



                    {/* TECH */}

                    <div className="flex flex-wrap gap-4 mt-10">

                      {project.tech.map((tech, index) => (

                        <motion.div

                          key={index}

                          whileHover={{
                            y: -4,
                            scale: 1.05,
                          }}

                          className="flex
                                     items-center
                                     gap-3
                                     border border-cyan-300/10
                                     bg-white/[0.03]
                                     backdrop-blur-xl
                                     px-5
                                     py-3
                                     rounded-2xl
                                     text-cyan-200"
                        >

                          <div className="text-xl">

                            {tech.icon}

                          </div>

                          <span
                            className="tracking-[2px]
                                       text-sm"
                          >

                            {tech.name}

                          </span>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                  {/* RIGHT */}

                  <motion.div

                    whileHover={{
                      scale: 1.02,
                    }}

                    transition={{
                      duration: 0.4,
                    }}

                    className="relative group"
                  >

                    {/* IMAGE GLOW */}

                    <div
                      className="absolute
                                 inset-0
                                 bg-cyan-400/10
                                 blur-[100px]
                                 rounded-[40px]"
                    />

                    {/* IMAGE */}

                    <div
                      className="relative
                                 overflow-hidden
                                 rounded-[30px]
                                 border border-cyan-300/10"
                    >

                      <img

                        src={project.image}

                        alt={project.title}

                        className="w-full
                                   h-[420px]
                                   object-cover
                                   transition
                                   duration-700
                                   group-hover:scale-105"
                      />

                      {/* OVERLAY */}

                      <div
                        className="absolute
                                   inset-0
                                   bg-gradient-to-t
                                   from-black/70
                                   to-transparent"
                      />

                      {/* LABEL */}

                      <div
                        className="absolute
                                   top-5
                                   left-5
                                   border border-cyan-300/20
                                   bg-black/40
                                   backdrop-blur-xl
                                   px-5
                                   py-3
                                   rounded-full"
                      >

                        <p
                          className="text-xs
                                     tracking-[4px]
                                     text-cyan-300"
                        >

                          AI SYSTEM

                        </p>

                      </div>

                    </div>

                  </motion.div>

                </div>

              </motion.div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
};

export default Projects;

