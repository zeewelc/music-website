const express = require('express');
const router = express.Router();
const db = require('../db');

// Test route to confirm it's working
router.get('/testThis', (req, res) => {
  res.send('Comments route is working!');
});

// GET all comments
router.get('/', (req, res) => {
  db.all('SELECT * FROM comments', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// POST a new comment
router.post('/', (req, res) => {
  const { page, name, text } = req.body;
  if (!page || !name || !text) return res.status(400).json({ error: 'Missing fields' });

  db.run('INSERT INTO comments (page, name, text) VALUES (?, ?, ?)', [page, name, text], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID });
  });
});

module.exports = router;
