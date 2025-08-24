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

// GET comments filtered by page or name
router.get('/filter', (req, res) => {
  const { page, name } = req.query;

  let query = 'SELECT * FROM comments WHERE 1=1';
  const params = [];

  if (page) {
    query += ' AND page = ?';
    params.push(page);
  }

  if (name) {
    query += ' AND name = ?';
    params.push(name);
  }

  db.all(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// DELETE a comment by ID
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM comments WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Comment not found' });
    res.json({ message: 'Comment deleted successfully' });
  });
});

// PUT to update a comment by ID
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { page, name, text } = req.body;

  if (!page || !name || !text) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  db.run(
    'UPDATE comments SET page = ?, name = ?, text = ? WHERE id = ?',
    [page, name, text, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Comment not found' });
      res.json({ message: 'Comment updated successfully' });
    }
  );
});


module.exports = router;
