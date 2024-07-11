import React from 'react';

const Score = ({ currentScore, bestScore }) => {
  return (
    <div className="scoreboard">
      <p>Current Score: {currentScore}</p>
      <p>Best Score: {bestScore}</p>
    </div>
  );
}

export default Score;
