"use client";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-0 top-[-200px] -z-10 h-[380px] bg-[radial-gradient(circle_at_top,_rgba(79,70,229,0.12),_transparent_60%),_radial-gradient(circle_at_top_right,_rgba(34,197,94,0.12),_transparent_55%)]" />
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <div className="max-w-xl space-y-6">
          <p className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 shadow-sm shadow-indigo-200/80">
            A system that helps you remember what you learn
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl md:text-5xl">
            Combat the forgetting curve with{" "}
            <span className="text-indigo-500">
              active recall
            </span>
            .
          </h1>
          <p className="text-pretty text-sm leading-relaxed text-zinc-600 sm:text-base">
            Recallio helps students, teams, and professionals actually retain
            what matters—by transforming your existing notes, PDFs, and
            documentation into questions, flashcards, and finish-the-statement
            prompts you&apos;ll remember using spaced repetition.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => {
                const el = document.getElementById("waitlist");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              Join the waitlist
            </button>
            <p className="text-xs text-zinc-500 sm:text-sm">
              For students, operators, engineers, and anyone who can&apos;t
              afford to forget how things work.
            </p>
          </div>
          <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-zinc-600 sm:text-sm md:max-w-md">
            <div>
              <dt className="font-medium text-zinc-800">For learners</dt>
              <dd className="mt-1">
                Turn class notes, readings, and self-study into spaced
                practice.
              </dd>
            </div>
            <div>
              <dt className="font-medium text-zinc-800">For workflows</dt>
              <dd className="mt-1">
                Save repeatable procedures, and follow them again when it
                matters.
              </dd>
            </div>
          </dl>
        </div>
        <div className="relative mt-2 flex flex-1 justify-center lg:mt-0">
          <div className="relative w-full max-w-md rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
            {/* Forgetting curve graph */}
            <div className="mb-4 rounded-xl border border-zinc-200 bg-white px-3 py-2">
              <svg
                viewBox="0 0 140 90"
                className="h-28 w-full"
                aria-hidden="true"
              >
                {/* axes */}
                <line x1="20" y1="70" x2="130" y2="70" stroke="#E4E4E7" strokeWidth="1" />
                <line x1="20" y1="20" x2="20" y2="70" stroke="#E4E4E7" strokeWidth="1" />

                {/* y-axis ticks */}
                <line x1="20" y1="30" x2="17" y2="30" stroke="#E4E4E7" strokeWidth="0.6" />
                <line x1="20" y1="40" x2="17" y2="40" stroke="#E4E4E7" strokeWidth="0.6" />
                <line x1="20" y1="50" x2="17" y2="50" stroke="#E4E4E7" strokeWidth="0.6" />
                <line x1="20" y1="60" x2="17" y2="60" stroke="#E4E4E7" strokeWidth="0.6" />

                {/* x-axis ticks */}
                <line x1="40" y1="70" x2="40" y2="73" stroke="#E4E4E7" strokeWidth="0.6" />
                <line x1="70" y1="70" x2="70" y2="73" stroke="#E4E4E7" strokeWidth="0.6" />
                <line x1="100" y1="70" x2="100" y2="73" stroke="#E4E4E7" strokeWidth="0.6" />

                {/* forgetting curve (no practice) */}
                <path
                  d="M20,22 C45,30 70,45 130,68"
                  fill="none"
                  stroke="#CBD5F5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* with Recallio curve (reinforced over time) */}
                <path
                  d="M20,26 C45,28 65,30 80,34 S105,40 130,42"
                  fill="none"
                  stroke="#6366F1"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                />

                {/* reinforcement markers */}
                <circle cx="55" cy="31" r="1.6" fill="#6366F1" />
                <circle cx="90" cy="36" r="1.6" fill="#6366F1" />

                {/* axis labels */}
                <text x="7" y="25" fontSize="6" fill="#71717A">
                  100%
                </text>
                <text x="7" y="55" fontSize="6" fill="#A1A1AA">
                  50%
                </text>
                <text x="32" y="80" fontSize="6" fill="#A1A1AA">
                  day 1
                </text>
                <text x="63" y="80" fontSize="6" fill="#A1A1AA">
                  day 3
                </text>
                <text x="93" y="80" fontSize="6" fill="#A1A1AA">
                  day 7
                </text>

                {/* legend */}
                <rect x="75" y="22" width="6" height="2" fill="#CBD5F5" rx="1" />
                <text x="83" y="24" fontSize="5.5" fill="#6B7280">
                  no review
                </text>
                <rect x="75" y="29" width="6" height="2" fill="#6366F1" rx="1" />
                <text x="83" y="31" fontSize="5.5" fill="#4B5563">
                  with Recallio
                </text>

                {/* axis titles */}
                <text x="23" y="17" fontSize="6" fill="#71717A">
                  memory retained
                </text>
                <text x="84" y="88" fontSize="6" fill="#71717A">
                  time
                </text>
              </svg>
              <p className="mt-1 text-[11px] text-zinc-500">
                Without reinforcement, people can forget over 50% of new
                material within a day and up to ~80–90% within a week. Recallio
                adds light, spaced reviews so what matters stays accessible.
              </p>
            </div>

            <div className="mb-3 flex items-center gap-2 text-xs text-zinc-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              Live recall session
            </div>
            <div className="space-y-3 text-xs text-zinc-900">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                <div className="text-[11px] font-medium text-emerald-700">
                  Active recall question
                </div>
                <p className="mt-1 text-xs text-zinc-800">
                  “What are the three key steps in your deployment checklist?”
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                  <div className="text-[11px] font-medium text-indigo-600">
                    Flashcard
                  </div>
                  <p className="mt-1 text-xs text-zinc-800">
                    Front: “How does this service authenticate requests?”
                  </p>
                </div>
                <div className="flex-1 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
                  <div className="text-[11px] font-medium text-amber-600">
                    Finish the statement
                  </div>
                  <p className="mt-1 text-xs text-zinc-800">
                    “Before running migrations, I always…”
                  </p>
                </div>
              </div>
              <div className="rounded-xl border border-dashed border-zinc-200 bg-zinc-50 p-3">
                <p className="text-[11px] text-zinc-600">
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

