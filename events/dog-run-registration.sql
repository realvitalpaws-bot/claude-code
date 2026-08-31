-- The 1.5KM Dog Run — registration storage
-- Mirrors the existing public."BarkingLotEventRSVP" pattern:
-- RLS on, anon may INSERT only (no public SELECT of registrant data).

create table if not exists public."DogRunRegistration" (
  id               uuid primary key default gen_random_uuid(),
  created_at       timestamptz not null default now(),

  first_name       text    not null,
  last_name        text    not null,
  phone            text    not null,   -- normalised to 10 digits by the page
  email            text    not null,
  city             text    not null,
  age_group        text    not null,

  dog_name         text    not null,
  dog_breed        text    not null,
  dog_age          text    not null,
  dog_weight       text,
  dog_vaccinated   text    not null,

  tshirt_size      text,
  heard_from       text,
  notes            text,

  consent_health   boolean not null default false,
  consent_leash    boolean not null default false,
  consent_media    boolean not null default false,
  join_whatsapp    boolean not null default false,

  ticket_type      text    not null default 'early_bird',
  amount           integer not null default 199,

  -- filled in by the team once the WhatsApp payment link is settled
  payment_status   text    not null default 'pending'
);

alter table public."DogRunRegistration" enable row level security;

-- Public registration form: insert only, same as the Barking Lot RSVP table.
drop policy if exists "Anyone can register" on public."DogRunRegistration";
create policy "Anyone can register"
  on public."DogRunRegistration"
  for insert
  to anon, authenticated
  with check (true);

create index if not exists dogrun_created_at_idx on public."DogRunRegistration" (created_at desc);
create index if not exists dogrun_phone_idx      on public."DogRunRegistration" (phone);
