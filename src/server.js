require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 8000;

connectDB();

app.use(cors());
app.use(express.json());

app.use(routes);

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
