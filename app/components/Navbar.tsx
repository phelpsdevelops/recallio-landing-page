export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-zinc-900/5 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 text-xs font-semibold text-zinc-950 shadow-sm shadow-emerald-500/40">
            R
          </div>
          <span className="text-sm font-medium tracking-tight text-zinc-100 sm:text-base">
            Recallio
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 sm:flex">
          <button
            className="transition hover:text-white"
            onClick={() => {
              const el = document.getElementById("how-it-works");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            How it works
          </button>
          <button
            className="transition hover:text-white"
            onClick={() => {
              const el = document.getElementById("waitlist");
              el?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Join waitlist
          </button>
        </nav>
        <button
          className="inline-flex items-center rounded-full bg-zinc-100 px-4 py-1.5 text-xs font-medium text-zinc-950 shadow-sm shadow-emerald-400/20 transition hover:bg-white sm:text-sm"
          onClick={() => {
            const el = document.getElementById("waitlist");
            el?.scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          Join the waitlist
        </button>
      </div>
    </header>
  );
}

