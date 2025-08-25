const express = require('express');
const cors = require('cors'); // ✅ Import CORS
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ Enable CORS for Angular frontend
app.use(cors({
  origin: 'http://localhost:4200',
  methods: ['GET', 'POST', 'DELETE'],
  credentials: true
}));

// Enable JSON parsing
app.use(express.json());

// Register routes
const commentsRouter = require('./routes/comments');
app.use('/api/comments', commentsRouter);

// Example route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
