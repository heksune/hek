"use client";
import { useEffect, useState } from "react";

import { FaBookBookmark } from "react-icons/fa6";
import { MdElectricalServices } from "react-icons/md";

export default function Repos() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/heksune/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data));
  }, []);

  console.log(repos);

  return (
    <section className="">
      <div className="flex items-center gap-4 justify-between">
        <h3 className="text-black/70 dark:text-white/50 text-sm font-medium uppercase">
          Github Repositories
        </h3>
        <button className="text-black/50 text-sm hover:underline dark:text-white/30">
          Show More
        </button>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {repos.map((repo, index) => (
          <a
            key={repo.id}
            href={repo.html_url}
            className="rounded-lg p-4 cursor-pointer border-neutral-800 border-[1px] bg-neutral-850 duration-150 transition-all hover:bg-neutral-800/60"
          >
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2">
                <FaBookBookmark className="text-white/80 w-5 h-5" />
                <h2 className="font-medium text-base text-white/80 truncate">
                  {repo.name}
                </h2>
              </div>
              <p className="text-white/60 text-xs line-clamp-2">
                {repo.description
                  ? `${repo.description}`
                  : `No description provided.`}
              </p>
              <div className="flex items-center justify-between mt-4 text-white/30 font-medium">
                <p>{repo.language}</p>
                <div className="flex space-x-2">
                  <p>{repo.stargazers_count}</p>
                  <p>{repo.forks_count}</p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
