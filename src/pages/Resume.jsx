import { useState } from "react";

function Resume() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "training", label: "Training" },
    { id: "certificates", label: "Certificates" },
  ];

  const education = [
    {
      title: "Lovely Professional University",
      subtitle: "Phagwara, Punjab",
      detail1: "Bachelor of Technology - Computer Science and Engineering",
      detail2: "CGPA: 7.2",
      date: "Since Aug 2023",
    },
    {
      title: "Chaurasia Raj Kishor College",
      subtitle: "Hajipur, Bihar",
      detail1: "Intermediate",
      detail2: "Percentage: 71%",
      date: "Apr 2022 – Mar 2023",
    },
    {
      title: "St. Paul’s High School",
      subtitle: "Hajipur, Bihar",
      detail1: "Matriculation",
      detail2: "Percentage: 91%",
      date: "Apr 2020 – Mar 2021",
    },
  ];

  const skills = [
    {
      heading: "Languages",
      items: ["Java (Primary)", "Python", "SQL"],
    },
    {
      heading: "Tools & Technologies",
      items: ["Power BI (DAX)", "Excel", "Tableau"],
    },
    {
      heading: "Libraries & Concepts",
      items: [
        "Pandas",
        "NumPy",
        "Machine Learning",
        "Data Cleaning",
        "EDA",
        "DBMS",
        "OOPs",
      ],
    },
    {
      heading: "Soft Skills",
      items: [
        "Problem-Solving",
        "Logical Thinking",
        "Team Collaboration",
        "Adaptability",
      ],
    },
  ];

  const projects = [
    {
      title: "End-to-End Customer Intelligence",
      date: "Feb 2026",
      tech: "Python, Machine Learning",
      bullets: [
        "Performed end-to-end data analysis with EDA and statistical hypothesis testing to identify key churn drivers and customer behavior patterns.",
        "Built and evaluated multiple machine learning models using cross-validation and optimized performance with ROC-AUC, Precision, and Recall metrics.",
        "Applied customer segmentation, association rule mining, and PCA to estimate revenue risk and generate actionable retention strategies.",
      ],
      link: "https://github.com/shivamkumar1578",
    },
    {
      title: "HR Attrition Analytics Project",
      date: "Jan 2026",
      tech: "Excel, Power BI",
      bullets: [
        "Analyzed employee data to identify key attrition drivers by department, salary, experience, and job satisfaction.",
        "Created interactive Power BI dashboards with KPIs, slicers, drill-down views, and DAX measures.",
        "Delivered actionable HR insights to support retention and workforce planning decisions.",
      ],
      link: "https://github.com/shivamkumar1578/workforce-analytics-dashboard",
    },
    {
      title: "Smart Knowledge Search Engine",
      date: "Nov 2025",
      tech: "Java, DSA",
      bullets: [
        "Developed a console-based intelligent search engine using Core Java and Data Structures for efficient note storage and retrieval.",
        "Implemented Trie-based fast search and autosuggestions for better performance.",
        "Integrated file handling and a lightweight AI/NLP-based keyword extraction module.",
      ],
      link: "https://github.com/shivamkumar1578",
    },
  ];

  const training = [
    {
      title: "Fundamentals of Data Structures and Algorithms",
      org: "Cipher Schools",
      date: "Jun 2025",
      bullets: [
        "Completed structured training covering arrays, sorting, recursion, linked lists, stacks, queues, trees, graphs, dynamic programming, and hashing.",
        "Strengthened problem-solving skills through hands-on implementation of core algorithms.",
        "Built a Library Management System project using linked lists and binary search trees.",
      ],
    },
  ];

  const certificates = [
    {
      title: "Cloud Computing",
      org: "NPTEL",
      date: "Apr 2025",
      link: "/certificates/cloud-computing.png",
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      org: "Coursera",
      date: "Sept 2024",
      link: "/certificates/bits-bytes-networking.png",
    },
    {
      title: "Java + DSA",
      org: "Apna College",
      date: "Aug 2023",
      link: "/certificates/java-dsa.png",
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      org: "Coursera",
      date: "Sept 2025",
      link: "/certificates/hardware-os.png",
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      org: "Coursera",
      date: "Oct 2025",
      link: "/certificates/p2p-lan.png",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            My Resume
          </span>
        </h1>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <span className="rounded-full bg-white/10 px-4 py-2 text-base text-gray-200">
          ✉️ shivamkumarshaurya@gmail.com
        </span>
        <span className="rounded-full bg-white/10 px-4 py-2 text-base text-gray-200">
          📱 +91 8409426157
        </span>
        <a
          href="https://linkedin.com/in/shivamkumar003/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white/10 px-4 py-2 text-base text-gray-200 hover:bg-white/15"
        >
          🔗 LinkedIn
        </a>
        <a
          href="https://github.com/shivamkumar1578"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-white/10 px-4 py-2 text-base text-gray-200 hover:bg-white/15"
        >
          💻 GitHub
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`rounded-xl px-5 py-3 text-lg font-medium transition ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-blue-500 to-violet-500 text-white"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-10 space-y-7">
        {activeTab === "education" &&
          education.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-blue-300">{item.title}</h2>
                  <p className="mt-1 text-gray-400">{item.subtitle}</p>
                  <p className="mt-4 text-xl text-white">{item.detail1}</p>
                  <p className="mt-2 text-xl text-gray-300">{item.detail2}</p>
                </div>

                <div className="rounded-full bg-violet-600/20 px-5 py-2 text-base font-medium text-violet-300">
                  {item.date}
                </div>
              </div>
            </div>
          ))}

        {activeTab === "skills" &&
          skills.map((section) => (
            <div
              key={section.heading}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]"
            >
              <h2 className="text-2xl font-semibold text-blue-300">{section.heading}</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-indigo-600/30 px-4 py-2 text-base font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}

        {activeTab === "projects" &&
          projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-4xl">
                  <h2 className="text-2xl font-semibold text-blue-300">{project.title}</h2>
                  <p className="mt-2 text-lg text-gray-400">{project.tech}</p>

                  <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-gray-300">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <p className="mt-5 text-lg text-gray-300">
                    <span className="font-semibold text-white">GitHub:</span>{" "}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-violet-300 hover:underline"
                    >
                      Open Repository ↗
                    </a>
                  </p>
                </div>

                <div className="rounded-full bg-violet-600/20 px-5 py-2 text-base font-medium text-violet-300">
                  {project.date}
                </div>
              </div>
            </div>
          ))}

        {activeTab === "training" &&
          training.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="max-w-4xl">
                  <p className="text-sm font-semibold uppercase tracking-wider text-violet-300">
                    Training
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold text-blue-300">{item.title}</h2>
                  <p className="mt-1 text-xl text-gray-400">{item.org}</p>

                  <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-8 text-gray-300">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-full bg-violet-600/20 px-5 py-2 text-base font-medium text-violet-300">
                  {item.date}
                </div>
              </div>
            </div>
          ))}

        {activeTab === "certificates" && (
          <div className="space-y-5">
            {certificates.map((cert) => (
              <div
                key={cert.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-violet-400/50 hover:bg-white/[0.08]"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-blue-300">{cert.title}</h2>
                    <p className="mt-1 text-lg text-gray-400">{cert.org}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-5 py-2.5 text-base font-semibold text-white transition-all duration-300 hover:scale-105 hover:opacity-90"
                    >
                      View Certificate
                    </a>

                    <div className="rounded-full bg-violet-600/20 px-5 py-2 text-base font-medium text-violet-300">
                      {cert.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="pt-4">
              <h2 className="text-3xl font-semibold text-blue-300">Achievement</h2>
              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-violet-400/50 hover:bg-white/[0.08]">
                <h3 className="text-2xl font-semibold text-blue-300">
                  Solved 100+ DSA Problems on LeetCode
                </h3>
                <p className="mt-3 text-lg leading-8 text-gray-300">
                  Earned 3 achievement badges while solving 100+ DSA problems, validating strong
                  problem-solving ability and consistent coding practice.
                </p>
              </div>
            </div> */}
          </div>
        )}
      </div>

      <div className="mt-12 text-center">
        <a
          href="/resume.pdf"
          download
          className="inline-block rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:opacity-90"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;