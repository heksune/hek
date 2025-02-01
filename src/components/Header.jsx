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
                <p>I'm a software engineer, developer, and software manager with a passion for building software and leading teams.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id adipisci itaque accusamus excepturi aspernatur illo, omnis porro praesentium cumque autem corrupti dolor quasi maxime sed mollitia! Ex deleniti officia hic, architecto nemo eaque nihil doloribus molestias obcaecati animi odio cumque iure harum mollitia minima corporis natus excepturi, repellat eos reiciendis!</p>
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