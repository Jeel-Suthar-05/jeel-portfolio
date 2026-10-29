import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Database,
  FileSearch,
  FileSpreadsheet,
  GitBranch,
  Globe,
  Server,
  Sheet,
  Workflow,
} from "lucide-react";

const tools = [
  { name: "Python", icon: Code2 },
  { name: "FastAPI", icon: Server },
  { name: "Selenium", icon: Bot },
  { name: "Pandas", icon: BarChart3 },
  { name: "SQL Server", icon: Database },
  { name: "Django", icon: Workflow },
  { name: "Azure", icon: Cloud },
  { name: "OpenPyXL", icon: Sheet },
  { name: "EOB PDF", icon: FileSearch },
  { name: "BeautifulSoup", icon: Globe },
  { name: "Excel", icon: FileSpreadsheet },
  { name: "Git", icon: GitBranch },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 py-20 sm:py-24" aria-labelledby="skills-heading">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <h2 id="skills-heading" className="text-center font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
          TECHNOLOGIES_I_USE
        </h2>
        <p className="mt-3 text-center font-mono text-sm tracking-[0.18em] text-subtle">WORKING_WITH · NO_FAKE_SCORES</p>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <li key={tool.name} className="hover-card flex flex-col items-center justify-center gap-3 rounded-xl border border-white/10 bg-elevated px-3 py-6">
                <Icon className="text-accent" size={22} aria-hidden="true" />
                <span className="text-center font-mono text-sm tracking-[0.12em] text-white uppercase">{tool.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
