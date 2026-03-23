import { useState } from "react";
import { personalInfo } from "../data/resume";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Opens default mail client with pre-filled content
    const subject = encodeURIComponent(`Message from ${form.name} via Portfolio`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`);
    setStatus("opened");
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-text mt-3">
            Contact
          </h2>
          <p className="text-text-dim text-base mt-3 max-w-md mx-auto">
            Open to new grad roles, internships, and interesting projects.
            Let&apos;s build something together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Form */}
          <div className="p-7 rounded-xl border border-[#1e1e2e] bg-card">
            <h3 className="font-display text-base font-semibold text-text mb-6">
              Send a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="font-mono text-xs text-muted block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-3 text-sm text-text placeholder-muted outline-none focus:border-accent/50 transition-colors font-body"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-3 text-sm text-text placeholder-muted outline-none focus:border-accent/50 transition-colors font-body"
                />
              </div>
              <div>
                <label className="font-mono text-xs text-muted block mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="What's on your mind?"
                  className="w-full bg-[#111118] border border-[#1e1e2e] rounded-lg px-4 py-3 text-sm text-text placeholder-muted outline-none focus:border-accent/50 transition-colors resize-none font-body"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-accent hover:bg-accent-dim rounded-lg text-sm text-white font-mono transition-colors duration-200"
              >
                {status === "opened" ? "✓ Mail client opened" : "Send Message →"}
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            {[
              {
                label: "Email",
                value: personalInfo.email,
                href: `mailto:${personalInfo.email}`,
                icon: "✉",
              },
              {
                label: "GitHub",
                value: "https://github.com/alishandhor",
                href: personalInfo.github,
                icon: "⌥",
              },
              {
                label: "LinkedIn",
                value: "https://www.linkedin.com/in/ali-shandhor-204a6a271",
                href: personalInfo.linkedin,
                icon: "◈",
              },
              {
                label: "Location",
                value: personalInfo.location,
                href: null,
                icon: "◎",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-xl border border-[#1e1e2e] bg-card flex items-center gap-4 card-hover"
              >
                <div className="w-10 h-10 rounded-lg bg-subtle flex items-center justify-center text-accent font-mono text-sm flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-xs text-muted">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text hover:text-accent transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-text">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Resume CTA */}
            <a
              href="/Ali_Shandhor_Resume.pdf"
              download
              className="p-5 rounded-xl border border-accent/30 bg-accent/5 flex items-center justify-between group hover:bg-accent/10 transition-all duration-200"
            >
              <span className="font-mono text-sm text-accent">Download Resume</span>
              <span className="text-accent group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}