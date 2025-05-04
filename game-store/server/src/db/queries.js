const initDb = async (db) => {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      role ENUM('customer', 'admin') DEFAULT 'customer'
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS games (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      price DECIMAL(10, 2) NOT NULL,
      genre VARCHAR(255) NOT NULL,
      platform VARCHAR(255) NOT NULL,
      stock INT NOT NULL
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS orders (
      id INT AUTO_INCREMENT PRIMARY KEY,
      user_id INT NOT NULL,
      order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      total_amount DECIMAL(10, 2) NOT NULL,
      status ENUM('Processing', 'Shipped', 'Delivered') DEFAULT 'Processing',
      FOREIGN KEY (user_id) REFERENCES users(id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS order_games (
      order_id INT NOT NULL,
      game_id INT NOT NULL,
      quantity INT NOT NULL,
      PRIMARY KEY (order_id, game_id),
      FOREIGN KEY (order_id) REFERENCES orders(id),
      FOREIGN KEY (game_id) REFERENCES games(id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      order_id INT NOT NULL,
      payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
      payment_status ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
      payment_method VARCHAR(255) NOT NULL,
      FOREIGN KEY (order_id) REFERENCES orders(id)
    )
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS inventory (
      id INT AUTO_INCREMENT PRIMARY KEY,
      game_id INT NOT NULL,
      stock INT NOT NULL,
      FOREIGN KEY (game_id) REFERENCES games(id)
    )
  `);
};

module.exports = { initDb };
