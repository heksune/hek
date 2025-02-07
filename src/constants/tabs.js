import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaMarkdown, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiTailwindcss, SiMongodb, SiReplit, SiVercel, SiHeroku, SiAdobeaftereffects, SiAdobephotoshop } from "react-icons/si";
import { BiLogoNetlify, BiLogoTypescript, BiLogoJavascript, BiLogoFirebase } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";

export const tabs = [
    {
        name: "Languages",
        id: 1,
        items: [
            { name: "JavaScript", icon: BiLogoJavascript },
            { name: "TypeScript", icon: BiLogoTypescript }
        ],
    },
    {
        name: "Markup Languages",
        id: 2,
        items: [
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "Markdown", icon: FaMarkdown }
        ],
    },
    {
        name: "Frameworks",
        id: 3,
        items: [
            { name: "React", icon: FaReact },
            { name: "Node.js", icon: FaNodeJs },
            { name: "Next.js", icon: RiNextjsLine },
            { name: "Express.js", icon: SiExpress },
            { name: "Tailwind CSS", icon: SiTailwindcss }
        ],
    },
    {
        name: "Databases",
        id: 4,
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "Firebase", icon: BiLogoFirebase }
        ],
    },
    {
        name: "Services",
        id: 5,
        items: [
            { name: "Replit", icon: SiReplit },
            { name: "Vercel", icon: SiVercel },
            { name: "Heroku", icon: SiHeroku },
            { name: "Netlify", icon: BiLogoNetlify }
        ],
    },
    {
        name: "Others",
        id: 6,
        items: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "VSCode", icon: VscVscode },
            { name: "Figma", icon: FaFigma },
            { name: "A. Photoshop", icon: SiAdobephotoshop },
            { name: "A. After Effects", icon: SiAdobeaftereffects }
        ],
    },
];
