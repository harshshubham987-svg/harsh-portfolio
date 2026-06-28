import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
} from "react-icons/md";

import { motion } from "framer-motion";

const Footer = () => {

  const navLinks = [
    "home",
    "projects",
    "journey",
    "achievements",
    "certificates",
    "contact",
  ];

  return (

    <footer
      className="
        relative
        px-6
        py-20
        border-t
        border-cyan-300/10
        overflow-hidden
      "
    >

      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-10

          bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),
          linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)]

          bg-[size:70px_70px]
        "
      />

      {/* GLOW */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2

          w-[600px]
          h-[600px]

          rounded-full
          bg-cyan-400/5

          blur-[120px]
        "
      />

      <div
        className="
          relative
          z-10

          max-w-7xl
          mx-auto

          grid
          md:grid-cols-3
          gap-14
        "
      >

        {/* BRAND */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <h2
            className="
              text-3xl
              font-bold
              text-cyan-100
            "
          >
            HARSH SINGH
          </h2>

          <p
            className="
              mt-2
              text-cyan-400
              tracking-[3px]
              text-sm
            "
          >
            Powered by ZENITH AI
          </p>

          <p
            className="
              mt-5
              text-gray-400
              leading-relaxed
              max-w-sm
            "
          >
            Building intelligent systems,
            futuristic interfaces and
            human-centered AI experiences.
          </p>

        </motion.div>

        {/* NAVIGATION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <p
            className="
              text-cyan-400
              tracking-[4px]
              text-sm
              mb-6
            "
          >
            QUICK ACCESS
          </p>

          <div
            className="
              flex
              flex-col
              gap-4
            "
          >

            {navLinks.map((link) => (

              <a
                key={link}
                href={`#${link}`}
                className="
                  text-cyan-100/80
                  hover:text-cyan-300
                  transition-all
                  duration-300
                  capitalize
                "
              >
                {link}
              </a>

            ))}

          </div>

        </motion.div>

        {/* SOCIALS */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >

          <p
            className="
              text-cyan-400
              tracking-[4px]
              text-sm
              mb-6
            "
          >
            CONNECT SYSTEM
          </p>

          <div
            className="
              flex
              gap-5
              text-2xl
            "
          >

            <a
              href="https://github.com/harshshubham987-svg"
              target="_blank"
              rel="noreferrer"
              className="
                text-cyan-100/70
                hover:text-cyan-300
                transition-all
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-shubham-singh-a42946286/"
              target="_blank"
              rel="noreferrer"
              className="
                text-cyan-100/70
                hover:text-cyan-300
                transition-all
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:harshshubham987@gmail.com"
              className="
                text-cyan-100/70
                hover:text-cyan-300
                transition-all
              "
            >
              <MdEmail />
            </a>

          </div>

        </motion.div>

      </div>

      {/* BOTTOM BAR */}

      <div
        className="
          relative
          z-10

          mt-16
          pt-8

          border-t
          border-cyan-300/10

          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        "
      >

        <p
          className="
            text-gray-500
            text-sm
          "
        >
          © 2026 Harsh Singh — Engineered with Vision.
        </p>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              w-2.5
              h-2.5
              rounded-full
              bg-cyan-300
              shadow-[0_0_15px_rgba(0,255,255,0.8)]
            "
          />

          <p
            className="
              text-cyan-400
              text-xs
              tracking-[4px]
            "
          >
            ZENITH SYSTEM ACTIVE
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;