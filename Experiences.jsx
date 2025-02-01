"use client";

import { motion } from "framer-motion";

export default function Experiences() {
  const experiences = [
    {
      id: 3,
      title: "Kodikas",
      position: "Co-Founder",
      date: "2024 - Present",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, incidunt!",
    },
    {
      id: 2,
      title: "Another Company",
      position: "Intern",
      date: "2021 - 2022",
      description: "Worked on a project that improved the company's overall performance by 30%.",
    },
    {
      id: 1,
      title: "First Company",
      position: "Intern",
      date: "2020 - 2021",
      description: "Worked on a project that improved the company's overall performance by 30%.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="col-span-2"
    >
      {/* Başlık */}
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
          className="absolute top-3/4 left-0 h-[0.58em] w-fit fill-current"
          preserveAspectRatio="none"
        >
          <path
            fill="#a1a1aa"
            d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"
          />
        </motion.svg>
        <span className="relative font-lexend">Experiences</span>
      </motion.h1>

      {/* Timeline Container */}
      <div className="relative mt-10">
        {/* Timeline Çizgisi */}
        <div className="absolute left-[11px] top-0 w-[2px] h-full bg-zinc-600"></div>

        {/* Timeline Öğeleri */}
        <div className="space-y-16 ml-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative flex items-start space-x-2"
            >
              {/* Nokta */}
              <div className="w-4 h-4 rounded-full bg-zinc-400 border-4 border-zinc-800 absolute -left-9 top-2 flex-shrink-0"></div>

              {/* İçerik */}
              <div className="">
                <div className="flex items-center justify-between">
                  <h2 className="font-semibold text-lg">{exp.title}</h2>
                  <p className={`text-xs font-mono px-2 py-1 rounded-xl ${index === 0 ? " bg-zinc-400 text-white" : "text-zinc-400"}`}>
                    {exp.date}
                  </p>                </div>
                <p className="text-zinc-400 font-medium text-sm">{exp.position}</p>
                <p className="text-zinc-500 font-medium text-xs mt-1">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
