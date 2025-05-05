const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Route imports
const taskRoutes = require('./routes/taskRoutes'); // updated filename
const visitorRoutes = require('./routes/visitors');
const userRoutes = require('./routes/userRoutes');

// API routes
app.use('/api/tasks', taskRoutes);
app.use('/api/visitors', visitorRoutes);
app.use('/api/users', userRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello, backend world!');
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
