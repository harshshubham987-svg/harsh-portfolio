import Navbar from "../components/navbar/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AssistantHero from "../components/assistant/AssistantHero";
import About from "../components/about/About";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import GlowButton from "../components/ui/GlowButton";
import ParticleBackground from "../components/ui/ParticleBackground";
import CursorGlow from "../components/ui/CursorGlow";
import Skills from "../components/skills/Skills";
import SectionDivider from "../components/ui/SectionDivider";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Journey from "../components/journey/Journey";
import Achievements from "../components/achievements/Achievements";
import Certificates from "../components/certificates/Certificates";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <motion.main

      initial={{ opacity: 0, y: 40 }}

      animate={{ opacity: 1, y: 0 }}

      transition={{
        duration: 1.2,
        ease: "easeOut"
      }}

      className="min-h-screen overflow-hidden "
    >

      <CursorGlow />
      {/* BACKGROUND GRID */}

      <div className="absolute inset-0
                      bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),
                      linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)]
                      bg-[size:80px_80px]
                      opacity-20
                      pointer-events-none" />
      
      <ParticleBackground />
      <div className="absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[900px] h-[900px]
                bg-cyan-400/5
                blur-[180px]
                rounded-full
                pointer-events-none" />

      <Navbar />

      {/* HERO SECTION */}

<section
  id="home"
  className="relative z-10 min-h-screen flex items-center justify-center px-10 pt-28"
>

        <div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}

            animate={{ opacity: 1, x: 0 }}

            transition={{
              delay: 0.3,
              duration: 1
            }}
          >

            <p className="text-cyan-400 mb-4 tracking-[4px] relative z-10">
              POWERED BY ZENITH AI Voice...
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">

              Hi, I'm <br />

              <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(0,255,255,0.8)]">
                Harsh Shubham Singh
                <div className="mt-4 w-32 h-[2px]
                bg-gradient-to-r
                from-cyan-400
                to-transparent" />
              </span>

            </h1>

            <div className="mb-8">

                <TypeAnimation

                    sequence={[

                    "AI Engineer",
                    2000,

                    "Automation Engineer",
                    2000,

                    "Python Developer",
                    2000,

                    "Building Future AI Systems",
                    2000,

                    ]}

                    wrapper="span"

                    speed={50}

                    repeat={Infinity}

                    className="text-cyan-400 text-2xl md:text-3xl font-semibold"

                />

                <p className="text-gray-400 text-lg leading-relaxed mt-6 max-w-xl">

                    Passionate about building futuristic intelligent systems,
                    AI experiences and real-world automation solutions.

                </p>

            </div>

            {/* BUTTONS */}

            <div className="flex gap-5 flex-wrap">

                <a href="#projects">

                  <GlowButton text="Explore Projects" />

                </a>

                <a href="#contact">

                  <GlowButton text="Contact Me" />

                </a>

            </div>

            {/* SOCIAL ICONS */}

            <div className="flex gap-6 mt-10 text-2xl text-gray-400">

              <FaGithub className="hover:text-cyan-400 cursor-pointer transition duration-300" />

              <FaLinkedin className="hover:text-cyan-400 cursor-pointer transition duration-300" />

            </div>

          </motion.div>

            {/* RIGHT CONTENT */}

            <AssistantHero />

        </div>

      </section>\

      <SectionDivider />
      <About />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Journey />
      <SectionDivider />
      <Achievements />
      <SectionDivider />
      <Certificates />
      <SectionDivider />
      <Contact />
      <Footer />
      

    </motion.main>
  );
};

export default Home;