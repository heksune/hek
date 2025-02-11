'use client';

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";

export default function Spotlight() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [totalStars, setTotalStars] = useState(0);

    useEffect(() => {
        const getDiscordData = async () => {
            try {
                const res = await fetch(
                    `https://api.lanyard.rest/v1/users/837033284705189919`
                );

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(error.message);
            }
        };

        const getGitHubStars = async () => {
            try {
                const res = await fetch("https://api.github.com/users/heksune/repos");
                if (!res.ok) {
                    throw new Error("GitHub API request failed");
                }

                const repos = await res.json();
                const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                setTotalStars(stars);
            } catch (error) {
                console.error("GitHub API error:", error);
            }
        };

        getDiscordData();
        getGitHubStars();
    }, []);

    if (error) return;
    if (!data) return;

    const codeActivity = data.data.activities.find((activity) => activity.name.includes("Code"));

    let largeImageUrl = "";
    if (codeActivity && codeActivity.assets && codeActivity.assets.large_image) {
        largeImageUrl = codeActivity.assets.large_image
            .replace(/^mp:external\/[^/]+\//, "")
            .replace(/^https\//, "https://");
    }

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
                    className="absolute top-3/4 left-0 h-[0.58em] w-1/5 fill-current"
                    preserveAspectRatio="none"
                >
                    <path
                        fill="#a1a1aa"
                        d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
                    />
                </motion.svg>
                <span className="relative font-lexend">Spotlight</span>
            </motion.h1>

            <motion.div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-10">
                {data ? (
                    <SpotlightCard className="w-full h-fit md:col-span-3 bg-zinc-950 border-2 border-zinc-800 rounded-xl hover:bg-zinc-900 bg-gradient-to-tl backdrop-blur-xl from-transparent via-transparent to-zinc-800/80 hover:border-700 duration-500 p-3 flex items-center justify-start cursor-pointer">

                        {largeImageUrl ? (
                            <Image
                                src={largeImageUrl}
                                alt="Activity Image"
                                width={50}
                                height={50}
                                className="rounded-md"
                            />
                        ) : <a></a>}
                        <div className="font-sans font-medium ml-3">
                            <p className="text-white">{codeActivity ? codeActivity.name : "No Code Activity"}</p>
                            <p className="text-xs text-zinc-300">{codeActivity ? codeActivity.details : ""}</p>
                            <p className="text-xs text-zinc-500 line-clamp-4">{codeActivity ? codeActivity.state : "There is no activity currently visible."}</p>
                        </div>
                    </SpotlightCard>
                ) : (<a></a>)}

                <Link href="https://github.com/heksune" target="_blank" rel="noopener noreferrer" className="w-full md:col-span-2">
                    <SpotlightCard className="w-full bg-zinc-950 border-2 border-zinc-800 rounded-xl hover:bg-zinc-900 bg-gradient-to-tr backdrop-blur-xl from-transparent via-transparent to-zinc-800/80 hover:border-700 duration-500 cursor-pointer p-4">
                        <div className="flex items-start justify-between">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="tabler-icon tabler-icon-brand-github-filled size-10">
                                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"></path>
                            </svg>
                            <p className="font-mono text-xs font-extralight">{totalStars} stars</p>
                        </div>
                        <div className="font-sans mt-4">
                            <p className="text-md font-semibold">Open Source</p>
                            <p className="text-xs text-zinc-400">Check out my open source projects on GitHub.</p>
                        </div>
                    </SpotlightCard>
                </Link>

            </motion.div>
        </motion.div>
    );
}
