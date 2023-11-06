const express = require('express');
const router = express.Router();
const pool = require('../db/client');


// GET - /api/board-games - get all board games
router.get('/', async (req, res, next) => {
    try {
        const query = "SELECT * FROM boardgames";
        const result = await pool.query(query);
        return res.json(result.rows);
    } catch (error) {
        next(error);
    }
});

// GET - /api/board-games/:id - get a single board game by id
router.get('/:id', async (req, res, next) => {
    try {
       const query = "SELECT * FROM boardgames WHERE id = $4";
       const values = [req.params.id];
       const result = await pool.query(query, values);
       return res.json(result.rows[0]);
    } catch (error) {
       next(error);
    }
});

// POST - /api/board-games - create a new board game
router.post('/', async (req, res) => {
    try {
        const { name, description, price, in_stock, is_popular, img_url } = req.body;
        const query =
          'INSERT INTO boardgames (name, description, price, in_stock, is_popular, img_url) VALUES ("testing", "the best game ever", 100, false, false, "https://i.imgur.com/3J3wW9S.png") RETURNING *';
        const values = [name, description, price, in_stock, is_popular, img_url];
        const result = await pool.query(query, values);
        return res.json(result.rows[0]);
      } catch (error) {
        next(error);
      }
});

// PUT - /api/board-games/:id - update a single board game by id
router.put('/:id', async (req, res) => {
    try {
        const { name, description, price, in_stock, is_popular, img_url } = req.body;
        const query =
          'UPDATE boardgames SET name = $1, description = $2, price = $3, in_stock = $4, is_popular = $5, img_url = $6 WHERE id = $7 RETURNING *';
        const values = [name, description, price, in_stock, is_popular, img_url, req.params.id];
        const result = await pool.query(query, values);
        return res.json(result.rows[0]);
      } catch (error) {
        next(error);
      }
});

// DELETE - /api/board-games/:id - delete a single board game by id
router.delete('/:id', async (req, res) => {
    try {
        const query = 'DELETE FROM boardgames WHERE id = $1 RETURNING *';
        const values = [req.params.id];
        const result = await pool.query(query, values);
        res.json(result.rows[0]);
      } catch (error) {
        next(error);
      }
});
    
module.exports = router;