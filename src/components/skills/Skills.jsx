import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";

const Skills = () => {

  const skills = [
    "PYTHON",
    "AI SYSTEMS",
    "AUTOMATION",
    "ML",
    "COMPUTER VISION",
    "REACT",
    "DJANGO",
    "DSA",
  ];

  const [activeSkill, setActiveSkill] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setActiveSkill((prev) =>
        (prev + 1) % skills.length
      );

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <section
      id="skills"
      className="relative
                 min-h-screen
                 px-8
                 py-16
                 overflow-hidden"
    >

      {/* GRID BACKGROUND */}

      <div className="absolute inset-0
                      opacity-20
                      bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),
                      linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)]
                      bg-[size:80px_80px]" />

      {/* AMBIENT GLOW */}

      <div className="absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-[700px]
                      h-[700px]
                      bg-cyan-400/10
                      blur-[140px]
                      rounded-full" />

      <div className="relative z-10
                      max-w-7xl
                      mx-auto
                      grid lg:grid-cols-2
                      gap-10
                      items-center">

        {/* LEFT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            x: -50,
          }}

          whileInView={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 1,
          }}

          viewport={{
            once: true,
          }}

        >

          <p className="text-cyan-400
                        tracking-[4px]
                        text-sm
                        mb-6">

            MY TECH ECOSYSTEM

          </p>

          <h2 className="text-4xl
                          md:text-6xl
                         font-bold
                         leading-[1.05]
                         text-white">

            AI ENGINEER

            <br />

            <span className="text-cyan-400">

              BUILDING

            </span>

            <br />

            INTELLIGENT

            <br />

            SYSTEMS

          </h2>

          <p className="mt-6
                        text-gray-400
                        text-lg
                        leading-relaxed
                        max-w-xl">

            Creating futuristic AI systems,
            automation workflows and immersive
            intelligent experiences through
            modern engineering and design.

          </p>

          {/* TERMINAL */}

          <div className="mt-8
                          border border-cyan-300/10
                          bg-black/30
                          backdrop-blur-xl
                          rounded-3xl
                          p-6
                          shadow-[0_0_40px_rgba(0,255,255,0.08)]">

            <div className="flex items-center gap-3 mb-5">

              <div className="w-3 h-3 rounded-full bg-cyan-300" />

              <p className="text-cyan-300
                            text-xs
                            tracking-[3px]">

                AI TERMINAL

              </p>

            </div>

            <TypeAnimation

              sequence={[

                "> Initializing AI ecosystem...",
                2000,

                "> Building automation workflows...",
                2000,

                "> Training intelligent systems...",
                2000,

                "> Deploying futuristic interfaces...",
                2000,

              ]}

              wrapper="span"

              speed={60}

              repeat={Infinity}

              className="text-cyan-100/90
                         font-mono
                         text-lg"
            />

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <div className="relative
                        h-[540px]
                        flex
                        items-center
                        justify-center">

          {/* PARTICLES */}

          {[...Array(25)].map((_, index) => (

            <motion.div

              key={index}

              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
              }}

              transition={{
                duration: 4 + index * 0.2,
                repeat: Infinity,
              }}

              className="absolute
                         w-1
                         h-1
                         rounded-full
                         bg-cyan-300/70"

              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />

          ))}

          {/* SKILL WORDS */}

          {skills.map((skill, index) => {

            const positions = [

              "top-10 left-20",
              "top-24 right-10",
              "top-1/2 -translate-y-1/2 left-0",
              "bottom-24 left-24",
              "bottom-12 right-20",
              "top-1/2 -translate-y-1/2 right-0",
              "bottom-0 left-1/2 -translate-x-1/2",
              "top-0 left-1/2 -translate-x-1/2",

            ];

            return (

              <motion.div

                key={index}

                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}

                className={`absolute
                            ${positions[index]}
                            text-cyan-100
                            tracking-[4px]
                            font-semibold
                            text-sm md:text-base
                            transition-all
                            duration-500

                            ${activeSkill === index

                              ? "text-cyan-300 scale-125 drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]"

                              : "opacity-40"
                            }
                `}
              >

                {skill}

              </motion.div>

            );

          })}

          {/* CENTER CORE */}

          <motion.div

            animate={{
              scale: [1, 1.05, 1],
            }}

            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}

            className="relative
                       w-[200px]
                      h-[200px]
                       rounded-full
                       border border-cyan-300/20
                       bg-cyan-300/10
                       backdrop-blur-xl
                       flex items-center
                       justify-center
                       shadow-[0_0_80px_rgba(0,255,255,0.2)]"
          >

            {/* OUTER RINGS */}

            <div className="absolute
                            w-[280px]
                            h-[280px]
                            rounded-full
                            border border-cyan-300/10" />

            <div className="absolute
                            w-[360px]
                            h-[360px]
                            rounded-full
                            border border-cyan-300/5" />

            {/* CORE TEXT */}

            <div className="text-center">

              <h3 className="text-4xl
                             font-bold
                             text-cyan-300">

                AI

              </h3>

              <p className="mt-3
                            text-cyan-100/70
                            tracking-[4px]
                            text-sm">

                SYSTEM CORE

              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
};

export default Skills;

