"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navElements = [
        { name: "Home", link: "/" },
        { name: "Projects", link: "/projects" },
        { name: "Blog", link: "/blog" },
        { name: "Contact", link: "/contact" }
    ];

    return (
        <nav
            className={`fixed w-full z-50 flex items-center justify-center transition-all ${isScrolled ? "bg-gradient-to-b from-black to-transparent" : "bg-transparent"} duration-500`}
        >
            <ul
                className={`relative flex space-x-4 my-4 w-fit py-2 px-5 rounded-full border border-zinc-700 shadow-md backdrop-blur-sm transition-all duration-500 ${isScrolled ? "bg-zinc-800/50 translate-y-3" : "bg-zinc-900/20"}`}
            >
                {navElements.map((navElement, index) => (
                    <li
                        key={index}
                        className={`relative cursor-pointer text-sm font-sans font-medium duration-150 ${pathname === navElement.link ? "text-white" : "text-zinc-400 hover:text-white"}`}
                    >
                        <a href={navElement.link} className="cursor-pointer duration-150 relative px-2 py-2">
                            {navElement.name}
                            {pathname === navElement.link && (
                                <span className="absolute inset-x-1 bottom-[-3px] h-[3px] bg-gradient-to-r from-zinc-400/0 via-zinc-400/30 to-transparent"></span>
                            )}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
