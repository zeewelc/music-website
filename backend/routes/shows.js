import express from 'express';

export default function showsRouter(db) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const shows = await db.all('SELECT * FROM shows');
    res.json(shows);
  });

  return router;
}
