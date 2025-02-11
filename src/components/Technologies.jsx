'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./SpotlightCard";
import { tabs } from "@/constants/tabs"; // tabs verisini dışarıdan çek

export default function Technologies() {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full mt-20"
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="font-lexend text-2xl sm:text-3xl font-medium relative whitespace-nowrap"
            >
                <motion.svg
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-3/4 left-0 h-[0.58em] w-1/4 fill-current"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#a1a1aa"
                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                    />
                </motion.svg>
                <span className="relative font-lexend">Technologies</span>
            </motion.h1>

            <motion.div className="flex border-b border-zinc-600 mt-10 overflow-x-auto whitespace-nowrap scrollbar-custom">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`px-4 py-2 text-sm font-medium capitalize transition-colors duration-300 ${activeTab === tab.name
                            ? "border-b-2 border-white text-white"
                            : "text-zinc-400 hover:text-white"
                            }`}
                        onClick={() => setActiveTab(tab.name)}
                    >
                        {tab.name}
                    </button>
                ))}
            </motion.div>


            <motion.div className="p-4">
                <ul className="text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {tabs.find((tab) => tab.name === activeTab)?.items.map((item) => (
                        <li key={item.name} className="">
                            <SpotlightCard className="bg-zinc-950 text-sm font-sans border-2 border-zinc-800 hover:bg-zinc-900 bg-gradient-to-tl backdrop-blur-xl from-transparent via-transparent to-zinc-800/80 hover:border-700 duration-500 rounded-md px-4 py-2 flex items-center justify-start cursor-pointer">
                                <item.icon className="text-xl" />
                                <span className="ml-3">{item.name}</span>
                            </SpotlightCard>
                        </li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
}
