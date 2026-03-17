import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const skills = [
    "Python",
    "SQL",
    "Excel",
    "Power BI",
    "Java",
  ];

  const quickFacts = [
    {
      icon: "📍",
      label: "Location",
      value: "Bihar, India",
    },
    {
      icon: "🎓",
      label: "Education",
      value: "B.Tech CSE Student",
    },
    {
      icon: "💼",
      label: "Focus",
      value: "Data Analytics & Java Development",
    },
  ];

  const hobbies = [
    { icon: "🎮", text: "Playing Games" },
    { icon: "📚", text: "Reading Books" },
    { icon: "🎵", text: "Music" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-14">
      {/* HERO */}
      <div className="flex flex-col items-center text-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-2xl" />
          <img
            src="/profile.png"
            alt="Shivam Kumar"
            className="relative h-44 w-44 rounded-full border-4 border-violet-500 object-cover shadow-[0_0_40px_rgba(99,102,241,0.28)] md:h-48 md:w-48"
          />
        </div>

        <h1 className="mt-10 text-5xl font-bold tracking-tight md:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Shivam Kumar
          </span>
        </h1>

        <h2 className="mt-4 text-2xl font-medium text-gray-300 md:text-4xl">
          <TypeAnimation
            sequence={[
              "Aspiring Data Analyst",
              2000,
              "Java Programmer",
              2000,
            ]}
            wrapper="span"
            speed={20}
            repeat={Infinity}
            cursor={true}
          />
        </h2>

        <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-gray-300 md:text-xl">
          Aspiring Data Analyst with a strong foundation in Python, SQL, Excel, and data visualization, focused 
          on turning raw data into clear, actionable insights.
          Also skilled in Java, with a problem-solving mindset that helps me approach analytical challenges in a 
          structured and efficient way.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-indigo-400/20 bg-indigo-600/30 px-5 py-2.5 text-base font-medium text-white transition-all duration-300 hover:bg-indigo-500/40"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/projects"
            className="rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-10 py-4 text-2xl font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90"
          >
            View My Work
          </Link>

          <Link
            to="/contact"
            className="rounded-2xl border border-violet-400 px-10 py-4 text-2xl font-semibold text-white transition-all duration-300 hover:bg-white/10"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* ABOUT */}
      <div className="mt-28">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-6xl">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]">
              <h3 className="text-3xl font-semibold text-white">Quick Facts</h3>

              <div className="mt-8 space-y-6">
                {quickFacts.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-600/30 text-2xl">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-lg text-gray-400">{item.label}</p>
                      <p className="mt-1 text-2xl font-medium text-white">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]">
              <h3 className="text-3xl font-semibold text-white">
                When I&apos;m Not Coding
              </h3>

              <div className="mt-8 space-y-4">
                {hobbies.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 px-5 py-5 transition-all duration-300 hover:bg-white/[0.14]"
                  >
                    <div className="text-3xl">{item.icon}</div>
                    <p className="text-2xl text-white">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]">
              <h3 className="text-4xl font-semibold text-blue-300">
                My Journey
              </h3>

              <div className="mt-7 space-y-6 text-xl leading-10 text-gray-300">
                <p>
                  Hello! I&apos;m{" "}
                  <span className="font-semibold text-violet-300">
                    Shivam Kumar
                  </span>
                  , a passionate learner focused on turning technical concepts
                  into practical, useful solutions.
                </p>

                <p>
                  My journey in tech has grown through Java, DSA, Python, SQL,
                  analytics, and project-building. I enjoy creating clean,
                  structured work that is both technically strong and visually
                  professional.
                </p>

                <p>
                  What drives me is the balance between problem-solving and
                  presentation—building projects that not only work correctly,
                  but also communicate ideas clearly and confidently.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]">
              <h3 className="text-4xl font-semibold text-blue-300">
                My Approach
              </h3>

              <div className="mt-7 space-y-6 text-xl leading-10 text-gray-300">
                <p>
                  I believe in building technology that is not just functional
                  but meaningful. Every project I create is aimed at solving a
                  real problem while staying clean, readable, and professional.
                </p>

                <p>
                  I value strong fundamentals, consistency, and continuous
                  learning. Whether it is coding, analytics, dashboard design,
                  or problem solving, I focus on clarity, structure, and steady
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SCROLL / PROJECT BUTTON */}
        <div className="mt-16 flex flex-col items-center">
          <Link
            to="/projects"
            className="group flex flex-col items-center text-center"
          >
            <span className="text-xl text-white transition-colors duration-300 group-hover:text-violet-300">
              See My Projects
            </span>

            <div className="mt-4 flex h-16 w-10 items-start justify-center rounded-full border-2 border-white/40 p-2 transition-all duration-300 group-hover:border-violet-400 group-hover:shadow-[0_0_18px_rgba(139,92,246,0.35)]">
              <span className="h-4 w-1.5 rounded-full bg-white/80 transition-all duration-300 group-hover:bg-violet-400 group-hover:translate-y-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;