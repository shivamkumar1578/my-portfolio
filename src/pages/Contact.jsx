import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus({
      submitting: true,
      success: false,
      error: "",
    });

    try {
      const response = await fetch("https://formspree.io/f/xvzwqvnr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          submitting: false,
          success: true,
          error: "",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          submitting: false,
          success: false,
          error: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: "Network error. Please try again.",
      });
    }
  };

  return (
    <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h1>

        <div className="mx-auto mt-3 h-1 w-28 rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
          Have a question or want to work together? Fill out the form below or
          reach out directly through my contact information.
        </p>
      </div>

      {/* Main cards */}
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.55fr_1fr]">
        {/* Left form */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="mb-3 block text-base font-medium text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-base text-white outline-none transition placeholder:text-gray-400 focus:border-violet-400/50 focus:bg-white/[0.12]"
              />
            </div>

            <div>
              <label className="mb-3 block text-base font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-base text-white outline-none transition placeholder:text-gray-400 focus:border-violet-400/50 focus:bg-white/[0.12]"
              />
            </div>

            <div>
              <label className="mb-3 block text-base font-medium text-white">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message..."
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-base text-white outline-none transition placeholder:text-gray-400 focus:border-violet-400/50 focus:bg-white/[0.12]"
              />
            </div>

            {status.success && (
              <div className="rounded-2xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm text-green-300">
                Message sent successfully.
              </div>
            )}

            {status.error && (
              <div className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                {status.error}
              </div>
            )}

            <button
              type="submit"
              disabled={status.submitting}
              className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-4 text-xl font-semibold text-white shadow-lg transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right info */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]">
          <h2 className="text-4xl font-semibold leading-tight text-blue-300">
            Contact Information
          </h2>

          <div className="mt-10 space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600/30 text-lg">
                ✉️
              </div>
              <div className="min-w-0">
                <p className="text-base text-gray-400">Email</p>
                <a
                  href="mailto:shivamkumarshaurya@gmail.com"
                  className="mt-1 block whitespace-nowrap text-[15px] text-violet-300 hover:underline"
                >
                  shivamkumarshaurya@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600/30 text-lg">
                📱
              </div>
              <div className="min-w-0">
                <p className="text-base text-gray-400">Phone</p>
                <a
                  href="tel:+918409426157"
                  className="mt-1 block whitespace-nowrap text-[15px] text-violet-300 hover:underline"
                >
                  +91 8409426157
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600/30 text-lg">
                🔗
              </div>
              <div className="min-w-0">
                <p className="text-base text-gray-400">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/shivamkumar003/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block whitespace-nowrap text-[15px] text-violet-300 hover:underline"
                >
                  linkedin.com/in/shivamkumar003/
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-600/30 text-lg">
                💻
              </div>
              <div className="min-w-0">
                <p className="text-base text-gray-400">GitHub</p>
                <a
                  href="https://github.com/shivamkumar1578"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block whitespace-nowrap text-[15px] text-violet-300 hover:underline"
                >
                  github.com/shivamkumar1578
                </a>
              </div>
            </div>
          </div>

          <div className="my-8 h-px bg-white/10" />

          <div>
            <p className="text-lg text-gray-300">Follow Me</p>

            <div className="mt-4 flex gap-4">
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-base text-gray-300 transition hover:bg-violet-600/30 hover:text-white"
              >
                T
              </a>

              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-base text-gray-300 transition hover:bg-violet-600/30 hover:text-white"
              >
                I
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom card */}
      <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 px-8 py-7 text-center shadow-lg transition-all duration-300 hover:border-violet-400/40 hover:bg-white/[0.07]">
        <p className="text-xl text-gray-200">
          Looking forward to hearing from you!
        </p>
      </div>
    </section>
  );
}

export default Contact;