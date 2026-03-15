import { useState, useRef, useEffect } from "react";
import { terminalData, personalInfo } from "../data/resume";

const COMMANDS = {
  help: () =>
    `Available commands:
  about      → Short bio
  skills     → Technical skills
  projects   → My projects
  experience → Work history
  contact    → Contact info
  resume     → Download resume
  clear      → Clear terminal
  help       → Show this list`,
  about: () => terminalData.about,
  skills: () => terminalData.skills,
  projects: () => terminalData.projects,
  experience: () => terminalData.experience,
  contact: () => terminalData.contact,
  resume: () => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const a = document.createElement("a");
        a.href = "/Ali_Shandhor_Resume.pdf";
        a.download = "Ali_Shandhor_Resume.pdf";
        a.click();
      }, 600);
    }
    return terminalData.resume;
  },
};

const WELCOME = `Welcome to ali.sh — interactive terminal
Type 'help' to see available commands.
─────────────────────────────────────────`;

export default function Terminal() {
  const [history, setHistory] = useState([{ type: "system", text: WELCOME }]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  // Keep a ref to history so runCommand never reads stale closure state
  const historyRef = useRef([{ type: "system", text: WELCOME }]);

  const updateHistory = (newHistory) => {
    historyRef.current = newHistory;
    setHistory(newHistory);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      runCommand(input.trim());
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const newIdx = Math.min(histIdx + 1, cmdHistory.length - 1);
      setHistIdx(newIdx);
      setInput(cmdHistory[newIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const newIdx = Math.max(histIdx - 1, -1);
      setHistIdx(newIdx);
      setInput(newIdx === -1 ? "" : cmdHistory[newIdx] || "");
    }
  };

  const runCommand = (cmd) => {
    const normalized = cmd.trim().toLowerCase();
    if (!normalized) return;

    // Use ref to avoid stale closure
    const current = historyRef.current;

    if (normalized === "clear") {
      const fresh = [{ type: "system", text: WELCOME }];
      updateHistory(fresh);
      setInput("");
      setCmdHistory((h) => [normalized, ...h]);
      setHistIdx(-1);
      inputRef.current?.focus();
      return;
    }

    const withInput = [...current, { type: "input", text: cmd }];
    const fn = COMMANDS[normalized];
    const output = fn
      ? fn()
      : `Command not found: '${normalized}'\nType 'help' to see available commands.`;

    updateHistory([...withInput, { type: "output", text: output }]);
    setInput("");
    setCmdHistory((h) => [normalized, ...h]);
    setHistIdx(-1);
    inputRef.current?.focus();
  };

  return (
    <section className="py-24 px-6" id="terminal">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-tag">Interactive</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text mt-3">
            Developer Terminal
          </h2>
          <p className="text-text-dim text-sm mt-2 font-mono">
            Type commands to explore my profile
          </p>
        </div>

        {/* Terminal window */}
        <div
          className="rounded-xl border border-[#1e1e2e] overflow-hidden shadow-2xl"
          onClick={() => inputRef.current?.focus()}
          style={{ boxShadow: "0 0 60px rgba(124,106,255,0.08)" }}
        >
          {/* Title bar */}
          <div className="bg-[#111118] border-b border-[#1e1e2e] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
            </div>
            <span className="font-mono text-xs text-muted mx-auto">
              ali@portfolio:~
            </span>
          </div>

          {/* Terminal body */}
          <div className="bg-[#0d0d14] p-5 h-80 overflow-y-auto terminal-text text-sm">
            {history.map((item, i) => (
              <div key={i} className="mb-2 leading-relaxed">
                {item.type === "input" && (
                  <div>
                    <span className="text-green">ali@portfolio</span>
                    <span className="text-muted">:</span>
                    <span className="text-accent">~</span>
                    <span className="text-muted">$ </span>
                    <span className="text-text">{item.text}</span>
                  </div>
                )}
                {item.type === "output" && (
                  <pre className="text-text-dim whitespace-pre-wrap font-mono text-xs leading-5 mt-1 ml-0">
                    {item.text}
                  </pre>
                )}
                {item.type === "system" && (
                  <pre className="text-accent/70 whitespace-pre-wrap font-mono text-xs leading-5">
                    {item.text}
                  </pre>
                )}
              </div>
            ))}

            {/* Active input line */}
            <div className="flex items-center mt-1">
              <span className="text-green">ali@portfolio</span>
              <span className="text-muted">:</span>
              <span className="text-accent">~</span>
              <span className="text-muted">$ </span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                className="flex-1 bg-transparent outline-none text-text font-mono text-sm caret-accent ml-0"
                autoComplete="off"
                spellCheck={false}
                autoFocus
              />
            </div>
            <div ref={bottomRef} />
          </div>

          {/* Quick commands */}
          <div className="bg-[#111118] border-t border-[#1e1e2e] px-4 py-2 flex flex-wrap gap-2">
            {["help", "about", "skills", "experience", "projects", "contact"].map((cmd) => (
              <button
                key={cmd}
                onClick={() => runCommand(cmd)}
                className="font-mono text-xs px-2.5 py-1 rounded border border-[#1e1e2e] text-text-dim hover:text-accent hover:border-accent/40 transition-all duration-150"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
