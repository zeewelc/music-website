const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

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
