import { personalInfo, education } from "../data/resume";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 py-24 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <span className="section-tag">About Me</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-3 mb-6">
              Building real things,
              <br />
              <span className="text-accent">not just homework.</span>
            </h2>
            <div className="space-y-4 text-text-dim text-base leading-relaxed">
              <p>
                I'm a Senior Software Engineering student at York University with hands-on industry
                experience across three internships — building optical network automation at Ciena,
                5G test frameworks at Ericsson, and AI voice synthesis at Vosyn.
              </p>
              <p>
                My work spans backend engineering, automation, machine learning, and cloud systems.
                I'm drawn to problems that involve making systems faster, more reliable, or more intelligent.
              </p>
              <p>
                Outside of code, I'm interested in the intersection of AI and infrastructure — how
                intelligent systems can automate the tedious parts of engineering work itself.
              </p>
            </div>

            {/* Photo — mobile only, shown below text on small screens */}
            <div className="mt-8 flex md:hidden justify-center">
              <AboutPhoto />
            </div>
          </div>

          {/* Right column: photo + education */}
          <div className="space-y-4">
            {/* Photo — desktop */}
            <div className="hidden md:flex justify-center mb-2">
              <AboutPhoto />
            </div>
            {education.map((edu, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#1e1e2e] bg-card card-hover"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-display text-base font-semibold text-text">
                      {edu.school}
                    </h3>
                    <p className="text-text-dim text-sm mt-0.5">{edu.degree}</p>
                  </div>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                {/* Awards */}
                <div className="mb-4">
                  <p className="font-mono text-xs text-accent mb-2">Awards</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.awards.map((a) => (
                      <span
                        key={a}
                        className="text-xs px-2.5 py-1 rounded-full bg-[#111118] border border-[#1e1e2e] text-text-dim"
                      >
                        🏆 {a}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Coursework */}
                <div>
                  <p className="font-mono text-xs text-accent mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-2.5 py-1 rounded-full bg-subtle text-text-dim"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { n: "3", label: "Internships" },
                { n: "2+", label: "Years Exp." },
                { n: "A+", label: "GPA Avg." },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-xl border border-[#1e1e2e] bg-card text-center"
                >
                  <div className="font-display text-2xl font-bold gradient-text">{s.n}</div>
                  <div className="font-mono text-xs text-muted mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPhoto() {
  return (
    <div className="relative w-36 h-36 photo-float">
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(124,106,255,0.3) 0%, transparent 70%)",
          filter: "blur(12px)",
          transform: "scale(1.2)",
        }}
      />
      {/* Photo frame */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden border border-accent/30"
        style={{ boxShadow: "0 0 30px rgba(124,106,255,0.15)" }}
      >
        <img
          src="/profile.jpg"
          alt="Ali Shandhor"
          className="w-full h-full object-cover object-top"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bg/30 to-transparent" />
      </div>
      {/* Corner accent */}
      <div className="absolute -top-1.5 -right-1.5 w-3 h-3 rounded-full bg-green"
        style={{ boxShadow: "0 0 8px rgba(57,255,122,0.8)" }} />
    </div>
  );
}
