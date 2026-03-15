import { skills } from "../data/resume";

const categories = [
  {
    key: "languages",
    label: "Languages",
    icon: "{ }",
    color: "text-accent",
    data: skills.languages,
  },
  {
    key: "frameworks",
    label: "Frameworks & Libraries",
    icon: "◈",
    color: "text-green",
    data: skills.frameworks,
  },
  {
    key: "cloud",
    label: "Cloud & DevOps",
    icon: "☁",
    color: "text-[#ff8a65]",
    data: skills.cloud,
  },
  {
    key: "tools",
    label: "Tools",
    icon: "⚙",
    color: "text-[#64b5f6]",
    data: skills.tools,
  },
  {
    key: "databases",
    label: "Databases",
    icon: "⬡",
    color: "text-[#ba68c8]",
    data: skills.databases,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Technical Stack</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-3">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="p-6 rounded-xl border border-[#1e1e2e] bg-card card-hover"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className={`font-mono text-xl ${cat.color}`}>{cat.icon}</span>
                <h3 className="font-display text-sm font-semibold text-text">{cat.label}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.data.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-[#111118] border border-[#1e1e2e] text-text-dim hover:text-text hover:border-accent/30 transition-colors duration-150 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Currently learning card */}
          <div className="p-6 rounded-xl border border-dashed border-[#2a2a3a] bg-[#0d0d14] flex flex-col justify-center">
            <p className="font-mono text-xs text-muted mb-3">&#47;&#47; currently_exploring</p>
            <div className="flex flex-wrap gap-2">
              {["Rust", "Kubernetes", "LLM Fine-tuning", "Ray"].map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-3 py-1.5 rounded-lg border border-dashed border-[#2a2a3a] text-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}