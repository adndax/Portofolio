import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";
import { PiFileC } from "react-icons/pi";
import { RiNextjsFill, RiTailwindCssFill  } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const navItems = [
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Activities", link: "#activities" },
    { name: "Contact", link: "#contact" },
];

export const words = [
    'Portfolio', 'Work', 'Website', 'Creation'
]

export const skills1 = [
    {
        icon: <FaHtml5 size={50}/>,
        name: "HTML",
    },
    {
        icon: <IoLogoCss3 size={50}/>,
        name: "CSS",
    },
    {
        icon: <IoLogoJavascript size={50}/>,
        name: "JavaScript",
    },
    {
        icon: <SiTypescript size={50}/>,
        name: "TypeScript",
    },
];

export const skills2 = [
    {
        icon: <FaReact size={50}/>,
        name: "React",
    },
    {
        icon: <RiNextjsFill size={50}/>,
        name: "Next",
    },
    {
        icon: <SiVite size={50}/>,
        name: "Vite",
    },
    {
        icon: <RiTailwindCssFill size={50}/>,
        name: "Tailwind",
    },
];

export const skills3 = [
    {
        icon: <FaPython size={50}/>,
        name: "Python",
    },
    {
        icon: <PiFileC size={50}/>,
        name: "C",
    },
    {
        icon: <FaGitAlt size={50}/>,
        name: "Git",
    },
    {
        icon: <FaGithub size={50}/>,
        name: "Github",
    },
]

export const projects = [
    {
        title: "Grootopia: Plant Management Desktop Apps",
        description: "Designed the graphical user interface (GUI) for Grootopia, a desktop application aimed at helping users manage their plants and track growth.",
        jobs: "GUI Developer",
        imageSrc: "/grootopia.png",
        link: "https://github.com/adndax/IF2150-2024-K01-G04-Grootopia",
        icons: [<FaGithub size={20} />, <FaPython size={20} />]
      },
      {
        title: "OSKM ITB 2024: Official Website for ITB's New Student",
        jobs: "Front End Developer",
        description: "Developed the login form for the OSKM ITB 2024 website, enabling users to securely log in to access event-related information and resources.",
        imageSrc: "/oskm.jpg",
        link: "https://github.com/adndax",
        icons: [<FaGithub size={20} />, <FaReact size={20} />, <RiNextjsFill size={20} />, <SiTypescript size={20} />, <RiTailwindCssFill size={20} />]
      },
      {
        title: "Simsalabim: Image and Music Retrieval Website",
        description: "A platform designed to provide efficient image retrieval and music data retrieval, enabling users to search and discover media based on different attributes.",
        jobs: "Full Stack Developer",
        imageSrc: "/simsalabim.png",
        link: "https://github.com/nomisnoumi/tubesalgeo02",
        icons: [<FaGithub size={20} />, <FaReact size={20} />, <SiTypescript size={20} />, <IoLogoCss3 size={20} />, <FaPython size={20} />,]
      },
  ];
