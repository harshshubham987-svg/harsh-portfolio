
import {
  FaPython,
  FaJava,
  FaReact,
  FaGithub,
} from "react-icons/fa";

import {
  SiMysql,
  SiOpencv,
  SiMediapipe,
} from "react-icons/si";

import {
  TbBrain,
  TbApi,
  TbTarget,
  TbCpu,
} from "react-icons/tb";

const journeyData = [

  {
    id: 0,

    title: "FOUNDATION",

    description:
      "Built strong programming fundamentals, logic building and problem solving mindset.",

    quote:
      "Every intelligent system begins with strong foundations.",

    icon: <TbCpu />,

    skills: [

      {
        icon: <FaPython />,
        name: "Python",
      },

      {
        icon: <FaJava />,
        name: "Java",
      },

      {
        icon: <SiMysql />,
        name: "SQL",
      },

      {
        icon: <TbBrain />,
        name: "DSA",
      },

    ],
  },

  {
    id: 1,

    title: "AUTOMATION",

    description:
      "Explored APIs, workflows and engineering automation systems.",

    quote:
      "Automation transforms effort into scalable intelligence.",

    icon: <TbApi />,

    skills: [

      {
        icon: <TbApi />,
        name: "APIs",
      },

      {
        icon: <FaGithub />,
        name: "GitHub",
      },

      {
        icon: <FaReact />,
        name: "React",
      },

      {
        icon: <TbBrain />,
        name: "Automation",
      },

    ],
  },

  {
    id: 2,

    title: "AI SYSTEMS",

    description:
      "Focused on computer vision, machine learning and intelligent systems.",

    quote:
      "AI is where logic evolves into intelligence.",

    icon: <TbBrain />,

    skills: [

      {
        icon: <SiOpencv />,
        name: "OpenCV",
      },

      {
        icon: <SiMediapipe />,
        name: "MediaPipe",
      },

      {
        icon: <TbBrain />,
        name: "Machine Learning",
      },

      {
        icon: <TbTarget />,
        name: "AI Models",
      },

    ],
  },

  {
    id: 3,

    title: "FUTURE VISION",

    description:
      "Building ZENITH — a futuristic AI ecosystem with cinematic human-centered experiences.",

    quote:
      "The future belongs to intelligent systems designed for humans.",

    icon: <TbTarget />,

    skills: [

      {
        icon: <TbBrain />,
        name: "ZENITH",
      },

      {
        icon: <TbCpu />,
        name: "Systems",
      },

      {
        icon: <TbTarget />,
        name: "AI UX",
      },

      {
        icon: <TbBrain />,
        name: "Future AI",
      },

    ],
  },

];

export default journeyData;

