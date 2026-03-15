import { projects } from "../data/resume";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 py-24 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-3">
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group p-6 rounded-xl border border-[#1e1e2e] bg-card card-hover flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-mono text-accent/60">⬡</span>
                  <h3 className="font-display text-lg font-semibold text-text group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-2 flex-shrink-0">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-[#1e1e2e] text-text-dim hover:text-text hover:border-accent/40 transition-all"
                    title="GitHub"
                  >
                    <GithubIcon />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-[#1e1e2e] text-text-dim hover:text-text hover:border-accent/40 transition-all"
                      title="Live Demo"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-text-dim text-sm leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#111118] border border-[#1e1e2e] text-text-dim"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* More projects coming */}
          <div className="p-6 rounded-xl border border-dashed border-[#2a2a3a] flex flex-col items-center justify-center text-center gap-3 min-h-[200px]">
            <span className="text-3xl opacity-30">+</span>
            <p className="font-mono text-xs text-muted">More on GitHub</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 border border-[#1e1e2e] rounded text-text-dim hover:text-accent hover:border-accent/40 transition-all"
            >
              View All →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}
