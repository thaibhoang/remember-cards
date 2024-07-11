import React, { useState, useEffect } from 'react';
import Card from './Card';
import Score from './Score';

const Board = ({ cards, setCards }) => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [openedList, setOpenedList] = useState([]);

  useEffect(() => {
    shuffleCard();
  }, [currentScore]);

  const shuffleCard = () => {
    setCards([...cards].sort(() => Math.random() - 0.5));
  }

  const handleCardClick = (cardId) => {
    if (openedList.includes(cardId)) {
      setCurrentScore(0);
      setOpenedList([]); 
    } else {
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setOpenedList([...openedList, cardId]);
      newScore > bestScore && setBestScore(newScore);
    }
  }

  return (
    <div className="board">    
      <Score currentScore={currentScore} bestScore={bestScore} />
      <div className="card-grid flex flex-wrap">
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            onClick={() => handleCardClick(card.id)} 
          />
        ))}
      </div>
    </div>
  );
}

export default Board;
