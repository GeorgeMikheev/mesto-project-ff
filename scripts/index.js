// Переменные:
const cardsContainer = document.querySelector('.places__list'); // Список карточек
const cardTemplete = document.querySelector('#card-template').content; // Выбрал template карточки со свойством content 

// Функция создания карточек:
function createCard(card, deleteCardEvent) {
    const cardElement = cardTemplete.cloneNode(true); // Клонирую содержимое карточки
    const deleteButton = cardElement.querySelector('.card__delete-button'); // Кнопка удаления
    const cardImage = cardElement.querySelector('.card__image'); // Картинки внутри карточек
    
    // Добавляю данные из card.js:
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    
    deleteButton.addEventListener('click', deleteCardEvent); // Event вызывающий функцию удаления карточки

    return cardElement; // Возвращаю готовую карточку
}

// Функция удаления карточки:
function deleteCard() {
    this.closest('.card').remove();
}

// Добавление карточки в разметку:
initialCards.forEach((card) => cardsContainer.append(createCard(card, deleteCard)));