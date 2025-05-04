exports.getGames = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const [rows] = await db.query('SELECT * FROM games');
    res.json(rows);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getGame = async (req, res) => {
  const db = req.app.locals.db;
  try {
    const [rows] = await db.query('SELECT * FROM games WHERE id = ?', [req.params.id]);
    if (!rows[0]) return res.status(404).json({ error: 'Game not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.addGame = async (req, res) => {
  const { title, description, price, genre, platform, stock } = req.body;
  const db = req.app.locals.db;
  try {
    const [result] = await db.query(
      'INSERT INTO games (title, description, price, genre, platform, stock) VALUES (?, ?, ?, ?, ?, ?)',
      [title, description, price, genre, platform, stock]
    );
    await db.query('INSERT INTO inventory (game_id, stock) VALUES (?, ?)', [result.insertId, stock]);
    const [newGame] = await db.query('SELECT * FROM games WHERE id = ?', [result.insertId]);
    res.status(201).json(newGame[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteGame = async (req, res) => {
  const db = req.app.locals.db;
  try {
    await db.query('DELETE FROM inventory WHERE game_id = ?', [req.params.id]);
    await db.query('DELETE FROM games WHERE id = ?', [req.params.id]);
    res.json({ message: 'Game deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
