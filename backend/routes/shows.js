import express from 'express';

export default function showsRouter(db) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    try {
      const shows = await db.all('SELECT * FROM shows');
      res.json(shows);
    } catch (err) {
      console.error('Error fetching shows:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  return router;
}
