function Certifications() {
  const certifications = [
    {
      title: "Cloud Computing",
      issuer: "NPTEL / IIT Kharagpur",
      date: "Jan–Apr 2025",
      image: "/certificates/cloud-computing.png",
      verifyLink: "#",
      skills: ["Cloud", "Infrastructure", "Deployment", "Services"],
      description:
        "Built a strong foundation in cloud computing concepts, service models, deployment strategies, and practical infrastructure thinking. This certification strengthened my understanding of scalable systems and modern cloud-based environments.",
      featured: true,
    },
    {
      title: "Alpha (DSA with Java)",
      issuer: "Apna College",
      date: "2024",
      image: "/certificates/java-dsa.png",
      verifyLink: "#",
      skills: ["Java", "DSA", "Problem Solving", "Algorithms"],
      description:
        "Developed strong fundamentals in data structures and algorithms using Java, with practice across arrays, recursion, trees, hashing, and interview-style problem solving. This course directly supported my coding and placement preparation journey.",
      featured: false,
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google / Coursera",
      date: "Sep 13, 2024",
      image: "/certificates/bits-bytes-networking.png",
      verifyLink: "https://coursera.org/verify/2HLBWO0O88LR",
      skills: ["Networking", "Protocols", "Internet", "Systems"],
      description:
        "Gained practical understanding of core networking concepts including protocols, packet flow, routing basics, and internet communication models. This course improved my system-level understanding of how modern digital infrastructure works.",
      featured: false,
    },
    {
      title: "Introduction to Hardware and Operating Systems",
      issuer: "IBM / Coursera",
      date: "Sep 13, 2024",
      image: "/certificates/hardware-os.png",
      verifyLink: "https://coursera.org/verify/VRSY2E7GDBHN",
      skills: ["Hardware", "Operating Systems", "System Basics"],
      description:
        "Learned key hardware components, system architecture, and the role of operating systems in resource management and process execution. This certification strengthened my computer science fundamentals from a system perspective.",
      featured: false,
    },
    {
      title: "Peer-to-Peer Protocols and Local Area Networks",
      issuer: "University of Colorado System / Coursera",
      date: "Oct 14, 2024",
      image: "/certificates/p2p-lan.png",
      verifyLink: "https://coursera.org/verify/J3FIP2UCHL12",
      skills: ["LAN", "Peer-to-Peer", "Protocols", "Networking"],
      description:
        "Explored peer-to-peer communication models, local area network concepts, and protocol-level networking fundamentals. This course helped me connect theoretical networking ideas with practical communication structures used in real systems.",
      featured: false,
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold md:text-7xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Certifications
          </span>
        </h1>

        <div className="mx-auto mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
          Professional credentials that validate my technical learning,
          hands-on practice, and continuous learning journey.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((cert) => (
          <div
            key={cert.title}
            className="group [perspective:1200px]"
          >
            <div className="relative h-[520px] w-full rounded-3xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              
              {/* Front Side */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl border border-white/10 bg-[#14254b] shadow-lg [backface-visibility:hidden]">
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover"
                  />

                  {cert.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-4 py-1 text-sm font-medium text-white">
                      Featured
                    </span>
                  )}

                  <span className="absolute bottom-4 right-4 rounded-full bg-slate-900/70 px-3 py-1 text-sm font-medium text-white">
                    {cert.date}
                  </span>
                </div>

                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-blue-300">
                    {cert.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-lg leading-8 text-gray-300">
                    {cert.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm text-gray-400">
                    <span>{cert.issuer}</span>
                    {/* <span>Hover to view details</span> */}
                  </div>
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 rounded-3xl border border-violet-500/40 bg-violet-950/30 p-6 shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <h2 className="text-2xl font-semibold text-blue-300">
                  {cert.title}
                </h2>

                <div className="mt-5 space-y-4 text-gray-200">
                  <p>
                    <span className="font-semibold">Issued by:</span> {cert.issuer}
                  </p>
                  <p>
                    <span className="font-semibold">Date:</span> {cert.date}
                  </p>
                  <div>
                    <span className="font-semibold">Skills:</span>
                    <div className="mt-3 flex flex-wrap gap-3">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-indigo-400/20 bg-indigo-600/30 px-4 py-2 text-sm font-medium text-white"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-base leading-7 text-gray-300">
                    {cert.description}
                  </p>
                </div>

                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 block rounded-xl bg-white px-6 py-3 text-center text-base font-semibold text-indigo-900 hover:bg-gray-100"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;