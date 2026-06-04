/**
 * Re:Config "Daily Drop" — a once-per-day word puzzle leading up to the event.
 *
 * The same puzzle shows for every visitor on a given UTC day (deterministic from
 * the date), so streaks and shareable result grids are comparable. The FINALE
 * drop (day before the Summit) is the one wired to the on-chain reward: first to
 * solve it wins.
 */

// All answers are 5 letters. Real words (fair to guess) with a Web3 flavor.
export const WORDS = [
  "BLOCK", "CHAIN", "TOKEN", "STAKE", "MINTS", "NODES", "PROOF", "VAULT",
  "YIELD", "SWAPS", "BURNS", "LAYER", "NONCE", "BYTES", "CODES", "MINER",
  "PEERS", "FORKS", "COINS", "TRADE", "ASSET", "AGENT", "RAILS", "BUILD",
  "BLOBS", "GAINS",
];

export const WORD_LEN = 5;
export const MAX_GUESSES = 6;

// The reward-bearing finale: solving this drop triggers the wallet claim.
export const FINALE = { date: "2026-10-23", word: "BUILD" };

// Day 0 reference (UTC). Puzzle number = whole days since this date.
const LAUNCH = Date.UTC(2026, 0, 1);

/** Today's puzzle id, e.g. "2026-06-04" (UTC). */
export const todayId = () => new Date().toISOString().slice(0, 10);

/** Whole UTC days between LAUNCH and the given id. */
export const dayNumber = (id = todayId()) =>
  Math.floor((Date.parse(id) - LAUNCH) / 86400000);

/** The puzzle for a given day. */
export function puzzleForDay(id = todayId()) {
  if (id === FINALE.date) {
    return { id, no: dayNumber(id), word: FINALE.word, isFinale: true };
  }
  const n = dayNumber(id);
  const idx = ((n % WORDS.length) + WORDS.length) % WORDS.length;
  return { id, no: n, word: WORDS[idx], isFinale: false };
}

/** Wordle scoring with correct duplicate-letter handling. */
export function scoreGuess(guess, answer) {
  const res = Array(guess.length).fill("absent");
  const counts = {};
  for (const ch of answer) counts[ch] = (counts[ch] || 0) + 1;
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      res[i] = "correct";
      counts[guess[i]]--;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (res[i] === "correct") continue;
    if (counts[guess[i]] > 0) {
      res[i] = "present";
      counts[guess[i]]--;
    }
  }
  return res;
}

export const STORAGE = {
  board: (id) => `reconfig-dd-board-${id}`,
  stats: "reconfig-dd-stats",
};
