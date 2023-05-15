import "../index.css";
import React, { useEffect, useState } from "react";
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInitialUser()
      .then(
        (userInfo) => (
          setUserName(userInfo.name),
          setUserDescription(userInfo.about),
          setUserAvatar(userInfo.avatar)
        )
      )
      .catch((err) => console.log(`Ошибка ${err}`));
  }, [])
  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(`Ошибка ${err}`));
  }, []);
  return (
    <div>
      <section className="profile">
        <div className="profile__avatar-area">
          <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          <button className="profile__avatar-edit" aria-label="Редактировать аватар профиля" onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__info-name">{userName}</h1>
          <button className="profile__info-button" type="button" aria-label="Редактировать профиль" onClick={onEditProfile}></button>
          <p className="profile__info-job">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить фото" onClick={onAddPlace}></button>
      </section>
      <section className="elements">
        <ul className="elements__list">
          {cards.map((card) => (
            <li key={card._id}>
              <Card card={card} onCardClick={onCardClick} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Main
