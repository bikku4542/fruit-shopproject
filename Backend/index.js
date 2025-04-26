const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// CORS config
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API routes
app.use('/api', require('./routes/CreateUser'));
app.use('/api', require('./routes/LoginUser'));
app.use('/api', require('./routes/getUser'));
app.use('/api', require('./routes/products'));
app.use('/api', require('./routes/categories'));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
