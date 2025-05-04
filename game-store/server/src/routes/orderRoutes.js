const express = require('express');
const { addToCart, getCart, removeFromCart, placeOrder, getLatestOrder, confirmPayment } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/cart', authMiddleware, addToCart);
router.get('/cart', authMiddleware, getCart);
router.delete('/cart/:gameId', authMiddleware, removeFromCart);
router.post('/', authMiddleware, placeOrder);
router.get('/latest', authMiddleware, getLatestOrder);
router.post('/payment', authMiddleware, confirmPayment);

module.exports = router;
