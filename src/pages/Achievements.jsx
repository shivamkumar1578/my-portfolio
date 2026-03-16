function Achievements() {
  const achievements = [
    {
      icon: "🔥",
      title: "80+ Day Streak on LeetCode",
      date: "February 2026",
      type: "Coding Achievement",
      description:
        "Maintained a 80+ day daily problem-solving streak on LeetCode, showcasing consistency and discipline.",
    },
    {
      icon: "💡",
      title: "100+ LeetCode Questions Solved",
      date: "March 2026",
      type: "Coding Achievement",
      description:
        "Solved 100+ coding questions focused on arrays, trees, recursion, and core problem-solving patterns.",
    },
    // {
    //   icon: "🏆",
    //   title: "Dean’s List Recognition",
    //   date: "January 2026",
    //   type: "Academic Achievement",
    //   description:
    //     "Recognized for strong academic performance and consistent progress during my university journey.",
    // },
    // {
    //   icon: "🌟",
    //   title: "Top Performer in Interview Preparation",
    //   date: "July 2024",
    //   type: "Learning Achievement",
    //   description:
    //     "Completed structured interview preparation with strong performance in DSA and core CS topics.",
    // },
    {
      icon: "🥇",
      title: "Badge of Appreciation – TECH-A-ZON Session",
      date: "October 2024",
      type: "Event Achievement",
      description:
        "Received a Badge of Appreciation for participation in the TECH-A-ZON session on Git and GitHub, organized by Changemakers of Amazon under the Centre for Professional Enhancement.",
      viewLink: "/achievements/amazon-badge.jpg",
    },
    {
      icon: "💻",
      title: "Code-A-Hunt 24-Hour Hackathon Participation",
      date: "March 2024",
      type: "Hackathon Achievement",
      description:
        "Participated in the Code-A-Hunt 24-hour hackathon at Lovely Professional University, where I demonstrated coding, problem-solving, and collaborative thinking in a competitive environment.",
      viewLink: "/achievements/code-a-hunt.png",
    },
    {
      icon: "🚀",
      title: "Infernoverse 24-Hour Hackathon Participation",
      date: "November 2025",
      type: "Hackathon Achievement",
      description:
        "Earned recognition for active participation in the INFERNOVERSE 24-hour hackathon, reflecting enthusiasm, commitment, and teamwork throughout an intensive innovation-driven event.",
      viewLink: "/achievements/infernoverse-certificate.png",
    },
    {
      icon: "🤖",
      title: "Infernoverse 2025 – GenAI Hackathon Participation",
      date: "November 2025",
      type: "Hackathon Achievement",
      description:
        "Received a certificate for participating in INFERNOVERSE 2025, powered in collaboration with HiDevs.xyz, with emphasis on innovation, creativity, and Generative AI learning.",
      viewLink: "/achievements/hidevs-certificate.png",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Achievements
          </span>
        </h1>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
      </div>

      <div className="mt-14 space-y-8">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/80 hover:bg-[#16274d] hover:shadow-[0_0_0_1px_rgba(139,92,246,0.35),0_12px_35px_rgba(0,0,0,0.35)]"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-blue-300 transition-colors duration-300 group-hover:text-violet-200 md:text-3xl">
                    {item.title}
                  </h2>

                  <p className="mt-3 max-w-3xl text-lg leading-8 text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {item.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-indigo-600/20 px-4 py-2 text-sm font-medium text-indigo-300 transition-all duration-300 group-hover:bg-indigo-500/25 group-hover:text-indigo-100">
                      {item.type}
                    </span>

                    {item.viewLink && (
                      <a
                        href={item.viewLink}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-full border border-violet-400/30 bg-violet-600/20 px-4 py-2 text-sm font-medium text-violet-300 hover:bg-violet-600/30"
                      >
                        View
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="rounded-full bg-violet-600/20 px-5 py-2 text-sm font-medium text-violet-300 transition-all duration-300 group-hover:bg-violet-500/25 group-hover:text-violet-100">
                {item.date}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-lg font-medium text-gray-400">
          More achievements coming soon...
        </p>
      </div>
    </section>
  );
}

export default Achievements;