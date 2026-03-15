"use client";

import { useActionState, useEffect, useState } from "react";
import { joinWaitlist, type JoinWaitlistState } from "@/app/actions/joinWaitlist";
import Confetti from "react-confetti";

interface WaitlistFormProps {
  onSuccess?: () => void;
}

const initialState: JoinWaitlistState = { ok: false };

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [state, formAction, isPending] = useActionState(
    joinWaitlist,
    initialState,
  );
  const [email, setEmail] = useState("");
  const [interestReason, setInterestReason] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // When the server action reports success, show overlay and reset form.
  useEffect(() => {
    if (state.ok) {
      setShowSuccess(true);
      setEmail("");
      setInterestReason("");
      if (onSuccess) {
        onSuccess();
      }
    }
  }, [state, onSuccess]);

  return (
    <section
      id="waitlist"
      className="border-t border-zinc-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl">
              Be first in line for Recallio.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Join the early waitlist and help shape a system that helps people
              remember what they learn—from complex systems to simple checklists.
            </p>
            <ul className="mt-5 space-y-2 text-xs text-zinc-500 sm:text-sm">
              <li>• Early access as we open the private beta.</li>
              <li>• Occasional product updates, no spam.</li>
              <li>• A say in what we prioritize for students, teams, and pros.</li>
            </ul>
          </div>
          <div className="relative">
            <form
              action={formAction}
              className="relative rounded-2xl border border-zinc-200 bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.08)]"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-medium text-zinc-800 sm:text-sm"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="interestReason"
                    className="block text-xs font-medium text-zinc-800 sm:text-sm"
                  >
                    Why are you interested in Recallio?
                  </label>
                  <textarea
                    id="interestReason"
                    name="interest_reason"
                    value={interestReason}
                    onChange={(e) => setInterestReason(e.target.value)}
                    rows={4}
                    className="mt-1.5 block w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 shadow-sm outline-none ring-0 transition placeholder:text-zinc-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40"
                    placeholder="Tell us about how you learn, work, or document things today."
                    required
                  />
                </div>
                {state.ok === false && state.error && (
                  <p className="text-xs text-amber-400">{state.error}</p>
                )}
                <button
                  type="submit"
                  disabled={isPending}
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-indigo-500/40 transition hover:bg-indigo-600 disabled:cursor-not-allowed disabled:opacity-80"
                >
                  {isPending ? "Joining waitlist..." : "Join the waitlist"}
                </button>
                <p className="mt-2 text-[11px] text-zinc-500">
                  No confirmation emails right now—just product updates as Recallio
                  gets closer to launch.
                </p>
              </div>
            </form>

            {showSuccess && (
              <SuccessOverlay
                onClose={() => setShowSuccess(false)}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function SuccessOverlay({ onClose }: { onClose: () => void }) {
  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    const timeout = setTimeout(() => {
      // Keep the thank-you visible, but allow subtle auto settle by removing confetti after a while.
      onClose();
    }, 8000);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeout);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      {windowSize && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          numberOfPieces={220}
          gravity={0.9}
          recycle={false}
        />
      )}
      <div className="relative z-50 mx-4 max-w-sm rounded-2xl border border-emerald-400/30 bg-zinc-950/95 px-6 py-6 text-center shadow-[0_22px_60px_rgba(0,0,0,0.9)]">
        <p className="text-sm font-medium text-zinc-50 sm:text-base">
          thank you! you have been added to the waitlist for recallio
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-4 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1.5 text-xs font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}

