const cardTemplate = document.querySelector('#card-template').content;

// Функция создания карточек:
export function createCard(card, deleteCardEvent, likeTheCardFunc, openImagePopupFunc) {
    
    const cardElement = cardTemplate.cloneNode(true); // Клонирую содержимое карточки
    const deleteButton = cardElement.querySelector('.card__delete-button'); // Кнопка удаления
    const cardImage = cardElement.querySelector('.card__image'); // Картинки внутри карточек
    
    // Добавляю данные из cards.js:
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    
    deleteButton.addEventListener('mousedown', deleteCardEvent); // Event вызывающий функцию удаления карточки
    cardImage.addEventListener('mousedown', () => {openImagePopupFunc(card.link, card.name)});

    cardElement.querySelector('.card__like-button').addEventListener('mousedown', (evt) => {likeTheCardFunc(evt)});

    return cardElement; // Возвращаю готовую карточку
}

// Функция удаления карточки:
export function deleteCard() {
    
    this.closest('.card').remove();
}

// функция лайка карточки:
export function likeTheCard (evt) {
    
    evt.target.classList.toggle('card__like-button_is-active');
}
