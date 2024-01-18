import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [uzrasai, setUzrasai] = useState([]);
  const [naujasUzrasas, setNaujasUzrasas] = useState({ pavadinimas: '', turinys: '' });
  const [pasirinktasUzrasas, setPasirinktasUzrasas] = useState(null);

  useEffect(() => {
    gautiUzrasus();
  }, []);

  const gautiUzrasus = () => {
    axios.get('http://localhost:3001/api/uzrasai')
      .then(response => setUzrasai(response.data))
      .catch(error => console.error('Nepavyko gauti užrašų:', error));
  };

  const sukurtiUzrasa = () => {
    axios.post('http://localhost:3001/api/uzrasai', naujasUzrasas)
      .then(response => {
        console.log(response.data);
        gautiUzrasus();
        setNaujasUzrasas({ pavadinimas: '', turinys: '' });
      })
      .catch(error => console.error('Nepavyko sukurti užrašo:', error));
  };

  const pasirinktiUzrasa = (id) => {
    axios.get(`http://localhost:3001/api/uzrasai/${id}`)
      .then(response => setPasirinktasUzrasas(response.data))
      .catch(error => console.error('Nepavyko gauti pasirinkto užrašo:', error));
  };

  const atnaujintiUzrasa = (id) => {
    axios.put(`http://localhost:3001/api/uzrasai/${id}`, naujasUzrasas)
      .then(response => {
        console.log(response.data);
        gautiUzrasus();
        setPasirinktasUzrasas(null);
      })
      .catch(error => console.error('Nepavyko atnaujinti užrašo:', error));
  };

  const istrintiUzrasa = (id) => {
    axios.delete(`http://localhost:3001/api/uzrasai/${id}`)
      .then(response => {
        console.log(response.data);
        gautiUzrasus();
        setPasirinktasUzrasas(null);
      })
      .catch(error => console.error('Nepavyko ištrinti užrašo:', error));
  };

  return (
    <div>
      <h1>Užrašų Projektas</h1>
      <div>
        <h2>Visi Užrašai</h2>
        <ul>
          {uzrasai.map(uzrasas => (
            <li key={uzrasas._id} onClick={() => pasirinktiUzrasa(uzrasas._id)}>
              {uzrasas.pavadinimas}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Pasirinktas Užrašas</h2>
        {pasirinktasUzrasas ? (
          <div>
            <h3>{pasirinktasUzrasas.pavadinimas}</h3>
            <p>{pasirinktasUzrasas.turinys}</p>
            <button onClick={() => atnaujintiUzrasa(pasirinktasUzrasas._id)}>Atnaujinti</button>
            <button onClick={() => istrintiUzrasa(pasirinktasUzrasas._id)}>Ištrinti</button>
          </div>
        ) : (
          <p>Pasirinkite užrašą iš sąrašo</p>
        )}
      </div>
      <div>
        <h2>Sukurti Naują Užrašą</h2>
        <form onSubmit={(e) => { e.preventDefault(); sukurtiUzrasa(); }}>
          <label>
            Pavadinimas:
            <input
              type="text"
              value={naujasUzrasas.pavadinimas}
              onChange={(e) => setNaujasUzrasas({ ...naujasUzrasas, pavadinimas: e.target.value })}
            />
          </label>
          <label>
            Turinys:
            <textarea
              value={naujasUzrasas.turinys}
              onChange={(e) => setNaujasUzrasas({ ...naujasUzrasas, turinys: e.target.value })}
            />
          </label>
          <button type="submit">Sukurti Užrašą</button>
        </form>
      </div>
    </div>
  );
}

export default App;
