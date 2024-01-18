const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.static(path.join(__dirname, 'build')));

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// Serve React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
