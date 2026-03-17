import {
  Code2,
  Database,
  Brain,
  Lightbulb,
  RefreshCw,
  Rocket,
  Users,
  Palette,
  BarChart3,
  BookOpen,
  FileSpreadsheet,
  Github,
  LineChart,
  Bot,
  BrushCleaning,
  Server,
  Coffee,
} from "lucide-react";

function Skills() {
  const skillSections = [
    {
      title: "Programming Languages",
      items: [
        { name: "Python", icon: <Code2 className="h-7 w-7 text-blue-400" /> },
        { name: "Java", icon: <Coffee className="h-7 w-7 text-blue-400" /> },
        { name: "SQL", icon: <Database className="h-7 w-7 text-blue-400" /> },
      ],
    },
    {
      title: "Libraries",
      items: [
        { name: "Pandas", icon: <BarChart3 className="h-7 w-7 text-blue-400" /> },
        { name: "NumPy", icon: <Code2 className="h-7 w-7 text-blue-400" /> },
        { name: "Scikit-learn", icon: <Brain className="h-7 w-7 text-blue-400" /> },
        { name: "Matplotlib", icon: <LineChart className="h-7 w-7 text-blue-400" /> },
        { name: "Seaborn", icon: <RefreshCw className="h-7 w-7 text-blue-400" /> },
      ],
    },
    {
      title: "Data Science Concepts",
      items: [
        { name: "Machine Learning", icon: <Bot className="h-7 w-7 text-blue-400" /> },
        { name: "Exploratory Data Analysis", icon: <LineChart className="h-7 w-7 text-blue-400" /> },
        { name: "Data Cleaning", icon: <BrushCleaning className="h-7 w-7 text-blue-400" /> },
        { name: "DBMS", icon: <Server className="h-7 w-7 text-blue-400" /> },
        // { name: "Object Oriented Programming", icon: <Code2 className="h-7 w-7 text-blue-400" /> },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Power BI", icon: <LineChart className="h-7 w-7 text-blue-400" /> },
        { name: "Tableau", icon: <BarChart3 className="h-7 w-7 text-blue-400" /> },
        { name: "Excel", icon: <FileSpreadsheet className="h-7 w-7 text-blue-400" /> },
        { name: "VS Code", icon: <BookOpen className="h-7 w-7 text-blue-400" /> },
        { name: "GitHub", icon: <Github className="h-7 w-7 text-blue-400" /> },
      ],
    },
    {
      title: "Soft Skills",
      items: [
        { name: "Problem Solving", icon: <Lightbulb className="h-7 w-7 text-blue-400" /> },
        { name: "Team Collaboration", icon: <Users className="h-7 w-7 text-blue-400" /> },
        { name: "Adaptability", icon: <RefreshCw className="h-7 w-7 text-blue-400" /> },
        { name: "Creativity", icon: <Palette className="h-7 w-7 text-blue-400" /> },
        { name: "Quick Learner", icon: <Rocket className="h-7 w-7 text-blue-400" /> },
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-5 py-6 md:px-6 md:py-8">
      {/* TOP HEADING */}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h1>

        <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

        <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-gray-300 md:text-lg">
          A showcase of technologies I&apos;ve built, practiced, and continue to
          strengthen on my journey in data science and development.
        </p>
      </div>

      {/* SKILL CARDS */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillSections.slice(0, 4).map((section) => (
          <div
            key={section.title}
            className="rounded-3xl border border-blue-400/20 bg-white/5 p-7 shadow-[0_0_40px_rgba(59,130,246,0.08)] transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]"
          >
            <h2 className="text-2xl font-semibold text-blue-400 md:text-3xl">
              {section.title}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-y-7 gap-x-8 sm:grid-cols-2">
              {section.items.map((item) => (
                <div key={item.name} className="flex items-center gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <p className="text-xl text-white md:text-2xl">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* SOFT SKILLS */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-blue-400/20 bg-white/5 p-7 shadow-[0_0_40px_rgba(59,130,246,0.08)] transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]">
          <h2 className="text-2xl font-semibold text-blue-400 md:text-3xl">
            {skillSections[4].title}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-y-7 gap-x-8 sm:grid-cols-2">
            {skillSections[4].items.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="shrink-0">{item.icon}</div>
                <p className="text-xl text-white md:text-2xl">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div />
      </div>

      {/* BOTTOM INFO */}
      <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]">
        <h2 className="text-3xl font-semibold text-blue-300 md:text-4xl">
          Learning Journey
        </h2>

        <p className="mt-5 text-lg leading-8 text-gray-300 md:text-xl">
          My learning journey is driven by curiosity, consistency, and continuous improvement. Currently strengthening my skills in:
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {["Python", "SQL", "Power BI", "Machine Learning", "Java"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-indigo-400/20 bg-indigo-600/30 px-5 py-2.5 text-base font-medium text-white"
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