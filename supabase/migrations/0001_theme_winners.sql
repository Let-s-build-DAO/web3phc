-- Re:Config "Crack the Code" — first-solver reward ledger.
--
-- Fairness model: the FIRST valid claim wins. We enforce this with a
-- single-row lock: a partial unique index guarantees at most one winner
-- row can ever exist, so concurrent claims race on an atomic INSERT and
-- exactly one succeeds.

create table if not exists public.theme_winners (
    id            bigint generated always as identity primary key,
    -- Only ever one winner. `slot` is always 1; the unique index enforces it.
    slot          smallint not null default 1,
    wallet        text     not null,
    signature     text     not null,
    claimed_at    timestamptz not null default now()
);

-- At most one winner, ever.
create unique index if not exists theme_winners_single
    on public.theme_winners (slot);

-- Block all client-side access; only the Edge Function (service role) writes.
alter table public.theme_winners enable row level security;
-- (No policies = no anon/auth access. Service role bypasses RLS.)
