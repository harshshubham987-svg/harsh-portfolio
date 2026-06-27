import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VoiceWave from "./VoiceWave";

const AssistantHero = () => {
    const [rotate, setRotate] = useState({
  x: 0,
  y: 0,
});

const handleMouseMove = (e) => {

  const { innerWidth, innerHeight } = window;

  const x = (e.clientY / innerHeight - 0.5) * 20;

  const y = (e.clientX / innerWidth - 0.5) * 20;

  setRotate({
    x,
    y,
  });

};

const [pulse, setPulse] = useState(1);
useEffect(() => {

  const interval = setInterval(() => {

    setPulse(Math.random() * 0.4 + 1);

  }, 180);

  return () => clearInterval(interval);

}, []);

  return (

    <motion.div

  onMouseMove={handleMouseMove}

  animate={{
    rotateX: -rotate.x,
    rotateY: rotate.y,
    y: [0, -8, 0],
  }}

  transition={{
    type: "spring",
    stiffness: 80,
    damping: 20,
  }}

  style={{
    transformStyle: "preserve-3d",
  }}

  className="relative flex items-center justify-center
             drop-shadow-[0_0_60px_rgba(0,255,255,0.12)]"
>

  {/* MAIN OUTER RING */}

  <motion.div

    animate={{
        rotate: 360,
        opacity: [0.3, 0.7, 0.3],
    }}

    transition={{
      duration: 40,
      repeat: Infinity,
      ease: "linear",
    }}

    className="absolute w-[420px] h-[420px]
               rounded-full
               border border-cyan-400/10"
  />

    {/* AMBIENT AURA */}

<motion.div

  animate={{
    opacity: [0.1, 0.25, 0.1],
    scale: [1, 1.05, 1],
  }}

  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}

  className="absolute w-[500px] h-[500px]
             rounded-full
             bg-cyan-400/5
             blur-3xl"
/>


{/* OUTER GLOW PULSE */}

<motion.div

  animate={{
    scale: [1, 1.04, 1],
    opacity: [0.05, 0.15, 0.05],
  }}

  transition={{
    duration: 5,
    repeat: Infinity,
    ease: "easeInOut",
  }}

  className="absolute w-[560px] h-[560px]
             rounded-full
             bg-cyan-300/5
             blur-3xl"
/>

  {/* SEGMENTED RING */}

  <motion.div

    animate={{
        rotate: -360,
        opacity: [0.4, 1, 0.4],
    }}

    transition={{
      duration: 18,
      repeat: Infinity,
      ease: "linear",
    }}

    className="absolute w-[340px] h-[340px]
               rounded-full
               border-[3px]
               border-transparent
               border-t-cyan-300/90
                border-r-cyan-300/50
                border-b-cyan-300/20"
  />

  {/* INNER DETAIL RING */}

  <motion.div

    animate={{ rotate: 360 }}

    transition={{
      duration: 12,
      repeat: Infinity,
      ease: "linear",
    }}

    className="absolute w-[280px] h-[280px]
               rounded-full
               border border-cyan-300/20"
  />

  {/* INNER SEGMENTS */}

<div className="absolute w-[240px] h-[240px]">

  {[...Array(24)].map((_, i) => (

    <motion.div

      key={i}

      animate={{
        opacity: [0.2, 1, 0.2],
      }}

      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.05,
      }}

      className="absolute rounded-full bg-cyan-300/70"

      style={{
        width: "18px",
        height: "4px",
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 15}deg)
          translateY(-120px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

{/* MINI INNER CIRCLE */}

<div
  className="absolute w-[180px] h-[180px]
             rounded-full
             border border-cyan-300/10"
/>

{/* INNER ARC */}

<motion.div

  animate={{
    rotate: 360,
  }}

  transition={{
    duration: 14,
    repeat: Infinity,
    ease: "linear",
  }}

  className="absolute w-[160px] h-[160px]
             rounded-full
             border-[4px]
             border-transparent
             border-l-cyan-300/70
             border-b-cyan-300/30"
/>

{/* TACTICAL RING */}

<motion.div

  animate={{
    rotate: -360,
  }}

  transition={{
    duration: 20,
    repeat: Infinity,
    ease: "linear",
  }}

  className="absolute w-[110px] h-[110px]
             rounded-full
             border border-cyan-300/15"
/>

{/* CENTER DATA SEGMENTS */}

<div className="absolute w-[120px] h-[120px]">

  {[...Array(12)].map((_, i) => (

    <div

      key={i}

      className="absolute bg-cyan-300/40 rounded-full"

      style={{
        width: "10px",
        height: "2px",
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 30}deg)
          translateY(-60px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

{/* HOLOGRAPHIC REFLECTION */}

<div
  className="absolute top-[38%] left-[42%]
             w-20 h-20
             rounded-full
             bg-cyan-200/10
             blur-2xl"
/>

{/* ENERGY LINES */}

<div className="absolute w-[340px] h-[340px]">

  {[...Array(16)].map((_, i) => (

    <motion.div

      key={i}

      animate={{
        opacity: [0.1, 0.7, 0.1],
      }}

      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.1,
      }}

      className="absolute bg-cyan-300/20 rounded-full"

      style={{
        width: "1px",
        height: `${30 + (i % 4) * 10}px`,
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 22.5}deg)
          translateY(-170px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

{/* DATA ARC */}

<motion.div

  animate={{
    rotate: -360,
  }}

  transition={{
    duration: 10,
    repeat: Infinity,
    ease: "linear",
  }}

  className="absolute w-[200px] h-[200px]
             rounded-full
             border-[6px]
             border-transparent
             border-t-cyan-300/70"
/>

{/* OUTER ARC SEGMENTS */}

<div className="absolute w-[420px] h-[420px]">

  {[...Array(18)].map((_, i) => (

    <div

      key={i}

      className="absolute bg-cyan-300/60 rounded-full"

      style={{
        width: `${20 + (i % 3) * 10}px`,
        height: "3px",
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 20}deg)
          translateY(-210px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

{/* SIDE DATA PARTICLES */}

{[...Array(25)].map((_, i) => (

  <motion.div

    key={i}

    animate={{
      opacity: [0.1, 0.8, 0.1],
    }}

    transition={{
      duration: 2 + i * 0.1,
      repeat: Infinity,
    }}

    className="absolute rounded-full bg-cyan-300/40"

    style={{
      width: `${1 + (i % 3)}px`,
      height: `${1 + (i % 3)}px`,
      top: `${10 + Math.random() * 80}%`,
      left: `${10 + Math.random() * 80}%`,
    }}
  />

))}

{/* MICRO OUTER RING */}

<div
  className="absolute w-[460px] h-[460px]
             rounded-full
             border border-cyan-300/5"
/>

{/* OUTER DETAIL TRACK */}

<motion.div

  animate={{
    rotate: 360,
  }}

  transition={{
    duration: 30,
    repeat: Infinity,
    ease: "linear",
  }}

  className="absolute w-[480px] h-[480px]
             rounded-full
             border-[2px]
             border-transparent
             border-t-cyan-300/10"
/>

{/* GLOW NODES */}

{[...Array(8)].map((_, i) => (

  <motion.div

    key={i}

    animate={{
      opacity: [0.3, 1, 0.3],
    }}

    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.2,
    }}

    className="absolute w-2 h-2
               rounded-full
               bg-cyan-300
               shadow-[0_0_10px_rgba(0,255,255,1)]"

    style={{
      top: "50%",
      left: "50%",
      transform: `
        rotate(${i * 45}deg)
        translateY(-230px)
      `,
      transformOrigin: "center",
    }}
  />

))}

{/* INNER GRID */}

<div
  className="absolute w-[150px] h-[150px]
             rounded-full
             border border-dashed border-cyan-300/10
             opacity-40"
/>
{/* TECH TRACK */}

<div className="absolute w-[260px] h-[260px]">

  {[...Array(64)].map((_, i) => (

    <div

      key={i}

      className="absolute bg-cyan-300/20 rounded-full"

      style={{
        width: "6px",
        height: "2px",
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 5.625}deg)
          translateY(-130px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

{/* INNER MICRO PARTICLES */}

{[...Array(18)].map((_, i) => (

  <motion.div

    key={i}

    animate={{
      opacity: [0.2, 1, 0.2],
    }}

    transition={{
      duration: 1.5 + i * 0.1,
      repeat: Infinity,
    }}

    className="absolute rounded-full bg-cyan-300/50"

    style={{
      width: "2px",
      height: "2px",
      top: `${35 + Math.random() * 30}%`,
      left: `${35 + Math.random() * 30}%`,
    }}
  />

))}

{/* SCANNER GRID */}

<div className="absolute w-[520px] h-[520px]
                rounded-full
                border border-dashed border-cyan-300/5" />

  {/* MINI DATA NODES */}

{[...Array(12)].map((_, i) => (

  <motion.div

    key={i}

    animate={{
      scale: [1, 1.4, 1],
      opacity: [0.2, 1, 0.2],
    }}

    transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.15,
    }}

    className="absolute w-[3px] h-[3px]
               rounded-full
               bg-cyan-300"

    style={{
      top: "50%",
      left: "50%",
      transform: `
        rotate(${i * 30}deg)
        translateY(-170px)
      `,
      transformOrigin: "center",
    }}
  />

))}

  {/* HUD TICKS */}

<div className="absolute w-[360px] h-[360px]">

  {[...Array(24)].map((_, i) => (

    <div

      key={i}

      className="absolute w-[4px] h-4 bg-cyan-300/30"

      style={{
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 15}deg)
          translateY(-180px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

  {/* SMALL DATA RING */}

  <motion.div

    animate={{ rotate: -360 }}

    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "linear",
    }}

    className="absolute w-[220px] h-[220px]
               rounded-full
               border border-dashed border-cyan-300/20"
  />

  {/* DATA BARS */}

<div className="absolute w-[260px] h-[260px]">

  {[...Array(32)].map((_, i) => (

    <motion.div

      key={i}

      animate={{
        opacity: [0.3, 1, 0.3],
      }}

      transition={{
        duration: 2,
        repeat: Infinity,
        delay: i * 0.08,
      }}

      className="absolute bg-cyan-300/70 rounded-full"

      style={{
        width: "4px",
        height: `${8 + (i % 5) * 6}px`,
        top: "50%",
        left: "50%",
        transform: `
          rotate(${i * 11.25}deg)
          translateY(-130px)
        `,
        transformOrigin: "center",
      }}
    />

  ))}

</div>

{/* CROSSHAIR */}

<div className="absolute w-[500px] h-[500px]">

  <div className="absolute top-0 left-1/2
                  w-[1px] h-full
                  bg-cyan-300/10
                  -translate-x-1/2" />

  <div className="absolute top-1/2 left-0
                  h-[1px] w-full
                  bg-cyan-300/10
                  -translate-y-1/2" />

</div>
{/* MICRO PARTICLES */}

{[...Array(20)].map((_, i) => (

  <motion.div

    key={i}

    animate={{
      opacity: [0.1, 0.6, 0.1],
    }}

    transition={{
      duration: 2 + i * 0.2,
      repeat: Infinity,
    }}

    className="absolute rounded-full bg-cyan-300/40"

    style={{
      width: "2px",
      height: "2px",
      top: `${20 + Math.random() * 60}%`,
      left: `${20 + Math.random() * 60}%`,
    }}
  />

))}

<div
  className="absolute inset-10
             rounded-full
             bg-cyan-300/10
             blur-xl"
/>

  {/* CENTER CORE */}

  <motion.div

    animate={{
        scale: [pulse, pulse + 0.03, pulse],
        opacity: [0.7, 1, 0.7],
    }}

    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
      
    className="relative w-[140px] h-[140px]
               rounded-full
               bg-cyan-400/10
               border border-cyan-300/20
               backdrop-blur-xl
               shadow-[0_0_80px_rgba(0,255,255,0.45)]"

      
  >

    {/* SHIMMER */}

<motion.div

  animate={{
    x: [-20, 20, -20],
    opacity: [0.05, 0.15, 0.05],
  }}

  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}

  className="absolute w-[180px] h-[180px]
             rounded-full
             bg-white/10
             blur-3xl"
/>

    {/* INNER GLOW */}

   <motion.div

  animate={{
    rotate: 360,
  }}

  transition={{
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  }}

  className="absolute inset-6 rounded-full
             border border-cyan-300/10
             border-dashed
             blur-[1px]"
/>
  </motion.div>

  {/* CENTER DOT */}

  <motion.div

    animate={{
        opacity: [0.4, 1, 0.4],
        scale: [1, 1.6, 1],
    }}

    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }}

    className="absolute w-4 h-4
               rounded-full
               bg-cyan-300
               shadow-[0_0_20px_rgba(0,255,255,1)]"
  />
  
    {/* CENTER PULSE */}

<motion.div

  animate={{
    scale: [1, 2.2],
    opacity: [0.4, 0],
  }}

  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeOut",
  }}

  className="absolute w-5 h-5
             rounded-full
             border border-cyan-300/40"
/>

  {/* SCANNER SWEEP */}

<motion.div

  animate={{
    rotate: 360,
  }}

  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "linear",
  }}

  className="absolute w-[320px] h-[320px]
             rounded-full"
>

    <div

    className="absolute top-0 left-1/2
              w-[6px] h-1/2
              bg-gradient-to-b
              from-cyan-300/100
              via-cyan-300/40
              to-transparent
              -translate-x-1/2
              blur-[3px]
              shadow-[0_0_25px_rgba(0,255,255,0.9)]"
  />
    <div

    className="absolute top-0 left-1/2
              w-[18px] h-1/2
              bg-cyan-300/10
              -translate-x-1/2
              blur-2xl"
  />

</motion.div>

</motion.div>
    
  );
};

export default AssistantHero;