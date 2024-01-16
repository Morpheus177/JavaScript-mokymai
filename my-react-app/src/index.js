import React from 'react';
import { createRoot } from 'react-dom/client';
import MemoryGame from './components/MemoryGame';
import './index.css';

const root = document.getElementById('root');

// Naudojant createRoot API
const reactRoot = createRoot(root);
reactRoot.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
);
