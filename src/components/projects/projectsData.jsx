import {
  FaPython,
  FaReact,
} from "react-icons/fa";

import {
  SiOpencv,
  SiMediapipe,
  SiTailwindcss,
} from "react-icons/si";

import {
  TbBrain,
  TbApi,
} from "react-icons/tb";
const projectsData = [

  {
    id: 1,

    title: "ZENITH AI ASSISTANT",

    subtitle: "Next-Generation Intelligent System",

    description:
      "A futuristic AI assistant focused on memory systems, voice interaction, intelligent automation and human-centered AI experiences.",

    image: "/projects/zenith.jpg",

    status: "ACTIVE DEVELOPMENT",
    
    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com",

    tech: [

      {
        icon: <FaPython />,
        name: "Python",
      },

      {
        icon: <TbBrain />,
        name: "AI",
      },

      {
        icon: <SiOpencv />,
        name: "OpenCV",
      },

    ],
  },

  {
    id: 2,

    title: "VIRTUAL MOUSE",

    subtitle: "Computer Vision Automation",

    description:
      "Real-time gesture-based virtual mouse system powered by hand tracking and computer vision interaction.",

    image: "/projects/mouse.png",

    status: "IN PROGRESS",


    github: "https://github.com/yourusername/project",
    demo: "https://your-demo-link.com",

    tech: [

      {
        icon: <FaPython />,
        name: "Python",
      },

      {
        icon: <SiMediapipe />,
        name: "MediaPipe",
      },

      {
        icon: <SiOpencv />,
        name: "OpenCV",
      },

    ],
  },

  {
    id: 3,

    title: "WEATHER DASHBOARD",

    subtitle: "Real-Time Weather Analytics Platform",

    description:
      "A modern weather dashboard built with React and Open-Meteo API featuring live location tracking, dynamic weather backgrounds, 12-day forecasting, and hourly weather insights.",

    image: "/projects/weather.jpg",

    status: "COMPLETED",

    
    github: "https://github.com/harshshubham987-svg/weather-dashboard",
    demo: "https://weather-dashboard-eosin-delta.vercel.app/",


    tech: [

      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <SiTailwindcss />,
        name: "Tailwind CSS",
      },
      {
        icon: <TbApi />,
        name: "Open-Meteo API",
      },

    ],
  },

];

export default projectsData;

