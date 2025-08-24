
import { Router } from 'express';
export default function merchRouter(db) {
  const r = Router();
  r.get('/', async (req,res)=>{
    const rows = await db.all('SELECT * FROM merch WHERE available=1 ORDER BY id DESC');
    res.json(rows);
  });
  return r;
}
