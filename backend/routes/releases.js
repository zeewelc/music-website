import { Router } from 'express';
export default function releasesRouter(db) {
  const r = Router();
  r.get('/', async (req,res)=>{
    const rows = await db.all('SELECT * FROM releases ORDER BY date(release_date) DESC');
    res.json(rows);
  });
  r.get('/featured', async (req,res)=>{
    const rows = await db.all('SELECT * FROM releases WHERE featured=1 ORDER BY date(release_date) DESC LIMIT 1');
    res.json(rows);
  });
  r.get('/:id', async (req,res)=>{
    const row = await db.get('SELECT * FROM releases WHERE id=?', req.params.id);
    if (!row) return res.status(404).json({error:'Not found'});
    res.json(row);
  });
  return r;
}
