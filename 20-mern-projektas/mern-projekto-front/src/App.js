import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [užrašai, setUžrašai] = useState([]);
  const [pasirinktasUžrašas, setPasirinktasUžrašas] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/užrašai')
      .then(response => setUžrašai(response.data))
      .catch(error => console.error(`Klaida: ${error}`));
  }, []);

  const gautiUžrašą = (id) => {
    axios.get(`http://localhost:5000/užrašai/${id}`)
      .then(response => setPasirinktasUžrašas(response.data))
      .catch(error => console.error(`Klaida: ${error}`));
  };

  const pridėtiUžrašą = () => {
    const naujasUžrašas = {
      pavadinimas: "Naujas užrašas",
      turinys: "Užrašo turinys"
    };

    axios.post('http://localhost:5000/užrašai/pridėti', naujasUžrašas)
      .then(response => console.log(response.data))
      .catch(error => console.error(`Klaida: ${error}`));
  };

  return (
    <div>
      <h1>Užrašų sąrašas</h1>
      <ul>
        {užrašai.map(užrašas => (
          <li key={užrašas._id} onClick={() => gautiUžrašą(užrašas._id)}>
            {užrašas.pavadinimas}
          </li>
        ))}
      </ul>
      <button onClick={pridėtiUžrašą}>Pridėti naują užrašą</button>

      {pasirinktasUžrašas && (
        <div>
          <h2>{pasirinktasUžrašas.pavadinimas}</h2>
          <p>{pasirinktasUžrašas.turinys}</p>
        </div>
      )}
    </div>
  );
}

export default App;
