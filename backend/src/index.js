import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db.js';
import { router } from './routes.js';

dotenv.config();
const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Book Management API'));

app.use('/api/books', router);

pool.getConnection()
  .then(conn => {
    conn.release();
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Não foi possível conectar ao banco:', err.message);
    process.exit(1);
  });