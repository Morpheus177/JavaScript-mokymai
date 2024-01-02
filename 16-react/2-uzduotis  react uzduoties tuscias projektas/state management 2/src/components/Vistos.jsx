// Viščiukai.jsx
import React, { useState } from 'react';

const Vistos = () => {
  const constantOrders = 100; // Konstanta, kiek viščių kiaušinių reikia užsakyti šiandien
  const [eggOrdersInput, setEggOrdersInput] = useState(0);
  const [result, setResult] = useState('');

  const handleEggOrdersChange = (event) => {
    setEggOrdersInput(parseInt(event.target.value) || 0);
  };

  const checkOrders = () => {
    if (eggOrdersInput >= constantOrders) {
      const surplus = eggOrdersInput - constantOrders;
      setResult(`Viskas gerai! Turite perteklių: ${surplus} kiaušiniai.`);
    } else {
      const shortage = constantOrders - eggOrdersInput;
      setResult(`Nespėsite! Trūksta: ${shortage} kiaušiniai.`);
    }
  };

  return (
    <div>
      <h2>Viščiukai</h2>
      <label htmlFor="eggOrders">Šiandienos užsakymai:</label>
      <input type="number" id="eggOrders" placeholder="Įveskite kiekį" onChange={handleEggOrdersChange} />

      <button onClick={checkOrders}>Patikrinti užsakymus</button>

      <p>{result}</p>
    </div>
  );
};

export default Vistos;
