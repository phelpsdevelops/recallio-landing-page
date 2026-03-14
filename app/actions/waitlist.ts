"use server";

// Server action for handling waitlist submissions.
// Validates input, prevents duplicate emails, and inserts into Neon via Drizzle.

import { z } from "zod";
import { db, waitlistSignups } from "@/lib/db";
import { eq } from "drizzle-orm";

const waitlistSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  interestReason: z
    .string()
    .min(10, "Please share a bit more about why you're interested"),
});

export type WaitlistFormState =
  | {
      ok: true;
    }
  | {
      ok: false;
      errors?: {
        email?: string;
        interestReason?: string;
        general?: string;
      };
    };

export async function submitWaitlistAction(
  _prevState: WaitlistFormState | null,
  formData: FormData,
): Promise<WaitlistFormState> {
  const raw = {
    email: String(formData.get("email") ?? ""),
    interestReason: String(formData.get("interestReason") ?? ""),
  };

  const parsed = waitlistSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return {
      ok: false,
      errors: {
        email: fieldErrors.email?.[0],
        interestReason: fieldErrors.interestReason?.[0],
      },
    };
  }

  const { email, interestReason } = parsed.data;

  try {
    // Prevent duplicate signups by email.
    const existing = await db
      .select()
      .from(waitlistSignups)
      .where(eq(waitlistSignups.email, email))
      .limit(1);

    if (existing.length > 0) {
      return {
        ok: false,
        errors: {
          email: "This email is already on the waitlist.",
        },
      };
    }

    await db.insert(waitlistSignups).values({
      email,
      interestReason,
    });

    return { ok: true };
  } catch (error) {
    console.error("Error inserting waitlist signup", error);
    return {
      ok: false,
      errors: {
        general: "Something went wrong while saving your signup. Please try again.",
      },
    };
  }
}

