/**
 * Wallet claim flow for the Re:Config theme reward — dependency-free.
 *
 * Uses the raw EIP-1193 injected provider (MetaMask / Rabby / Coinbase Wallet):
 *   1. Request the user's account.
 *   2. Have them `personal_sign` a fixed message proving wallet ownership (gasless).
 *   3. POST { address, message, signature } to the Supabase Edge Function, which
 *      verifies the signature, enforces the deadline, and performs the atomic
 *      "first winner wins" write. The winning wallet is recorded server-side and
 *      the reward is paid to it out-of-band by the team.
 */

import { CLAIM_ENDPOINT, SUPABASE_ANON_KEY } from "../config/reward";

const CLAIM_MESSAGE = (address) =>
  `Re:Config 2026 — I cracked the code.\n\nClaiming the first-solver reward for wallet:\n${address}\n\nSigning this message is free and does not authorize any transaction.`;

export class ClaimError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code; // 'no-wallet' | 'rejected' | 'network' | 'config' | 'unknown'
  }
}

/** Connect the injected wallet and return the checksummed-ish lowercase address. */
async function connectWallet() {
  const eth = typeof window !== "undefined" ? window.ethereum : undefined;
  if (!eth) {
    throw new ClaimError(
      "no-wallet",
      "No Ethereum wallet found. Install MetaMask or another browser wallet to claim."
    );
  }
  try {
    const accounts = await eth.request({ method: "eth_requestAccounts" });
    if (!accounts || accounts.length === 0) {
      throw new ClaimError("rejected", "No account was authorized.");
    }
    return { eth, address: accounts[0] };
  } catch (err) {
    if (err?.code === 4001) throw new ClaimError("rejected", "Wallet connection was rejected.");
    throw new ClaimError("unknown", err?.message || "Failed to connect wallet.");
  }
}

/**
 * Run the full claim. Returns the backend result:
 *   { status: 'winner', wallet, address }  — you're the first solver
 *   { status: 'taken' }                    — someone already won
 *   { status: 'closed' }                   — past the deadline
 * Throws ClaimError on wallet/config/network failures.
 */
export async function claimReward() {
  if (!CLAIM_ENDPOINT || !SUPABASE_ANON_KEY) {
    throw new ClaimError("config", "Reward claiming is not configured yet. Check back soon.");
  }

  const { eth, address } = await connectWallet();
  const message = CLAIM_MESSAGE(address);

  let signature;
  try {
    signature = await eth.request({ method: "personal_sign", params: [message, address] });
  } catch (err) {
    if (err?.code === 4001) throw new ClaimError("rejected", "Signature was rejected.");
    throw new ClaimError("unknown", err?.message || "Failed to sign the claim message.");
  }

  let res;
  try {
    res = await fetch(CLAIM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({ address, message, signature }),
    });
  } catch {
    throw new ClaimError("network", "Could not reach the claim server. Try again.");
  }

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new ClaimError("unknown", data?.error || `Claim failed (${res.status}).`);
  }
  return { ...data, address };
}
