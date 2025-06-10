// index.js
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db');
require('dotenv').config();
const protectedRoute = require('./routes/protected');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 8000;
app.use('/api', protectedRoute);
connectDB();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
