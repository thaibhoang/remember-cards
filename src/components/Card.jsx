import React from 'react';

const Card = ({ card, onClick }) => {
  return (
    <div className="card p-3" onClick={onClick}>
      <img alt={card.name} src={card.img} />
      <p>{card.name}</p>
    </div>
  );
}

export default Card;
