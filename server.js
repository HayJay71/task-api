const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

const taskRoutes = require('./routes/tasks');
const visitorRoutes = require('./routes/visitors');

app.use('/api/tasks', taskRoutes);
app.use('/api/visitors', visitorRoutes);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, backend world!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
