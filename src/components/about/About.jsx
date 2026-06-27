import { motion } from "framer-motion";


const About = () => {
  return (

    <section 
        id="about"
        className="relative min-h-screen
                        border-t border-cyan-300/5
                        flex items-start
                        px-6 pt-40 pb-24 overflow-hidden">

      {/* AMBIENT GLOW */}

      <div className="absolute top-1/2 left-1/2
                      -translate-x-1/2 -translate-y-1/2
                      w-[700px] h-[700px]
                      bg-cyan-400/5
                      blur-[140px]
                      rounded-full" />

      <div className="max-w-7xl mx-auto
                      grid md:grid-cols-2
                      gap-12 lg:gap-24 items-center relative z-10">

      {/* Start*/}
      {/* FUTURISTIC BACKGROUND LINES */}

<div className="absolute inset-0
                overflow-hidden
                pointer-events-none">

  {[...Array(8)].map((_, i) => (

    <motion.div

      key={i}

      animate={{
        x: [-100, 100],
        opacity: [0.05, 0.15, 0.05],
      }}

      transition={{
        duration: 8 + i * 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="absolute
                 h-[1px]
                 bg-gradient-to-r
                 from-transparent
                 via-cyan-300/20
                 to-transparent"

      style={{
        width: `${220 + i * 80}px`,
        top: `${10 + i * 10}%`,
        left: `${i * 8}%`,
      }}
    />

  ))}

</div>
{/**End */}
        
        {/* FLOATING PROFILE */}

<motion.div

  initial={{
    opacity: 0,
    x: -100,
    scale: 0.92,
  }}

  whileInView={{
    opacity: 1,
    x: 0,
    scale: 1,
  }}

  transition={{
    duration: 1.5,
    ease: "easeOut",
  }}

  viewport={{
    amount: 0.3,
  }}

  className="relative flex justify-center items-end
             min-h-[720px]"
>

  {/* CYAN GLOW */}

  <div className="absolute
                  w-[420px] h-[420px]
                  bg-cyan-300/10
                  blur-[120px]
                  rounded-full" />

  {/* FLOATING IMAGE */}

  <motion.img

    animate={{
      y: [0, -8, 0],
    }}

    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    src="/assistant/images/about-profile.png"

    alt="Harsh Singh"

    className="relative z-10
           h-[480px] md:h-[580px]
           object-contain
           -translate-y-10
           drop-shadow-[0_0_40px_rgba(0,255,255,0.18)]"
  />

  {/*Start*/}
  {/* HOLOGRAPHIC FLOOR RING */}

<div className="absolute bottom-10
                w-[320px] h-[80px]
                rounded-full
                border border-cyan-300/20
                blur-[1px]" />

<div className="absolute bottom-12
                w-[260px] h-[50px]
                rounded-full
                border border-cyan-300/10" />

{/* PROJECTION GLOW */}

<div className="absolute bottom-0
                w-[260px] h-[120px]
                bg-cyan-300/10
                blur-[80px]
                rounded-full" />
{/**End */}

{/**Start */}
{/* VERTICAL SCAN LINES */}

<div className="absolute inset-0
                flex justify-center
                gap-6
                pointer-events-none">

  {[...Array(6)].map((_, i) => (

    <motion.div

      key={i}

      animate={{
        opacity: [0.05, 0.25, 0.05],
        height: [180, 260, 180],
      }}

      transition={{
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut",
      }}

      className="w-[1px]
                 bg-gradient-to-b
                 from-transparent
                 via-cyan-300/40
                 to-transparent"
    />

  ))}

</div>
{/**End */}
</motion.div>

        {/* RIGHT SIDE */}

        <motion.div

            initial={{
                opacity: 0,
                y: 80,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 1.4,
                ease: "easeOut",
            }}

            viewport={{
                amount: 0.3,
            }}

            className="max-w-[650px]
                flex flex-col justify-center"
        >

          <p className="text-cyan-400 tracking-[4px] mb-4">
            ABOUT ME
          </p>

          <motion.h2

                initial={{
                    opacity: 0,
                    y: 40,
                }}

                whileInView={{
                    opacity: 1,
                    y: 0,
                }}

                transition={{
                    duration: 1,
                    delay: 0.2,
                }}

                viewport={{ once: true }}

                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                >

            Building futuristic
            <span className="text-cyan-400">
              {" "}AI ecosystems
            </span>

          </motion.h2>

          <motion.p

            initial={{
                opacity: 0,
                y: 30,
            }}

            whileInView={{
                opacity: 1,
                y: 0,
            }}

            transition={{
                duration: 1,
                delay: 0.5,
            }}

            viewport={{ once: true }}

            className="text-gray-400
           leading-relaxed
           text-lg
           mb-6
           max-w-[540px]"
            >

            I'm Harsh Shubham Singh — passionate about
            Artificial Intelligence, Automation Engineering,
            futuristic interfaces and intelligent systems.

            My goal is to build next-generation AI experiences
            that feel cinematic, powerful and human-centered.

          </motion.p>

          {/* MINIMAL FUTURISTIC KEYWORDS */}

<div className="mt-14
                flex flex-col
                gap-8">

  {[
    "AI ENGINEERING",
    "AUTOMATION SYSTEMS",
    "COMPUTER VISION",
    "FUTURISTIC INTERFACES",
  ].map((item, index) => (

    <motion.div

      key={index}

      initial={{
        opacity: 0,
        x: -40,
      }}

      animate={{
          opacity: [0.7, 1, 0.7],
        }}

      whileInView={{
        opacity: 1,
        x: 0,
      }}

      transition={{
        duration: 0.8,
        delay: index * 0.15,
        repeat: Infinity,
        repeatType: "mirror",
      }}

      whileHover={{
        x: 12,
      }}

      className={`group relative w-fit

      ${index === 1 ? "ml-10" : ""}

      ${index === 2 ? "-ml-6" : ""}

      ${index === 3 ? "ml-16" : ""}
      `}
    >

      {/* GLOW LINE */}

      <div className="absolute
                      -left-8 top-1/2
                      -translate-y-1/2
                      w-5 h-[1px]
                      bg-cyan-300/70" />

      <h3 className="text-2xl md:text-3xl
                     font-light
                     tracking-[3px]
                     text-gray-300
                     group-hover:text-cyan-300
                     transition duration-300">

        {item}

      </h3>

    </motion.div>

  ))}

</div>
{/*END*/}

          
        </motion.div>

      </div>

    </section>
  );
};

export default About;