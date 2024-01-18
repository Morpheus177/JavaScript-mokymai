import React, { useState, useEffect, useRef } from 'react';
import './MemoryGame.css';


const MemoryGame = () => {
  const [isComparing, setIsComparing] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [isGameFinished, setIsGameFinished] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const [preventOpening, setPreventOpening] = useState(false);
  const isComparingRef = useRef(false);

  const handleCompare = async () => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard && secondCard && firstCard.id === secondCard.id) {
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
      setPreventOpening(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCards((prevCards) =>
        prevCards.map((card) =>
          card === firstCard || card === secondCard
            ? { ...card, flipped: false }
            : card
        )
      );
      setFlippedCards([]);
      setAttempts(attempts + 1);
      setPreventOpening(false);
    }

    setIsComparing(false);
  };

  const handleCardClick = async (clickedCard) => {
    if (
      flippedCards.length < 2 &&
      !flippedCards.some((card) => card.id === clickedCard.id) &&
      !matchedCards.some((card) => card.id === clickedCard.id) &&
      !isComparingRef.current &&
      !preventOpening
    ) {
      isComparingRef.current = true;
  
      const updatedCards = cards.map((card) =>
        card.id === clickedCard.id ? { ...card, flipped: true } : card
      );
      setFlippedCards([...flippedCards, clickedCard]);
      setCards(updatedCards);
  
      if (flippedCards.length === 1) {
        setIsComparing(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        handleCompare();
      }
  
      isComparingRef.current = false;
    } else {
      const updatedCards = cards.map((card) =>
        !matchedCards.some((matchedCard) => matchedCard.id === card.id) && card.flipped
          ? { ...card, flipped: false }
          : card
      );
      setCards(updatedCards);
      setFlippedCards([clickedCard]);
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
    if (isGameFinished) {
      
      showGameFinishedMessage();
    }
  }, [isGameFinished, attempts, ]);
  
  const showGameFinishedMessage = () => {
    alert(`Sveikiname! Jūs laimėjote žaidimą per ${attempts === 0 ? 1 : attempts} bandymus!`);
    generateCards();
    setAttempts(0);
    setMatchedCards([]);
    setIsGameFinished(false);
  };
  
  
  useEffect(() => {
    const allPairsMatched = cards.every((card) => card.isMatched);
  
    console.log("Matched cards:", matchedCards); 
    console.log("All pairs matched:", allPairsMatched);
  
    if (allPairsMatched) {
      setIsGameFinished(true);
    }
  }, [cards, matchedCards]);
  
  const generateCards = () => {
    const symbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

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

    
    for (let i = 0; i < initialCards.length; i++) {
      const card1 = { ...initialCards[i], id: i * 2, symbol: symbols[i], imageUrl: `/photo/photo${i + 1}.jpg` };
const card2 = { ...initialCards[i], id: i * 2 + 1, symbol: symbols[i], imageUrl: `/photo/photo${i + 1}.jpg` };

      generatedCards.push(card1, card2);
    }

    
    const shuffledCards = shuffleArray(generatedCards);

    
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
