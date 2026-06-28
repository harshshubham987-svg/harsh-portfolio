import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [

  "home",
  "about",
  "skills",
  "projects",
  "journey",
  "contact",
  
];
const [activeSection, setActiveSection] =
  useState("home");

useEffect(() => {

  const handleScroll = () => {

    const sections = navItems.map((item) =>
      document.getElementById(item)
    );

    sections.forEach((section) => {

      if (!section) return;

      const rect =
        section.getBoundingClientRect();

      if (
        rect.top <= 200 &&
        rect.bottom >= 200
      ) {

        setActiveSection(section.id);

      }

    });

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);
  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-cyan-500/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-4">

          <img
            src="/zenith-logo.png"
            alt="Zenith Logo"
            className="
              w-11
              h-11

              object-contain

              drop-shadow-[0_0_15px_rgba(0,255,255,0.45)]

              hover:scale-105
              transition-all
              duration-300
            "
          />

          <h1
            className="
              text-cyan-300
              font-bold
              text-2xl
              tracking-wide
            "
          >
            HARSH SHUBHAM SINGH
          </h1>

        </div>

        {/* Nav Links */}

        <ul className="hidden md:flex items-center gap-10 text-gray-300">

          {navItems.map((item) => (

            <li

              key={item}

              onClick={() => {

                document
                  .getElementById(item)
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });

              }}

              className={`uppercase
                transition duration-300
                cursor-pointer
                tracking-[2px]
                relative

                ${
                  activeSection === item
                    ? "text-cyan-400"
                    : "text-gray-400 hover:text-cyan-300"
                }`}
            >

              {item}

              {activeSection === item && (

                  <motion.div

                    layoutId="activeNav"

                    className="absolute
                              -bottom-2 left-0
                              w-full h-[2px]
                              bg-cyan-400
                              shadow-[0_0_12px_rgba(0,255,255,0.8)]"
                  />

                )}
            </li>

          ))}

        </ul>

      </div>

    </nav>
  );
};

export default Navbar;