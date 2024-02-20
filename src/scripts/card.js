import {closePopup, openPopup} from './modal.js';
import {addCardPopup, cardsContainer, cardTemplate, popupTypeImage} from './index.js';

// Функция создания карточек:
export function createCard(card, deleteCardEvent, likeTheCard, openImagePopup) {
    const cardElement = cardTemplate.cloneNode(true); // Клонирую содержимое карточки
    const deleteButton = cardElement.querySelector('.card__delete-button'); // Кнопка удаления
    const cardImage = cardElement.querySelector('.card__image'); // Картинки внутри карточек
    
    // Добавляю данные из cards.js:
    cardImage.src = card.link;
    cardImage.alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;
    
    deleteButton.addEventListener('click', deleteCardEvent); // Event вызывающий функцию удаления карточки
    cardImage.addEventListener('click', () => {openImagePopup(card.link, card.name)});

    cardElement.querySelector('.card__like-button').addEventListener('click', (evt) => {likeTheCard(evt)});

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

// Добавление своих карточек:
/*export function addUsersCards (evt) {
    evt.preventDefault();
    
    const nameCard = document.querySelector('.popup__input_type_card-name');
    const linkToImg = document.querySelector('.popup__input_type_url');
    const card = {
        name: nameCard.value,
        link: linkToImg.value
    }

    const cardElement = createCard(card, deleteCard, likeTheCard, openImagePopup);

    cardsContainer.prepend(cardElement);

    nameCard.value = '';
    linkToImg.value = '';
    closePopup(addCardPopup);
}*/

// Функция открытия попапа с картинкой:
export function openImagePopup (src, alt) {
    const popupImage = popupTypeImage.querySelector('.popup__image');
    const closeBtn = popupTypeImage.querySelector('.popup__close');

    popupImage.src = src;
    popupImage.alt = alt;
    popupTypeImage.querySelector('.popup__caption').textContent = alt;

    openPopup(popupTypeImage);
    
    closeBtn.addEventListener('click', () => {closePopup(popupTypeImage)});
}