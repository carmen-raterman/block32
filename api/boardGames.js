const express = require('express');
const router = express.Router();

// GET - /api/board-games - get all board games
router.get('/', async (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

// GET - /api/board-games/:id - get a single board game by id
router.get('/:id', async (req, res) => {
    try {
       
    } catch (error) {
       
    }
});

// POST - /api/board-games - create a new board game
router.post('/', async (req, res) => {
    try {

    } catch (error) {
        next(error);
    }
});

// PUT - /api/board-games/:id - update a single board game by id
router.put('/:id', async (req, res) => {
    try {
      
    } catch (error) {
       
    }
});

// DELETE - /api/board-games/:id - delete a single board game by id
router.delete('/:id', async (req, res) => {
    try {
      
    } catch (error) {
       
    }
});

module.exports = router;