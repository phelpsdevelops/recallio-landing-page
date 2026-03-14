export function ValuePropositionSection() {
  const items = [
    {
      title: "Upload what you already have",
      description:
        "Bring in notes, PDFs, slide decks, or step-by-step docs. Recallio works with the material you actually use.",
    },
    {
      title: "Turn information into questions",
      description:
        "Generate active recall prompts, flashcards, and finish-the-statement exercises from your content in seconds.",
    },
    {
      title: "Document repeatable work",
      description:
        "Capture procedures you don't want to relearn from scratch—deploys, onboarding, handoffs, or internal tools.",
    },
    {
      title: "Find it again instantly",
      description:
        "Search your personal knowledge base when you need it, and follow guided steps instead of guessing.",
    },
  ];

  return (
    <section className="bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Not just another study app.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Recallio combines active recall with documentation so you remember
            concepts, decisions, and workflows—whether you&apos;re preparing
            for an exam, shipping a release, or keeping a team running.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 shadow-[0_16px_40px_rgba(0,0,0,0.55)]"
            >
              <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                {item.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      label: "Step 1",
      title: "Upload notes, docs, or instructions",
      body: "Drop in lecture notes, onboarding checklists, runbooks, or any material you want to actually keep in your head.",
    },
    {
      label: "Step 2",
      title: "Recallio turns them into recall tools",
      body: "We generate active recall questions, flashcards, and finish-the-statement prompts tailored to your content.",
    },
    {
      label: "Step 3",
      title: "Practice in focused sessions",
      body: "Run lightweight sessions that adapt to what you get right or wrong—so your time goes where it matters most.",
    },
    {
      label: "Step 4",
      title: "Come back when you need it",
      body: "Search your saved sessions and documentation later and refresh the exact knowledge or workflow on demand.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-t border-zinc-900 bg-zinc-950 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            How Recallio fits into your day.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Designed to feel like a natural extension of how you already take
            notes and document work—without adding more overhead.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.label}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <span className="text-[11px] font-medium uppercase tracking-wide text-emerald-300">
                {step.label}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-zinc-50 sm:text-base">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function UseCasesSection() {
  const useCases = [
    {
      title: "Students & exam takers",
      description:
        "Turn lectures and readings into recall sessions so concepts stick long after the test.",
      badge: "Academic",
    },
    {
      title: "Operators & team leads",
      description:
        "Capture SOPs, playbooks, and handoffs so the right steps are followed the same way every time.",
      badge: "Operations",
    },
    {
      title: "Engineers & technical pros",
      description:
        "Document environment setups, deploy flows, and one-off fixes you never want to rediscover under pressure.",
      badge: "Technical",
    },
    {
      title: "Self-learners & builders",
      description:
        "Retain what you learn from books, courses, and docs while you&apos;re building the next thing.",
      badge: "Self-directed",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            Built for anyone who can&apos;t afford to forget.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Recallio is for students, operators, engineers, and solo builders
            alike—anywhere notes, documents, and repeatable processes power real
            work.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <article
              key={uc.title}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/70 p-4"
            >
              <div>
                <span className="inline-flex items-center rounded-full bg-zinc-800/80 px-2.5 py-0.5 text-[11px] font-medium text-zinc-300">
                  {uc.badge}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-zinc-50 sm:text-base">
                  {uc.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                  {uc.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturePreviewSection() {
  const features = [
    {
      title: "Active recall sessions",
      description:
        "Guided questions that surface the most important ideas from your material—before you forget them.",
    },
    {
      title: "Flashcards without the busywork",
      description:
        "Cards are generated from the content you upload, so you focus on practice instead of formatting.",
    },
    {
      title: "Finish-the-statement prompts",
      description:
        "Strengthen real-world recall by completing procedures and explanations from memory.",
    },
    {
      title: "Personal documentation search",
      description:
        "Find saved instructions and runbooks in seconds when you need to redo a task or recover a setup.",
    },
    {
      title: "Stored notes & recall history",
      description:
        "Keep a timeline of what you&apos;ve learned, how often you review it, and what actually sticks.",
    },
    {
      title: "Designed for teams & individuals",
      description:
        "Start as one learner, expand to a team. Recallio grows with the complexity of your work.",
    },
  ];

  return (
    <section className="border-t border-zinc-900 bg-zinc-950 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
            A lightweight workspace for durable learning.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Recallio brings together recall questions, flashcards, and
            documentation so you don&apos;t have to spread your brain across a
            dozen tools.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-900/80 to-zinc-900/40 p-4 shadow-[0_14px_36px_rgba(0,0,0,0.6)]"
            >
              <h3 className="text-sm font-semibold text-zinc-50 sm:text-base">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-zinc-300 sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

