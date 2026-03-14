import { useMemo, useState } from "react";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("All Skills");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    "All Skills",
    "ProgrammingLanguages",
    "Frontend",
    "Databases",
    "DataScience",
    "Tools",
  ];

  const skills = [
    {
      name: "C",
      level: 70,
      category: "ProgrammingLanguages",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      level: 75,
      category: "ProgrammingLanguages",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      level: 85,
      category: "ProgrammingLanguages",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      level: 75,
      category: "ProgrammingLanguages",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "Excel",
      level: 85,
      category: "Tools",
      logo: "https://img.icons8.com/color/96/microsoft-excel-2019--v1.png",
    },
    {
      name: "SQL",
      level: 80,
      category: "Databases",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Power BI",
      level: 80,
      category: "Tools",
      logo: "https://img.icons8.com/color/96/power-bi.png",
    },
    {
      name: "DBMS",
      level: 80,
      category: "Databases",
      logo: "https://img.icons8.com/color/96/database.png",
    },
    {
      name: "AI",
      level: 75,
      category: "DataScience",
      logo: "https://img.icons8.com/color/96/artificial-intelligence.png",
    },
    {
      name: "Machine Learning",
      level: 75,
      category: "DataScience",
      logo: "https://img.icons8.com/color/96/machine-learning.png",
    },
    {
      name: "HTML",
      level: 95,
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      level: 85,
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "MySQL",
      level: 85,
      category: "Databases",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Git",
      level: 90,
      category: "Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      level: 90,
      category: "Tools",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      invertLogo: true,
    },
  ];

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All Skills") return skills;
    return skills.filter((skill) => skill.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-10 md:px-6 md:py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Technical Arsenal
          </span>
        </h1>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
          A showcase of technologies I&apos;ve mastered on my journey as a developer.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 md:px-6 md:text-base ${
                isActive
                  ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-[0_10px_30px_rgba(99,102,241,0.26)]"
                  : "bg-white/10 text-gray-200 hover:bg-white/15 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredSkills.map((skill) => {
          const isHovered = hoveredSkill === skill.name;

          return (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:border-violet-400/70 hover:bg-[#16274d] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.26)]"
            >
              <div className="flex items-center gap-4 p-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`h-9 w-9 object-contain ${skill.invertLogo ? "invert" : ""}`}
                  />
                </div>

                <div className="w-full">
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-xl font-semibold text-white md:text-2xl">
                      {skill.name}
                    </h2>
                    <span className="text-lg font-medium text-violet-300">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="mt-4 h-2.5 w-full rounded-full bg-slate-600/60">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-700 ease-out"
                      style={{ width: isHovered ? `${skill.level}%` : "0%" }}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 bg-black/10 px-5 py-3 text-right text-sm text-gray-400 md:text-base">
                {skill.category}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg transition-all duration-300 hover:border-violet-400/40 hover:bg-[#16274d]">
        <h2 className="text-3xl font-semibold text-blue-300 md:text-4xl">
          Learning Journey
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-300 md:text-xl">
          My technical skill set is constantly evolving. Currently exploring:
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {["Power BI", "Excel", "Python", "Java", "SQL"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-indigo-400/20 bg-indigo-600/30 px-4 py-2 text-sm font-medium text-white md:px-5 md:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;