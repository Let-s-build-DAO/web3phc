# Re:Config "Daily Drop" — First-Solver Reward

The first wallet to solve the **Finale Drop** on `/reconfig` **before the Summit on
Oct 24, 2026** wins the reward. This doc explains how the pieces fit and how to deploy.

## How fairness works (important)

The puzzle word is derivable from the frontend (the word list + date formula ship in
the bundle), so "solving the game" is **not** the real gate — the game is the
fun/marketing funnel. The real gate is the **backend's atomic first-write**: the first
wallet to submit a valid, signed claim wins, enforced by a single-row unique index in
Postgres.

## Architecture

```
Frontend (this repo)            Supabase
─────────────────────           ──────────────────────────
DailyDrop finale panel          Edge Function claim-theme/
  └ Claim reward                   1. verify signature
     └ connect wallet              2. check deadline
     └ personal_sign               3. atomic insert (1 winner)
     └ POST claim  ───────────►    4. record winning wallet
                                   → team pays the reward to that
                                     wallet out-of-band
```

- **Frontend**: `src/lib/claimReward.js` + `src/config/reward.js`, used by
  `src/components/DailyDrop.jsx`. Zero web3 deps — uses the raw injected provider.
- **Backend**: `supabase/functions/claim-theme/` + `supabase/migrations/0001_theme_winners.sql`.

> Payout is **manual**: the function records the winning address; the team sends the
> reward to it. (No smart contract — removed by request.)

## Deploy steps

### 1. Database
```bash
supabase db push   # applies supabase/migrations/0001_theme_winners.sql
```

### 2. Edge Function secrets
```bash
supabase secrets set REWARD_DEADLINE=2026-10-24T00:00:00Z
supabase functions deploy claim-theme
```
`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically.

### 3. Frontend env (Netlify)
Set in `.env` locally / Netlify dashboard (see `.env.example`):
```
VITE_CLAIM_ENDPOINT=https://<project-ref>.supabase.co/functions/v1/claim-theme
VITE_SUPABASE_ANON_KEY=<anon key>
```
If these are unset, the game still works but the Claim button shows
"not configured yet."

### 4. Find the winner
After the deadline, the winning wallet is the single row in `theme_winners`:
```sql
select wallet, claimed_at from public.theme_winners;
```
Send the reward to that address.

## X (Twitter) login & share — Firebase

Players can log in with X from the Daily Drop modal, and share their result to X on
a win. Login is **optional** (the game works without it) and the Firebase SDK is
**lazy-loaded** only when the modal opens, so it doesn't weigh down the page.

Setup:
1. Create a Firebase project → **Authentication → Sign-in method → enable Twitter**.
   You'll need an X developer app (API key + secret) to paste into the provider.
2. In **Project settings → Your apps**, copy the web SDK config into `.env` (Netlify):
   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=<project-id>.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_APP_ID=...
   ```
3. Add your production domain under **Authentication → Settings → Authorized domains**.

If these are unset, the login button simply doesn't appear; sharing still works via the
X compose intent. Code: `src/config/firebase.js`, `src/lib/xAuth.js`, used by `DailyDrop.jsx`.

## Customizing
- **Finale puzzle (date + word)**: `FINALE` in `src/config/dailyDrop.js`.
- **Daily word pool**: `WORDS` in `src/config/dailyDrop.js`.
- **Prize wording**: `REWARD_PRIZE_TEXT` in `src/config/reward.js`.
- **Deadline**: `REWARD_DEADLINE` in `src/config/reward.js` (UI) **and** the Edge
  Function secret (enforcement).
