import express from 'express';
import { z } from 'zod';
import { pool } from './db.js';

export const router = express.Router();

const BookSchema = z.object({
  title:        z.string().min(1, 'Title is required'),
  author:       z.string().min(1, 'Author is required'),
  publishYear:  z.number().int().min(1000).max(new Date().getFullYear()),
  isbn:         z.string().min(10, 'ISBN must be at least 10 characters'),
  genre:        z.string().min(1, 'Genre is required'),
});

router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT 
         id,
         title,
         author,
         publish_year AS publishYear,
         isbn,
         genre,
         created_at AS createdAt,
         updated_at AS updatedAt
       FROM books
       ORDER BY id DESC`
    );
    res.json(rows);
  } catch (err) {
    console.error('GET /api/books error:', err);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT 
         id,
         title,
         author,
         publish_year AS publishYear,
         isbn,
         genre,
         created_at AS createdAt,
         updated_at AS updatedAt
       FROM books
       WHERE id = ?`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Book not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error('GET /api/books/:id error:', err);
    res.status(500).json({ error: 'Failed to fetch book' });
  }
});

router.post('/', async (req, res) => {
  try {
    const book = BookSchema.parse(req.body);
    const [result] = await pool.execute(
      `INSERT INTO books (title, author, publish_year, isbn, genre)
       VALUES (?, ?, ?, ?, ?)`,
      [book.title, book.author, book.publishYear, book.isbn, book.genre]
    );
    res.status(201).json({ id: result.insertId, ...book });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    console.error('POST /api/books error:', err);
    res.status(500).json({ error: 'Failed to create book' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const book = BookSchema.parse(req.body);
    const [result] = await pool.execute(
      `UPDATE books SET
         title = ?,
         author = ?,
         publish_year = ?,
         isbn = ?,
         genre = ?
       WHERE id = ?`,
      [book.title, book.author, book.publishYear, book.isbn, book.genre, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Book not found' });
    res.json({ id: Number(req.params.id), ...book });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({ error: err.errors });
    }
    console.error('PUT /api/books/:id error:', err);
    res.status(500).json({ error: 'Failed to update book' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const [result] = await pool.execute(
      'DELETE FROM books WHERE id = ?',
      [req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Book not found' });
    res.status(204).send();
  } catch (err) {
    console.error('DELETE /api/books/:id error:', err);
    res.status(500).json({ error: 'Failed to delete book' });
  }
});