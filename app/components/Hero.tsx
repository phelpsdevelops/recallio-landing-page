"use client";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950 pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-[-200px] -z-10 h-[380px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.21),_transparent_60%),_radial-gradient(circle_at_top_right,_rgba(34,197,94,0.18),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-zinc-900/60 px-3 py-1 text-xs font-medium text-emerald-300 shadow-sm shadow-emerald-500/30">
            A system that helps you remember what you learn
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl md:text-5xl">
            Turn any notes, docs, or processes into{" "}
            <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
              active recall
            </span>
            .
          </h1>
          <p className="text-pretty text-sm leading-relaxed text-zinc-300 sm:text-base">
            Recallio helps students, teams, and professionals actually retain
            what matters—by transforming your existing notes, PDFs, and
            documentation into questions, flashcards, and finish-the-statement
            prompts you&apos;ll remember.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                const el = document.getElementById("waitlist");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-medium text-zinc-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              Join the waitlist
            </button>
            <p className="text-xs text-zinc-400 sm:text-sm">
              For students, operators, engineers, and anyone who can&apos;t
              afford to forget how things work.
            </p>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-zinc-400 sm:text-sm md:max-w-md">
            <div>
              <dt className="font-medium text-zinc-300">For learners</dt>
              <dd className="mt-1">
                Turn class notes, readings, and self-study into spaced
                practice.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-300">For workflows</dt>
              <dd className="mt-1">
                Save repeatable procedures, and follow them again when it
                matters.
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mt-2 flex flex-1 justify-center lg:mt-0">
          <div className="relative w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.65)]">
            <div className="mb-3 flex items-center gap-2 text-xs text-zinc-400">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Live recall session
            </div>
            <div className="space-y-3 text-xs text-zinc-100">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                <div className="text-[11px] font-medium text-emerald-300">
                  Active recall question
                </div>
                <p className="mt-1 text-xs text-zinc-100">
                  “What are the three key steps in your deployment checklist?”
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                  <div className="text-[11px] font-medium text-sky-300">
                    Flashcard
                  </div>
                  <p className="mt-1 text-xs text-zinc-100">
                    Front: “How does this service authenticate requests?”
                  </p>
                </div>
                <div className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900/80 p-3">
                  <div className="text-[11px] font-medium text-amber-300">
                    Finish the statement
                  </div>
                  <p className="mt-1 text-xs text-zinc-100">
                    “Before running migrations, I always…”
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-zinc-700/70 bg-zinc-900/50 p-3">
                <p className="text-[11px] text-zinc-400">
                  Recallio pulls from your uploaded notes, PDFs, and docs—
                  keeping everything tied back to the original source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

