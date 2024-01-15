const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Prisijunkite prie MongoDB
mongoose.connect('mongodb://localhost:27017/mern_projektas', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB prisijungta sėkmingai');
});

// Routes
const uzrasaiRouter = require('./routes/uzrasai');

app.use('/uzrasai', uzrasaiRouter);

// Pradėkite serverį
app.listen(port, () => {
    console.log(`Serveris veikia portu ${port}`);
});
