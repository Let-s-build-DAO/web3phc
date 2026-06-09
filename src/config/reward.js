/**
 * Re:Config "Daily Drop" reward configuration.
 *
 * The first wallet to submit a valid claim before the cutoff wins the reward, paid
 * out-of-band by the team to the recorded address.
 * NOTE: fairness/"who was first" is decided server-side by Supabase (atomic write).
 * Nothing here is a secret — these are public values safe to ship in the bundle.
 */

// Supabase Edge Function endpoint that adjudicates the claim.
// e.g. https://<project-ref>.supabase.co/functions/v1/claim-theme
export const CLAIM_ENDPOINT = import.meta.env.VITE_CLAIM_ENDPOINT || "";

// Supabase anon key (public) — required as the Authorization bearer for Edge Functions.
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Cutoff: claims after this instant are rejected (Summit day). UTC.
export const REWARD_DEADLINE = "2026-10-24T00:00:00Z";

// Human-readable prize text shown to the winner. Swap freely.
export const REWARD_PRIZE_TEXT = "the Genesis Builder reward";

export const isRewardConfigured = Boolean(CLAIM_ENDPOINT && SUPABASE_ANON_KEY);
export const isRewardWindowOpen = () => Date.now() < new Date(REWARD_DEADLINE).getTime();
