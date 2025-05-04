const express = require('express');
const { getGames, getGame, addGame, deleteGame } = require('../controllers/gameController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getGames);
router.get('/:id', getGame);
router.post('/', authMiddleware, addGame);
router.delete('/:id', authMiddleware, deleteGame);

module.exports = router;
