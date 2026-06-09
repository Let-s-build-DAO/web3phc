// Re:Config "Crack the Code" — claim adjudicator (Supabase Edge Function / Deno).
//
// Flow:
//   1. Verify the personal_sign signature proves ownership of `address`.
//   2. Reject if past the deadline.
//   3. Atomically insert the single winner row (first valid claim wins).
//      The winning wallet is recorded; the team pays the reward to that address
//      out-of-band. Losers get { status:'taken' }.
//
// Required Edge Function secrets (supabase secrets set ...):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY  (auto-provided in the platform)
//   REWARD_DEADLINE     — ISO instant, e.g. 2026-10-24T00:00:00Z

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { verifyMessage } from "https://esm.sh/viem@2/accounts";
import { isAddress, getAddress } from "https://esm.sh/viem@2";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...cors, "Content-Type": "application/json" },
  });

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  let payload: { address?: string; message?: string; signature?: string };
  try {
    payload = await req.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }
  const { address, message, signature } = payload;
  if (!address || !message || !signature || !isAddress(address)) {
    return json({ error: "Missing or invalid address/message/signature" }, 400);
  }

  // 1. Verify ownership.
  const valid = await verifyMessage({
    address: getAddress(address),
    message,
    signature: signature as `0x${string}`,
  }).catch(() => false);
  if (!valid) return json({ error: "Signature does not match address" }, 401);

  // 2. Deadline.
  const deadline = new Date(Deno.env.get("REWARD_DEADLINE") ?? "2026-10-24T00:00:00Z");
  if (Date.now() >= deadline.getTime()) return json({ status: "closed" });

  // 3. Atomic first-winner write (service role bypasses RLS).
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const wallet = getAddress(address);
  const { error } = await supabase
    .from("theme_winners")
    .insert({ slot: 1, wallet, signature });

  if (error) {
    // Unique-violation = someone already won.
    if (error.code === "23505") return json({ status: "taken" });
    return json({ error: "Could not record claim" }, 500);
  }

  // 4. Winner recorded. Reward is paid to `wallet` out-of-band by the team.
  return json({ status: "winner", wallet });
});
