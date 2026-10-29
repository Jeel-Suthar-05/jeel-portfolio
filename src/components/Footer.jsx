import { profile } from "../data/portfolio";

const year = new Date().getFullYear();
const ticker =
  "PYTHON  ·  FASTAPI  ·  SELENIUM  ·  PANDAS  ·  SQL SERVER  ·  EOB_SCRAPING  ·  OPENPYXL  ·  AZURE  ·  DJANGO  ·  ";

export default function Footer() {
  const loop = `${ticker}${ticker}`;

  return (
    <footer className="border-t border-white/10">
      <div className="overflow-hidden border-b border-white/10 py-3">
        <div className="ticker font-mono text-sm tracking-[0.18em] text-subtle">
          <span>{loop}</span>
          <span aria-hidden="true">{loop}</span>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 py-6 font-mono text-sm tracking-[0.12em] text-subtle uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="text-white">{profile.name}</p>
        <p>
          © {year} {profile.name} // All_systems_operational
        </p>
        <p>Ahmedabad_IN</p>
      </div>
    </footer>
  );
}
