"use client"; // Ensure this is included for client-side components

import { experiences } from "@/constants/experiences";
import { socials } from "@/constants/socials";

console.log(socials);

export default function Cards2() {
  return (
    <section className="grid gap-x-8 gap-y-24 grid-cols-1 md:grid-cols-2">
      <div>
        <div className="flex items-center gap-4 justify-between">
          <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">
            Experiences
          </h3>
          <button className="text-black/50 text-sm hover:underline dark:text-white/30">
            Show More
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 gap-3">
          {experiences.map((experience, index) => (
            <a
              key={index}
              href={experience.link}
              className="rounded-lg p-4 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850 duration-150 transition-all hover:bg-neutral-850/60"
            >
              <div className="overflow-x-hidden leading-relaxed space-y-1">
                <div className="flex space-x-2 items-center justify-between">
                  <h3 className="font-medium text-base text-black dark:text-white/80 truncate">
                    {experience.name}
                  </h3>
                  <span className="text-black/50 dark:text-white/30 text-sm">
                    {experience.duration}
                  </span>
                </div>
                <div className="truncate text-sm text-black/50 dark:text-white/50">
                  {experience.role}
                </div>
                <div className="truncate text-sm text-black/50 dark:text-white/30">
                  {experience.description}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">
          Socials
        </h3>
        <div className="mt-4 grid sm:grid-cols-2 gap-3">
          {socials.map((social, index) => (
            <a
              href={social.url}
              className="flex items-center space-x-4 rounded-lg px-3 py-1.5 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850"
              key={index}
            >
              <div className="w-7 h-7">{social.icon}</div>
              <div>
                <h3 className="font-medium text-black dark:text-white">
                  {social.name}
                </h3>
                <h2 className="font-medium text-xs text-white/50">
                  {social.description}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
