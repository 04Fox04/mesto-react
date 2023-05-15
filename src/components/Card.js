import "../index.css";
import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  };
  return (
    <div className="elements__item">
      <button className="elements__delete" type="button" aria-label="Удалить"></button>
      <img className="elements__image" src={card.link} alt={card.name} onClick={() => handleClick(card)} />
      <div className="elements__container">
        <h3 className="elements__title">{card.name}</h3>
        <div>
          <button className="elements__like" type="button" aria-label="Нравится"></button>
          <div className="elements__number-like">{card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
