import { personalInfo } from "../data/resume";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[#1e1e2e]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href="/"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-mono text-sm text-accent font-medium tracking-wider cursor-pointer"
        >
          ali<span className="text-green">.</span>sh
        </a>
        <p className="font-mono text-xs text-muted text-center">
          Designed & built by Ali Shandhor · {new Date().getFullYear()}
        </p>
        <div className="flex gap-4">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors text-xs font-mono"
          >
            GitHub
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-text transition-colors text-xs font-mono"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-muted hover:text-text transition-colors text-xs font-mono"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}