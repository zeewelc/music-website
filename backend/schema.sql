CREATE TABLE IF NOT EXISTS releases (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  cover_url TEXT,
  release_date TEXT,
  spotify_url TEXT, apple_url TEXT, youtube_url TEXT, bandcamp_url TEXT,
  featured INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS shows (
  id INTEGER PRIMARY KEY,
  date TEXT NOT NULL,
  city TEXT, country TEXT,
  venue TEXT, festival TEXT,
  ticket_url TEXT, notify_url TEXT,
  status TEXT DEFAULT 'upcoming'
);

CREATE TABLE IF NOT EXISTS merch (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  price_cents INTEGER NOT NULL,
  image_url TEXT,
  product_url TEXT,
  available INTEGER DEFAULT 1
);
