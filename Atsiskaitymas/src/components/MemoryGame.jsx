import React, { useState, useEffect } from 'react';

const MemoryGame = () => {
  const [isComparing, setIsComparing] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isClickable, setIsClickable] = useState(true);



  const handleCompare = () => {
    const [firstCard, secondCard] = flippedCards;
  
    if (firstCard && secondCard && firstCard.id === secondCard.id) {
      // Nustatome, kad abi vienodos kortelės yra atitiktos
      setCards((prevCards) =>
        prevCards.map((card) =>
          card === firstCard
            ? { ...card, isMatched: true }
            : card === secondCard
            ? { ...card, flipped: true, isMatched: true }
            : card
        )
      );
    } else {
      // Jei kortelės nesutampa, užverčiame atgal atvertas kortes po laiko
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card === firstCard || card === secondCard
              ? { ...card, flipped: false }
              : card
          )
        );
      }, 1000);
    }
  
    setFlippedCards([]);
    setAttempts(attempts + 1);
  };
  // ...

const handleCardClick = (clickedCard) => {
  if (
    flippedCards.length < 2 &&
    !flippedCards.includes(clickedCard) &&
    !matchedCards.includes(clickedCard)
  ) {
    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, flipped: true } : card
    );
    setFlippedCards([...flippedCards, clickedCard]);
    setCards(updatedCards);
    if (flippedCards.length === 1) {
      setIsComparing(true);
      setTimeout(() => {
        handleCompare();
        setIsComparing(false);
      }, 1000);
    }
  } else {
    // Užverčiame atgal atvertas kortes, kurios nesutampa su nauja kortele
    const updatedCards = cards.map((card) =>
      !matchedCards.includes(card) && card.flipped ? { ...card, flipped: false } : card
    );
    setCards(updatedCards);
    setFlippedCards([clickedCard]);
  }
};

// ...


  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.symbol === secondCard.symbol) {
        setMatchedCards([...matchedCards, firstCard, secondCard]);
      }

      setTimeout(() => {
        setFlippedCards([]);
        setAttempts(attempts + 1);
      }, 3000);
    }
  }, [flippedCards, matchedCards, attempts]);

  useEffect(() => {
    if (isGameFinished) {
      alert(`Sveikiname! Jūs laimėjote žaidimą per ${attempts} bandymus!`);
      generateCards();
      setAttempts(0);
      setMatchedCards([]);
      setIsGameFinished(false); // Nustatykite atgal į false naujam žaidimui
    }
  }, [isGameFinished]);
  
  
  
  useEffect(() => {
    generateCards();
  }, []);

  const generateCards = () => {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'Y', 'J', 'K'];

    const initialCards = [
      { id: 1, symbol: symbols[0], flipped: false, isMatched: false },
      { id: 2, symbol: symbols[1], flipped: false, isMatched: false },
      { id: 3, symbol: symbols[2], flipped: false, isMatched: false },
      { id: 4, symbol: symbols[3], flipped: false, isMatched: false },
      { id: 5, symbol: symbols[4], flipped: false, isMatched: false },
      { id: 6, symbol: symbols[5], flipped: false, isMatched: false },
      { id: 7, symbol: symbols[6], flipped: false, isMatched: false },
      { id: 8, symbol: symbols[7], flipped: false, isMatched: false },
      { id: 9, symbol: symbols[8], flipped: false, isMatched: false },
      { id: 10, symbol: symbols[9], flipped: false, isMatched: false },
      { id: 11, symbol: symbols[10], flipped: false, isMatched: false },
      { id: 12, symbol: symbols[11], flipped: false, isMatched: false },
    ];

    const generatedCards = [];

    // Sukurkime poras kortelių
    for (let i = 0; i < initialCards.length; i++) {
      const card1 = { ...initialCards[i], id: i * 2, imageUrl: `/photo/photo${i + 1}.jpg` };
      const card2 = { ...initialCards[i], id: i * 2 + 1, imageUrl: `/photo/photo${i + 1}.jpg` };
      generatedCards.push(card1, card2);
    }

    // Permaišykime kortelių masyvą
    const shuffledCards = shuffleArray(generatedCards);

    // Nustatykime kortelių masyvą naudojant setCards
    setCards(shuffledCards);
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div>
      <h1>Atminties lavinimo žaidimas</h1>
      <div className="cards-container">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped ? 'flipped' : ''}`}
            onClick={() => handleCardClick(card)}
          >
            {card.flipped ? (
              <img src={card.imageUrl} alt={`Card ${card.id}`} className="card-image" />
            ) : (
              '❓'
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemoryGame;
