const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const gameRoutes = require('./routes/gameRoutes');
const orderRoutes = require('./routes/orderRoutes');
const mysql = require('mysql2/promise');
const { initDb } = require('./db/queries');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const init = async () => {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  
  await initDb(db);
  console.log('MySQL connected');
  
  app.locals.db = db;
  
  app.use('/api/auth', authRoutes);
  app.use('/api/games', gameRoutes);
  app.use('/api/orders', orderRoutes);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

init().catch(err => console.error(err));
