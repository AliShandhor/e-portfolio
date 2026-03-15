import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 py-24 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Career</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-3">
            Experience
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-2 bottom-2 w-px bg-gradient-to-b from-accent via-[#1e1e2e] to-transparent hidden md:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="flex gap-6 md:gap-10">
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center">
                  <div
                    className="timeline-dot mt-1.5"
                    style={{
                      background: job.current ? "#39ff7a" : "#7c6aff",
                      boxShadow: job.current
                        ? "0 0 12px rgba(57,255,122,0.6)"
                        : "0 0 12px rgba(124,106,255,0.4)",
                    }}
                  />
                </div>

                {/* Card */}
                <div className="flex-1 p-6 rounded-xl border border-[#1e1e2e] bg-card card-hover">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base font-semibold text-text">
                          {job.role}
                        </h3>
                        {job.current && (
                          <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-green/10 text-green border border-green/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-accent text-sm font-medium mt-0.5">
                        {job.company}{" "}
                        <span className="text-muted font-normal">· {job.location}</span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-muted">{job.period}</span>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-text-dim leading-relaxed">
                        <span className="text-accent mt-1 flex-shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-subtle text-text-dim"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
