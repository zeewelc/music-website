
INSERT INTO releases (title, cover_url, release_date, spotify_url, youtube_url, featured)
VALUES
('Astral Drift', 'https://picsum.photos/seed/astral/600/600', '2025-06-01', 'https://open.spotify.com/', 'https://youtube.com/', 1),
('Neon Grove', 'https://picsum.photos/seed/neon/600/600', '2025-04-15', 'https://open.spotify.com/', 'https://youtube.com/', 0);

INSERT INTO shows (date, city, country, venue, festival, ticket_url, notify_url, status)
VALUES
('2025-09-13','Gévezé','France', 'La Flume Enchantée', NULL, 'https://tickets.example.com/1', NULL, 'upcoming'),
('2025-10-03','Philadelphia','USA', 'NOTO Philadelphia', NULL, 'https://tickets.example.com/2', NULL, 'upcoming');

INSERT INTO merch (name, price_cents, image_url, product_url)
VALUES
('Logo Tee', 2500, 'https://picsum.photos/seed/tee/600/600', 'https://store.example.com/tee'),
('Cap', 2000, 'https://picsum.photos/seed/cap/600/600', 'https://store.example.com/cap');
