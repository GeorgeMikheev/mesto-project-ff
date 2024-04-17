import { removeCard, addLikes, removeLikes } from "./api";

const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточек:
export function createCard(
  card,
  openeDeletePopupFunc,
  likeTheCardFunc,
  openImagePopupFunc,
  userID
) {
  const cardElement = cardTemplate.cloneNode(true); // Клонирую содержимое карточки
  const deleteButton = cardElement.querySelector(".card__delete-button"); // Кнопка удаления
  const cardImage = cardElement.querySelector(".card__image"); // Картинки внутри карточек
  const likes = cardElement.querySelector('.likes');
  const likeBtn = cardElement.querySelector(".card__like-button");
  
  likes.textContent = card.likes.length;

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardImage.id = card._id;
  cardElement.querySelector(".card__title").textContent = card.name;

  if (card.owner._id !== userID) deleteButton.remove();

  if(card.likes.some(user => user._id === userID)) likeBtn.classList.toggle('card__like-button_is-active');

  deleteButton.addEventListener("mousedown", () => openeDeletePopupFunc(cardImage));
  
  cardImage.addEventListener("mousedown", () => {
    openImagePopupFunc(card.link, card.name);
  });

  likeBtn.addEventListener("mousedown", likeTheCardFunc);

  return cardElement; // Возвращаю готовую карточку
}

// Функция удаления карточки:
export function deleteCard(card, closePopupFunc, popup) {
  removeCard(card.id)
    .then(() => {
      card.closest('.card').remove();
      closePopupFunc(popup);
    })
    .catch(err => console.log(err));
}

// функция лайка карточки:
export function likeTheCard(evt) {
  const card = evt.target.closest('.card');
  const cardID = card.querySelector('.card__image').id;
  const likes = card.querySelector('.likes');

  if(evt.target.classList.contains("card__like-button_is-active")) {
    removeLikes(cardID)
      .then(res => {
        evt.target.classList.toggle("card__like-button_is-active");
        likes.textContent = res.likes.length;
      });
  } else {
    addLikes(cardID)
      .then(res => {
        evt.target.classList.toggle("card__like-button_is-active");
        likes.textContent = res.likes.length;
      });
  }
}
