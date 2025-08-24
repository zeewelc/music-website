import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createDb } from './db.js';
import { security } from './middleware/security.js';
import releasesRouter from './routes/releases.js';
import showsRouter from './routes/shows.js';
import merchRouter from './routes/merch.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
security(app);

const sql = fs.readFileSync(path.join(__dirname,'schema.sql'),'utf8');

const start = async () => {
  const db = await createDb();
  await db.exec(sql);
  // Seed if empty
  const count = await db.get('SELECT COUNT(*) as c FROM releases');
  if (count.c === 0) {
    const seed = fs.readFileSync(path.join(__dirname,'seed.sql'),'utf8');
    await db.exec(seed);
  }

  app.get('/api/health', (req,res)=> res.json({ ok: true }));

  app.use('/api/releases', releasesRouter(db));
  app.use('/api/shows', showsRouter(db));
  app.use('/api/merch', merchRouter(db));

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`API running on :${port}`));
};

start().catch(err=>{ console.error(err); process.exit(1); });
