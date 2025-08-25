
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/music.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      page TEXT NOT NULL,
      name TEXT NOT NULL,
      text TEXT NOT NULL,
      timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `, (err) => {
    if (err) {
      console.error('Error creating comments table:', err.message);
    } else {
      console.log('Comments table created successfully.');
    }
  });
});

db.close();
