import { Router } from 'express';
export default function showsRouter(db) {
  const r = Router();
  r.get('/upcoming', async (req,res)=>{
    const rows = await db.all("SELECT * FROM shows WHERE status='upcoming' ORDER BY date(date) ASC");
    res.json(rows);
  });
  return r;
}
