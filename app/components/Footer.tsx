export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Recallio. All rights reserved.</p>
        <p className="text-[11px]">
          Built for people who want to remember what they learn—not just file it
          away.
        </p>
      </div>
    </footer>
  );
}

