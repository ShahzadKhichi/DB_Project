exports.addToCart = async (req, res) => {
  const { gameId } = req.body;
  const userId = req.user.userId;
  const db = req.app.locals.db;
  try {
    let [orderRows] = await db.query('SELECT * FROM orders WHERE user_id = ? AND status = ?', [userId, 'Processing']);
    let order = orderRows[0];
    if (!order) {
      const [result] = await db.query('INSERT INTO orders (user_id, total_amount) VALUES (?, ?)', [userId, 0]);
      order = { id: result.insertId };
    }
    const [existingItem] = await db.query('SELECT * FROM order_games WHERE order_id = ? AND game_id = ?', [order.id, gameId]);
    if (existingItem[0]) {
      await db.query('UPDATE order_games SET quantity = quantity + 1 WHERE order_id = ? AND game_id = ?', [order.id, gameId]);
    } else {
      await db.query('INSERT INTO order_games (order_id, game_id, quantity) VALUES (?, ?, ?)', [order.id, gameId, 1]);
    }
    res.json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCart = async (req, res) => {
  const userId = req.user.userId;
  const db = req.app.locals.db;
  try {
    const [orderRows] = await db.query(
      'SELECT g.id AS gameId, g.title, g.price, og.quantity ' +
      'FROM orders o ' +
      'JOIN order_games og ON o.id = og.order_id ' +
      'JOIN games g ON og.game_id = g.id ' +
      'WHERE o.user_id = ? AND o.status = ?',
      [userId, 'Processing']
    );
    res.json(orderRows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  const userId = req.user.userId;
  const { gameId } = req.params;
  const db = req.app.locals.db;
  try {
    const [orderRows] = await db.query('SELECT * FROM orders WHERE user_id = ? AND status = ?', [userId, 'Processing']);
    const order = orderRows[0];
    if (!order) return res.status(404).json({ error: 'Cart not found' });
    await db.query('DELETE FROM order_games WHERE order_id = ? AND game_id = ?', [order.id, gameId]);
    const [remainingItems] = await db.query('SELECT * FROM order_games WHERE order_id = ?', [order.id]);
    res.json(remainingItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.placeOrder = async (req, res) => {
  const userId = req.user.userId;
  const db = req.app.locals.db;
  try {
    const [orderRows] = await db.query(
      'SELECT o.id, g.id AS game_id, g.price, og.quantity, i.stock ' +
      'FROM orders o ' +
      'JOIN order_games og ON o.id = og.order_id ' +
      'JOIN games g ON og.game_id = g.id ' +
      'JOIN inventory i ON g.id = i.game_id ' +
      'WHERE o.user_id = ? AND o.status = ?',
      [userId, 'Processing']
    );
    if (!orderRows[0]) return res.status(404).json({ error: 'Cart not found' });
    let total = 0;
    for (const item of orderRows) {
      if (item.stock < item.quantity) return res.status(400).json({ error: 'Insufficient stock' });
      total += item.price * item.quantity;
      await db.query('UPDATE inventory SET stock = stock - ? WHERE game_id = ?', [item.quantity, item.game_id]);
    }
    await db.query('UPDATE orders SET total_amount = ?, status = ? WHERE id = ?', [total, 'Shipped', orderRows[0].id]);
    const [updatedOrder] = await db.query('SELECT * FROM orders WHERE id = ?', [orderRows[0].id]);
    res.json(updatedOrder[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getLatestOrder = async (req, res) => {
  const userId = req.user.userId;
  const db = req.app.locals.db;
  try {
    const [orderRows] = await db.query('SELECT * FROM orders WHERE user_id = ? ORDER BY order_date DESC LIMIT 1', [userId]);
    if (!orderRows[0]) return res.status(404).json({ error: 'No orders found' });
    res.json(orderRows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.confirmPayment = async (req, res) => {
  const { orderId } = req.body;
  const db = req.app.locals.db;
  try {
    await db.query(
      'INSERT INTO payments (order_id, payment_status, payment_method) VALUES (?, ?, ?)',
      [orderId, 'Completed', 'Credit Card']
    );
    res.json({ message: 'Payment confirmed' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
