import React, { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);

  const generateCards = () => {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F']; 
    
    // Naudosime tik 16 simbolius
    const initialCards = [
      { id: 1, imageUrl: '/photo/photo1.jpg', symbol: symbols[0], flipped: false },
      { id: 2, imageUrl: '/photo/photo2.jpg', symbol: symbols[1], flipped: false },
      { id: 3, imageUrl: '/photo/photo3.jpg', symbol: symbols[2], flipped: false },
      { id: 4, imageUrl: '/photo/photo4.jpg', symbol: symbols[3], flipped: false },
      { id: 5, imageUrl: '/photo/photo5.jpg', symbol: symbols[4], flipped: false },
      { id: 6, imageUrl: '/photo/photo6.jpg', symbol: symbols[5], flipped: false },
      { id: 7, imageUrl: '/photo/photo7.jpg', symbol: symbols[0], flipped: false },
      { id: 8, imageUrl: '/photo/photo8.jpg', symbol: symbols[1], flipped: false },
      { id: 9, imageUrl: '/photo/photo9.jpg', symbol: symbols[2], flipped: false },
      { id: 10, imageUrl: '/photo/photo10.jpg', symbol: symbols[3], flipped: false },
      { id: 11, imageUrl: '/photo/photo11.jpg', symbol: symbols[4], flipped: false },
      { id: 12, imageUrl: '/photo/photo12.jpg', symbol: symbols[5], flipped: false },
      { id: 13, imageUrl: '/photo/photo12.jpg', symbol: symbols[5], flipped: false },
      { id: 14, imageUrl: '/photo/photo12.jpg', symbol: symbols[5], flipped: false },
      { id: 15, imageUrl: '/photo/photo12.jpg', symbol: symbols[5], flipped: false },
      { id: 16, imageUrl: '/photo/photo12.jpg', symbol: symbols[5], flipped: false },
      // ... ir kt.
    ];

    const generatedCards = [];

    // Sukurkime poras kortelių
    for (let i = 0; i < initialCards.length; i++) {
      const card1 = { ...initialCards[i], id: i * 2 };
      const card2 = { ...initialCards[i], id: i * 2 + 1 };
      generatedCards.push(card1, card2);
    }

    // Permaišykime kortelių masyvą
    const shuffledCards = shuffleArray(generatedCards);

    // Nustatykime kortelių masyvą naudojant setCards
    setCards(shuffledCards);
  };

  // Pagalbinė funkcija, skirta permaišyti masyvą
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleCardClick = (clickedCard) => {
    if (flippedCards.length < 2 && !flippedCards.includes(clickedCard) && !matchedCards.includes(clickedCard)) {
      const updatedCards = cards.map((card) =>
        card.id === clickedCard.id ? { ...card, flipped: true } : card
      );
      setFlippedCards([...flippedCards, clickedCard]);
      setCards(updatedCards);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.symbol === secondCard.symbol) {
        setMatchedCards([...matchedCards, firstCard, secondCard]);
      }

      setTimeout(() => {
        setFlippedCards([]);
        setAttempts(attempts + 1);
      }, 1000);
    }
  }, [flippedCards, matchedCards, attempts]);

  useEffect(() => {
    if (matchedCards.length === cards.length && cards.length > 0) {
      alert(`Sveikiname! Jūs laimėjote žaidimą per ${attempts} bandymus!`);
      generateCards();
      setAttempts(0);
    }
  }, [matchedCards, cards, attempts]);

  useEffect(() => {
    generateCards();
  }, []);

  return (
    <div>
      <h1>Įsiminimo žaidimas</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {card.flipped ? <img src={card.imageUrl} alt={`Card ${card.id}`} /> : '❓'}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;