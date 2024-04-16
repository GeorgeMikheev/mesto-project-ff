const cardTemplate = document.querySelector("#card-template").content;

// Функция создания карточек:
export function createCard(
  card,
  openPopupEvent,
  likeTheCardFunc,
  openImagePopupFunc,
  userID
) {
  const cardElement = cardTemplate.cloneNode(true); // Клонирую содержимое карточки
  const deleteButton = cardElement.querySelector(".card__delete-button"); // Кнопка удаления
  const cardImage = cardElement.querySelector(".card__image"); // Картинки внутри карточек
  const likes = cardElement.querySelector('.likes');
  
  likes.textContent = card.likes.length;

  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardElement.querySelector(".card__title").textContent = card.name;

  if (card.owner._id !== userID) deleteButton.remove();

  deleteButton.addEventListener("mousedown", () => openPopupEvent(card._id));
  
  cardImage.addEventListener("mousedown", () => {
    openImagePopupFunc(card.link, card.name);
  });

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("mousedown", (evt) => {
      likeTheCardFunc(evt);
    });

  return cardElement; // Возвращаю готовую карточку
}

// Функция удаления карточки:
export function deleteCard(cardID, closePopupFunc, popup) {
  console.log(cardID);
  closePopupFunc(popup);
  document.removeEventListener('mousedown', popup);
  //this.closest('.card').remove();
  //document.querySelector('.card').remove();
  console.log(this.closest('.card'))
}

// функция лайка карточки:
export function likeTheCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function putLike() {
  
} 
