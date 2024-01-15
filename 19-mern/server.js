const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mern-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const uzrasSchema = new mongoose.Schema({
  pavadinimas: String,
  turinys: String
});

const Uzras = mongoose.model('Uzras', uzrasSchema);

// Pridėti užrašą
app.post('/api/uzrasai', async (req, res) => {
  const { pavadinimas, turinys } = req.body;
  
  const naujasUzras = new Uzras({ pavadinimas, turinys });
  
  try {
    const issaugotasUzras = await naujasUzras.save();
    res.json(issaugotasUzras);
  } catch (error) {
    console.error(error);
    res.status(500).send('Serverio klaida.');
  }
});

// Gauti visus užrašus
app.get('/api/uzrasai', async (req, res) => {
  const uzrasai = await Uzras.find();
  res.json(uzrasai);
});

// Gauti vieną užrašą pagal ID
app.get('/api/uzrasai/:id', async (req, res) => {
  const uzras = await Uzras.findById(req.params.id);
  res.json(uzras);
});

// Atnaujinti užrašą pagal ID
app.put('/api/uzrasai/:id', async (req, res) => {
  const { pavadinimas, turinys } = req.body;

  try {
    const atnaujintasUzras = await Uzras.findByIdAndUpdate(
      req.params.id,
      { pavadinimas, turinys },
      { new: true }
    );
    res.json(atnaujintasUzras);
  } catch (error) {
    console.error(error);
    res.status(500).send('Serverio klaida.');
  }
});

// Ištrinti užrašą pagal ID
app.delete('/api/uzrasai/:id', async (req, res) => {
  try {
    await Uzras.findByIdAndDelete(req.params.id);
    res.json({ message: 'Užrašas ištrintas sėkmingai.' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Serverio klaida.');
  }
});

app.listen(PORT, () => {
  console.log(`Serveris veikia portu ${PORT}`);
});
