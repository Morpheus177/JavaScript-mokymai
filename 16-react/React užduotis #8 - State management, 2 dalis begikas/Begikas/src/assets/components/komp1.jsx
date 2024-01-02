// Begikai.jsx
import React, { useState } from 'react';

const Begikai = () => {
  const [runner1Time, setRunner1Time] = useState(0);
  const [runner2Time, setRunner2Time] = useState(0);
  const [result, setResult] = useState('');

  const handleRunner1TimeChange = (event) => {
    setRunner1Time(parseFloat(event.target.value) || 0);
  };

  const handleRunner2TimeChange = (event) => {
    setRunner2Time(parseFloat(event.target.value) || 0);
  };

  const compareRunners = () => {
    if (runner1Time > 0 && runner2Time > 0) {
      const winner = runner1Time < runner2Time ? 'Bėgikas 1' : 'Bėgikas 2';
      const timeDifference = Math.abs(runner1Time - runner2Time);
      setResult(`${winner} buvo greitesnis per ${timeDifference.toFixed(2)} sekundes.`);
    } else {
      setResult('Įveskite abiejų bėgikų laikus.');
    }
  };

  return (
    <div>
      <h2>Begikai</h2>
      <label htmlFor="runner1">Bėgikas 1 laikas (sekundės):</label>
      <input type="number" id="runner1" placeholder="Įveskite laiką" onChange={handleRunner1TimeChange} />

      <label htmlFor="runner2">Bėgikas 2 laikas (sekundės):</label>
      <input type="number" id="runner2" placeholder="Įveskite laiką" onChange={handleRunner2TimeChange} />

      <button onClick={compareRunners}>Palyginti bėgikus</button>

      <p>{result}</p>
    </div>
  );
};

export default Begikai;
