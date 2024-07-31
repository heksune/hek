import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaMarkdown, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiTailwindcss, SiMongodb, SiReplit, SiVercel, SiHeroku } from "react-icons/si";
import { BiLogoNetlify } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { FiFigma } from "react-icons/fi";


export const tabs = [
    {
      name: "Languages",
      id: 1,
      items: [
        {
          name: "JavaScript",
          icon: <IoLogoJavascript className="w-5 h-5" />
        }
      ],
    },
    {
      name: "Markup Languages",
      id: 2,
      items: [
        {
          name: "HTML",
          icon: <FaHtml5 className="w-5 h-5" />
        },
        {
          name: "CSS",
          icon: <FaCss3Alt className="w-5 h-5" />
        },
        {
          name: "Markdown",
          icon: <FaMarkdown className="w-5 h-5" />
        }
      ],
    },
    {
      name: "Frames",
      id: 3,
      items: [
        {
          name: "React",
          icon: <FaReact className="w-5 h-5" />
        },
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-5 h-5" />
        },
        {
          name: "Next.js",
          icon: <RiNextjsLine className="w-5 h-5" />
        },
        {
          name: "Express.js",
          icon: <SiExpress className="w-5 h-5" />
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-5 h-5" />
        }
      ],
    },
    {
      name: "Databases",
      id: 4,
      items: [
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-5 h-5" />
        }
      ],
    },
    {
      name: "Services",
      id: 5,
      items: [
        {
          name: "Replit",
          icon: <SiReplit className="w-5 h-5" />
        },
        {
          name: "Vercel",
          icon: <SiVercel className="w-5 h-5" />
        },
        {
          name: "Heroku",
          icon: <SiHeroku className="w-5 h-5" />
        },
        {
          name: "Netlify",
          icon: <BiLogoNetlify className="w-5 h-5" />
        }
      ],
    },
    {
      name: "Others",
      id: 6,
      items: [
        {
          name: "Git",
          icon: <FaGitAlt className="w-5 h-5" />
        },
        {
          name: "GitHub",
          icon: <FaGithub className="w-5 h-5" />
        },
        {
          name: "VSCode",
          icon: <VscVscode className="w-5 h-5" />
        },
        {
          name: "Figma",
          icon: <FaFigma className="w-5 h-5" />
        }
      ],
    },
];