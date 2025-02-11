import { SiHackerone, SiGithub } from "react-icons/si";
import Link from "next/link";

export default function Header() {

    const socials = [
        {
            name: "Hackerone",
            icon: <SiHackerone className="w-5 h-5" />,
            link: "https://hackerone.com/heksune"
        },
        {
            name: "Github",
            icon: <SiGithub className="w-5 h-5" />,
            link: "https://github.com/heksune",
        }
    ];

    return (
        <div className="mt-40">
            <div className="w-16 h-16 rounded-full bg-zinc-400 flex items-center justify-center text-2xl font-bold">A</div>
            <div className="font-lexend mt-5">
                <h className="tracking-tight text-2xl sm:text-3xl font-medium">Heksune</h>
                <p className="font-extralight text-lg sm:text-xl text-balance text-zinc-400">Full-Stack Developer</p>
            </div>
            <div className="font-sans mt-8 text-lg sm:text-base text-zinc-400 space-y-5">
                <p>I’m a 18-year-old high school student and freelancer from Turkey, passionate about software development and always eager to learn. Currently focusing to learn more about JavaScript world.</p>
                <p>I dive into various projects, from building efficient Discord bots to exploring web development with Next.js and React. I’m meticulous about my workflow, always looking for ways to improve my productivity. I’m also a fan of open-source projects and always looking for ways to contribute.</p>
            </div>
            <div className="grid grid-cols-3 gap-12 w-fit mt-8">
                {socials.map((social, index) => (
                    <Link key={index} href={social.link}>
                        <div className="flex items-center space-x-2 text-zinc-400 font-sans font-medium text-sm cursor-pointer hover:text-white duration-150">
                            {social.icon}
                            <p>{social.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};