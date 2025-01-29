import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { PiFileC } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export const navItems = [
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experiences", link: "#experiences" },
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