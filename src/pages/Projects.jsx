function Projects() {
  const projects = [
    {
      title: "Employee Attrition Dashboard",
      description:
        "Interactive Power BI dashboard to analyze attrition by department, salary, and years at company.",
      tags: ["Power BI", "Excel", "Dashboard"],
      image: "/projects/attrition-dashboard.png",
      code: "https://github.com/shivamkumar1578/workforce-analytics-dashboard",
      demo: "#",
      featured: true,
    },
    {
      title: "Customer Churn Prediction",
      description:
        "End-to-end machine learning workflow with cleaning, analysis, model building, and insights visualization.",
      tags: ["Python", "ML", "Pandas"],
      image: "/projects/churn-project.png",
      code: "https://github.com/shivamkumar1578/end-to-end-churn-analysis",
      demo: "#",
      featured: false,
    },
    {
      title: "Smart Knowledge Search Engine",
      description:
        "Console-based Java project using DSA concepts like Trie and HashMap with keyword-focused searching.",
      tags: ["Java", "DSA", "Search"],
      image: "/projects/search-engine.png",
      code: "https://github.com/shivamkumar1578",
      demo: "#",
      featured: false,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h1>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          A showcase of my work across analytics, machine learning, and Java
          problem-solving projects.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/70 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.26),0_18px_40px_rgba(0,0,0,0.32)]"
          >
            <div className="relative h-64 overflow-hidden bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {project.featured && (
                <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-4 py-1 text-sm font-medium text-white">
                  Featured
                </span>
              )}

              <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900/80 px-3 py-1 text-sm text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6">
              <h2 className="text-3xl font-semibold text-blue-300">
                {project.title}
              </h2>

              <p className="mt-4 text-lg leading-8 text-gray-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-indigo-400/20 bg-indigo-600/30 px-4 py-2 text-sm font-medium text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={project.demo}
                  className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 text-base font-semibold text-white hover:opacity-90"
                >
                  Live Demo
                </a>

                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-indigo-400 px-6 py-3 text-base font-semibold text-white hover:bg-white/10"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-400">
        Showing {projects.length} of {projects.length} projects
      </p>

      <div className="mt-14 rounded-3xl bg-gradient-to-r from-indigo-900 to-violet-900 p-10 text-center">
        <h2 className="text-4xl font-bold">Interested in working together?</h2>
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-gray-200">
          I’m always open to discussing projects, collaboration opportunities,
          and ideas that create real impact.
        </p>

        <a
          href="/contact"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-4 text-lg font-semibold text-indigo-900"
        >
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}

export default Projects;