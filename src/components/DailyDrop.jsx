import { useState, useEffect, useMemo, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  WORD_LEN,
  MAX_GUESSES,
  dayNumber,
  puzzleForDay,
  scoreGuess,
  STORAGE,
} from "../config/dailyDrop";
import { claimReward, ClaimError } from "../lib/claimReward";
import { REWARD_PRIZE_TEXT, isRewardWindowOpen } from "../config/reward";

const KEYS = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];
const EMOJI = { correct: "🟩", present: "🟨", absent: "⬛" };

const readJSON = (key, fallback) => {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

const tileClass = (state) =>
  state === "correct"
    ? "bg-green-600 border-green-600 text-white"
    : state === "present"
    ? "bg-yellow-500 border-yellow-500 text-black"
    : state === "absent"
    ? "bg-zinc-700 border-zinc-700 text-white"
    : "border-white/20 text-white";

const DailyDrop = () => {
  const puzzle = useMemo(() => puzzleForDay(), []);
  const [open, setOpen] = useState(false);

  // Game state
  const [guesses, setGuesses] = useState([]); // submitted words
  const [current, setCurrent] = useState("");
  const [status, setStatus] = useState("playing"); // playing | won | lost
  const [shake, setShake] = useState(false);
  const [copied, setCopied] = useState(false);

  // Stats
  const [stats, setStats] = useState(() =>
    readJSON(STORAGE.stats, { streak: 0, maxStreak: 0, lastPlayedDay: null, lastPlayedId: null })
  );

  // Countdown to next drop
  const [countdown, setCountdown] = useState("");

  // Reward claim (finale only)
  const [claimState, setClaimState] = useState("idle");
  const [claimMessage, setClaimMessage] = useState("");

  // Restore today's board
  useEffect(() => {
    const saved = readJSON(STORAGE.board(puzzle.id), null);
    if (saved) {
      setGuesses(saved.guesses || []);
      setStatus(saved.status || "playing");
    }
  }, [puzzle.id]);

  const persistBoard = useCallback(
    (g, s) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE.board(puzzle.id), JSON.stringify({ guesses: g, status: s }));
      }
    },
    [puzzle.id]
  );

  const recordResult = useCallback(
    (won, attempts) => {
      setStats((prev) => {
        if (prev.lastPlayedId === puzzle.id) return prev; // already counted today
        const day = dayNumber(puzzle.id);
        const continued = prev.lastPlayedDay === day - 1;
        const streak = won ? (continued ? prev.streak : 0) + 1 : 0;
        const next = {
          streak,
          maxStreak: Math.max(prev.maxStreak || 0, streak),
          lastPlayedDay: day,
          lastPlayedId: puzzle.id,
          lastAttempts: won ? attempts : null,
        };
        if (typeof window !== "undefined") localStorage.setItem(STORAGE.stats, JSON.stringify(next));
        return next;
      });
    },
    [puzzle.id]
  );

  const submit = useCallback(() => {
    if (status !== "playing") return;
    if (current.length !== WORD_LEN) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }
    const nextGuesses = [...guesses, current];
    let nextStatus = "playing";
    if (current === puzzle.word) nextStatus = "won";
    else if (nextGuesses.length >= MAX_GUESSES) nextStatus = "lost";

    setGuesses(nextGuesses);
    setCurrent("");
    setStatus(nextStatus);
    persistBoard(nextGuesses, nextStatus);
    if (nextStatus === "won") recordResult(true, nextGuesses.length);
    if (nextStatus === "lost") recordResult(false);
  }, [status, current, guesses, puzzle.word, persistBoard, recordResult]);

  const handleKey = useCallback(
    (key) => {
      if (status !== "playing") return;
      if (key === "ENTER") return submit();
      if (key === "DEL") return setCurrent((c) => c.slice(0, -1));
      if (/^[A-Z]$/.test(key)) setCurrent((c) => (c.length < WORD_LEN ? c + key : c));
    },
    [status, submit]
  );

  // Physical keyboard
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Enter") handleKey("ENTER");
      else if (e.key === "Backspace") handleKey("DEL");
      else if (/^[a-zA-Z]$/.test(e.key)) handleKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handleKey]);

  // Countdown to next UTC midnight
  useEffect(() => {
    if (!open || status === "playing") return;
    const tick = () => {
      const now = new Date();
      const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
      const diff = Math.max(0, next - now.getTime());
      const h = String(Math.floor(diff / 3.6e6)).padStart(2, "0");
      const m = String(Math.floor((diff % 3.6e6) / 6e4)).padStart(2, "0");
      const s = String(Math.floor((diff % 6e4) / 1000)).padStart(2, "0");
      setCountdown(`${h}:${m}:${s}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [open, status]);

  // Letter → best status for the keyboard
  const letterStatus = useMemo(() => {
    const map = {};
    const rank = { absent: 0, present: 1, correct: 2 };
    for (const g of guesses) {
      const score = scoreGuess(g, puzzle.word);
      g.split("").forEach((ch, i) => {
        if (!map[ch] || rank[score[i]] > rank[map[ch]]) map[ch] = score[i];
      });
    }
    return map;
  }, [guesses, puzzle.word]);

  const shareGrid = () => {
    const header = `Re:Config Daily Drop #${puzzle.no} ${status === "won" ? guesses.length : "X"}/${MAX_GUESSES}`;
    const grid = guesses
      .map((g) => scoreGuess(g, puzzle.word).map((s) => EMOJI[s]).join(""))
      .join("\n");
    const text = `${header}\n${grid}\n🔓 web3phc.lbdao.xyz/reconfig`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  const handleClaim = async () => {
    if (!isRewardWindowOpen()) return setClaimState("closed");
    setClaimState("claiming");
    setClaimMessage("");
    try {
      const result = await claimReward();
      setClaimState(result.status === "winner" ? "winner" : result.status === "closed" ? "closed" : "taken");
    } catch (err) {
      setClaimState("error");
      setClaimMessage(err instanceof ClaimError ? err.message : "Something went wrong. Try again.");
    }
  };

  const playedToday = status !== "playing";
  const showFinaleReward = puzzle.isFinale && status === "won";

  return (
    <>
      {/* Floating launcher */}
      <motion.button
        type="button"
        onClick={() => setOpen(true)}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Open the Re:Config Daily Drop puzzle"
        className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[9998] bg-black/90 backdrop-blur-md border-2 border-white/20 hover:border-brand-primary/60 rounded-2xl shadow-[0_0_25px_rgba(0,0,0,0.8)] transition-colors flex items-center gap-2 px-5 h-12"
      >
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-primary whitespace-nowrap">
          🎯 Daily Drop
        </span>
        {stats.streak > 0 && (
          <span className="font-mono text-[11px] font-bold text-orange-400">🔥{stats.streak}</span>
        )}
        {!playedToday && <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />}
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm bg-[#0a0a0a] border-2 border-brand-primary/40 rounded-3xl shadow-[0_0_60px_rgba(254,101,0,0.25)] p-5 sm:p-6 flex flex-col items-center"
            >
              {/* Header */}
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="absolute top-3 right-4 text-zinc-500 hover:text-white text-xl leading-none"
              >
                ×
              </button>
              <p className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                {puzzle.isFinale ? "🏆 Finale Drop" : `Daily Drop #${puzzle.no}`}
              </p>
              <h3 className="font-['Righteous'] text-2xl uppercase tracking-wide text-white mt-1">
                Re:<span className="text-brand-primary">Config</span>
              </h3>
              <p className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mt-1">
                🔥 {stats.streak} streak · max {stats.maxStreak || 0}
              </p>

              {/* Board */}
              <div className="grid gap-1.5 my-5" style={{ gridTemplateRows: `repeat(${MAX_GUESSES}, 1fr)` }}>
                {Array.from({ length: MAX_GUESSES }).map((_, row) => {
                  const guess = guesses[row];
                  const isCurrentRow = row === guesses.length && status === "playing";
                  const score = guess ? scoreGuess(guess, puzzle.word) : null;
                  return (
                    <motion.div
                      key={row}
                      animate={isCurrentRow && shake ? { x: [-6, 6, -4, 4, 0] } : {}}
                      transition={{ duration: 0.35 }}
                      className="grid gap-1.5"
                      style={{ gridTemplateColumns: `repeat(${WORD_LEN}, 1fr)` }}
                    >
                      {Array.from({ length: WORD_LEN }).map((__, col) => {
                        const letter = guess ? guess[col] : isCurrentRow ? current[col] : "";
                        const state = score ? score[col] : "";
                        return (
                          <div
                            key={col}
                            className={`w-12 h-12 sm:w-[52px] sm:h-[52px] flex items-center justify-center rounded-md border-2 font-bold text-xl uppercase ${tileClass(state)} ${
                              letter && !state ? "border-white/40" : ""
                            }`}
                          >
                            {letter || ""}
                          </div>
                        );
                      })}
                    </motion.div>
                  );
                })}
              </div>

              {/* End-of-game panel OR keyboard */}
              {playedToday ? (
                <div className="w-full flex flex-col items-center gap-3">
                  {status === "won" ? (
                    <p className="font-mono text-green-400 text-sm uppercase tracking-widest font-bold">
                      Solved in {guesses.length}/{MAX_GUESSES} 🎉
                    </p>
                  ) : (
                    <p className="font-mono text-zinc-300 text-sm uppercase tracking-widest">
                      Answer: <span className="text-brand-primary font-bold">{puzzle.word}</span>
                    </p>
                  )}

                  {showFinaleReward ? (
                    <FinaleReward
                      claimState={claimState}
                      claimMessage={claimMessage}
                      onClaim={handleClaim}
                    />
                  ) : (
                    <button
                      type="button"
                      onClick={shareGrid}
                      className="px-7 py-2.5 bg-brand-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform"
                    >
                      {copied ? "Copied!" : "Share result"}
                    </button>
                  )}

                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    Next drop in <span className="text-white tabular-nums">{countdown}</span>
                  </p>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-1.5 select-none">
                  {KEYS.map((row, ri) => (
                    <div key={ri} className="flex justify-center gap-1.5">
                      {ri === 2 && (
                        <KeyBtn label="ENTER" wide onClick={() => handleKey("ENTER")} />
                      )}
                      {row.split("").map((k) => (
                        <KeyBtn key={k} label={k} state={letterStatus[k]} onClick={() => handleKey(k)} />
                      ))}
                      {ri === 2 && <KeyBtn label="⌫" wide onClick={() => handleKey("DEL")} />}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const KeyBtn = ({ label, state, wide, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`h-11 rounded-md font-bold uppercase text-xs sm:text-sm transition-colors ${
      wide ? "px-2.5 text-[10px]" : "flex-1 min-w-[26px]"
    } ${
      state === "correct"
        ? "bg-green-600 text-white"
        : state === "present"
        ? "bg-yellow-500 text-black"
        : state === "absent"
        ? "bg-zinc-800 text-zinc-500"
        : "bg-zinc-700 text-white hover:bg-zinc-600"
    }`}
  >
    {label}
  </button>
);

const FinaleReward = ({ claimState, claimMessage, onClaim }) =>
  claimState === "winner" ? (
    <div className="flex flex-col items-center gap-1 text-center">
      <p className="font-mono text-green-400 text-xs uppercase tracking-widest font-bold">🏆 You claimed it first!</p>
      <p className="text-zinc-300 text-[11px] max-w-[260px]">
        Your wallet is locked in as the winner of {REWARD_PRIZE_TEXT}. Redemption details are on their way.
      </p>
    </div>
  ) : claimState === "taken" ? (
    <p className="font-mono text-zinc-400 text-[11px] uppercase tracking-widest text-center">
      Reward already claimed by another builder.
    </p>
  ) : claimState === "closed" ? (
    <p className="font-mono text-zinc-400 text-[11px] uppercase tracking-widest text-center">
      The reward window has closed.
    </p>
  ) : (
    <div className="flex flex-col items-center gap-2 text-center">
      <p className="text-zinc-300 text-[11px] max-w-[260px]">
        First to solve the Finale Drop wins {REWARD_PRIZE_TEXT} — paid to your wallet.
      </p>
      <button
        type="button"
        onClick={onClaim}
        disabled={claimState === "claiming"}
        className="px-7 py-2.5 bg-brand-primary text-black font-bold uppercase tracking-widest text-xs rounded-full hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
      >
        {claimState === "claiming" ? "Confirm in wallet…" : "Claim reward"}
      </button>
      {claimState === "error" && <p className="font-mono text-red-400 text-[10px] max-w-[260px]">{claimMessage}</p>}
    </div>
  );

export default DailyDrop;
