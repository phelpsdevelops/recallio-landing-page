"use server";

import { getSql } from "@/lib/db";

export type JoinWaitlistState = {
  ok: boolean;
  error?: string;
};

const initialState: JoinWaitlistState = { ok: false };

export async function joinWaitlist(
  _prevState: JoinWaitlistState = initialState,
  formData: FormData,
): Promise<JoinWaitlistState> {
  const email = String(formData.get("email") || "").trim();
  const reason = String(formData.get("interest_reason") || "").trim();

  if (!email || !reason) {
    return {
      ok: false,
      error: "Email and interest reason are required.",
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      ok: false,
      error: "Please enter a valid email address.",
    };
  }

  const sql = getSql();

  try {
    await sql`
      INSERT INTO waitlist_signups (email, interest_reason)
      VALUES (${email}, ${reason})
    `;
  } catch (_error) {
    // In this simple flow, any insert error is treated as a duplicate email.
    return {
      ok: false,
      error: "This email is already on the waitlist.",
    };
  }

  return { ok: true };
}

