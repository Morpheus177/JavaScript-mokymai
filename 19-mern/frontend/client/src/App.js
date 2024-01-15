import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [uzrasai, setUzrasai] = useState([]);
  const [naujasUzrasas, setNaujasUzrasas] = useState({ title: '', content: '' });
  const [pasirinktasUzrasas, setPasirinktasUzrasas] = useState(null);

  useEffect(() => {
    axios.post('http://localhost:3001/api/uzrasai', naujasUzrasas)

      .then(response => setUzrasai(response.data))
      .catch(error => console.error('Nepavyko gauti užrašų:', error));
  }, []);

  const sukurtiUzrasa = () => {
    console.log('Naujas užrašas:', naujasUzrasas); // Įsitikiname, kad gauname tinkamus duomenis
    axios.post('http://localhost:3001/api/uzrasai', naujasUzrasas)
  .then(response => {
    console.log(response.data.message);
    setUzrasai([...uzrasai, naujasUzrasas]);
    setNaujasUzrasas({ title: '', content: '' });
  })
  .catch(error => console.error('Nepavyko sukurti užrašo:', error));

  };
  

  const pasirinktiUzrasa = (id) => {
    axios.get(`http://localhost:3001/apiuzrasai/${id}`)
      .then(response => setPasirinktasUzrasas(response.data))
      .catch(error => console.error('Nepavyko gauti pasirinkto užrašo:', error));
  };
  
  return (
    <div>
      <h1>Užrašų Projektas</h1>
      <div>
        <h2>Visi Užrašai</h2>
        <ul>
  {uzrasai.map(uzrasas => (
    <li key={uzrasas._id} onClick={() => pasirinktiUzrasa(uzrasas._id)}>
      {uzrasas.title}
    </li>
  ))}
</ul>

      </div>
      <div>
        <h2>Pasirinktas Užrašas</h2>
        {pasirinktasUzrasas ? (
          <div>
            <h3>{pasirinktasUzrasas.title}</h3>
            <p>{pasirinktasUzrasas.content}</p>
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
              value={naujasUzrasas.title}
              onChange={(e) => setNaujasUzrasas({ ...naujasUzrasas, title: e.target.value })}
            />
          </label>
          <label>
            Turinys:
            <textarea
              value={naujasUzrasas.content}
              onChange={(e) => setNaujasUzrasas({ ...naujasUzrasas, content: e.target.value })}
            />
          </label>
          <button type="submit">Sukurti Užrašą</button>
        </form>
      </div>
    </div>
  );
}

export default App;
