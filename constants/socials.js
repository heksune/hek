import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaDiscord, FaGithub, FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const socials = [
    {
        id: 1,
        name: "GitHub",
        description: "heksune",
        url: "https://github.com/heksune",
        icon: <FaGithub className="w-7 h-7 text-white/50" />,
    },
    {
        id: 2,
        name: "Discord",
        description: "heksune",
        url: "https://discord.com/users/837033284705189919",
        icon: <FaDiscord className="w-7 h-7 text-white/50" />,
    },
    { 
        id: 3,
        name: "Instagram",
        description: "heksune",
        url: "https://instagram.com/heksune",
        icon: <FaInstagram className="w-7 h-7 text-white/50" />,
    },
    { 
        id: 4,
        name: "Twitter",
        description: "heksune",
        url: "https://twitter.com/heksune",
        icon: <BsTwitterX className="w-7 h-7 text-white/50" />,
    },
    {
        id: 5,
        name: "LinkedIn",
        description: "heksune",
        url: "https://linkedin.com/in/heksune",
        icon: <FaLinkedin className="w-7 h-7 text-white/50" />,
    },
    {
        id: 6,
        name: "Email",
        description: "heksune@kodikas.org",
        url: "mailto:heksune@kodikas.org",
        icon: <MdOutlineAlternateEmail className="w-7 h-7 text-white/50" />,
    }
];
