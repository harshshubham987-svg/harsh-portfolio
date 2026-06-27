import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import ContactCard from "./ContactCard";

const Contact = () => {

  return (

    <section
      id="contact"
      className="relative
                 min-h-screen
                 px-8
                 py-24
                 overflow-hidden"
    >

      {/* AMBIENT GLOW */}

      <div className="absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-[700px]
                      h-[700px]
                      bg-cyan-400/5
                      blur-[160px]
                      rounded-full" />

      <div 
        className="
          relative
          z-10
          max-w-7xl
          mx-auto

          grid
          lg:grid-cols-[1.05fr_0.95fr]

          gap-14
          xl:gap-20

          items-start
        "
      >

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

            CONTACT PORTAL

          </p>

          <h2 className="text-5xl
                         md:text-7xl
                         font-bold
                         leading-[1.05]">   
            LET’S BUILD

            <br />

            <span className="text-cyan-400">

              THE FUTURE

            </span>

            <br />

            TOGETHER.
          </h2>

          <p className="mt-10
                        text-gray-400
                        text-lg
                        leading-relaxed
                        max-w-xl">

            Open to collaboration,
            futuristic projects,
            AI systems engineering and
            intelligent automation ideas.

          </p>

          {/* STATUS */}

          <div className="mt-12
                          flex
                          items-center
                          gap-4">

            <div className="relative">

              <div className="w-4
                              h-4
                              rounded-full
                              bg-cyan-300" />

              <div className="absolute
                              inset-0
                              rounded-full
                              bg-cyan-300
                              animate-ping" />

            </div>

            <p className="tracking-[3px]
                          text-cyan-300
                          text-sm">

              AVAILABLE FOR COLLABORATION

            </p>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <motion.div

          initial={{
            opacity: 0,
            x: 50,
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
          className="space-y-5"
        >

          <ContactCard

            title="EMAIL"

            value="harshshubham987@gmail.com"

            icon={<FaEnvelope />}

            link="mailto:harshshubham987@gmail.com"
          />

          <ContactCard

            title="GITHUB"

            value="harshshubham987"

            icon={<FaGithub />}

            link="https://github.com/harshshubham987-svg"
          />

          <ContactCard

            title="LINKEDIN"

            value="linkedin.com/in/harshshubham"

            icon={<FaLinkedin />}

            link="https://www.linkedin.com/in/harsh-shubham-singh-a42946286/"
          />

          {/* TRANSMISSION PANEL */}

          <div className="relative
                          overflow-hidden
                          border border-cyan-300/10
                          bg-white/[0.03]
                          backdrop-blur-xl
                         
                          rounded-[28px]
                          p-7
                          mt-8
                      ">

            {/* GLOW */}

            <div className="absolute
                            top-0
                            right-0
                            w-32
                            h-32
                            bg-cyan-300/10
                            blur-3xl
                            rounded-full" />

            <p className="text-cyan-300
                          tracking-[4px]
                          text-xs
                          mb-5">

              AI TRANSMISSION

            </p>

            <h3 className="text-3xl
                           font-bold
                           leading-snug">

              Let’s create something

              <span className="text-cyan-400">

                {" "}intelligent.

              </span>

            </h3>

            {/* SIGNAL */}

            <div className="mt-10
                            flex
                            items-center
                            gap-4">

              {[...Array(4)].map((_, index) => (

                <motion.div

                  key={index}

                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}

                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}

                  className="w-3
                             h-3
                             rounded-full
                             bg-cyan-300"
                />

              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

  );
};

export default Contact;

