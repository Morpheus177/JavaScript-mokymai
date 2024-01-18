const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/memorygame', { useNewUrlParser: true, useUnifiedTopology: true });

const cardSchema = new mongoose.Schema({
  id: Number,
  symbol: String,
  flipped: Boolean,
  isMatched: Boolean,
  imageUrl: String,
});

const Card = mongoose.model('Card', cardSchema);

app.get('/api/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
