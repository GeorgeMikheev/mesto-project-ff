import {closePopup, handleFormSubmit, openPopup} from './modal.js';
import {/*addUsersCards,*/ likeTheCard, createCard, deleteCard, openImagePopup} from './card.js';
import {initialCards} from "./cards";

// Переменные из card
export const cardsContainer = document.querySelector('.places__list'); // Список карточек
export const cardTemplate = document.querySelector('#card-template').content; // Выбрал template карточки со свойством content
export const addCardPopup = document.querySelector('.popup_type_new-card');
export const addCardWindowForm = addCardPopup.querySelector('.popup__form');
export const popupTypeImage = document.querySelector('.popup_type_image');

// Переменные из popups
export const profileEditBtn = document.querySelector('.profile__edit-button');
export const profileEditPopup = document.querySelector('.popup_type_edit');
export const profileEditCloseBtn = profileEditPopup.querySelector('.popup__close');
export const addCardBtn = document.querySelector('.profile__add-button');
export const addCardCloseBtn = addCardPopup.querySelector('.popup__close');
export const formElement = profileEditPopup.querySelector('.popup__form');
export const nameInput = formElement.querySelector('.popup__input_type_name');
export const jobInput = formElement.querySelector('.popup__input_type_description'); 

initialCards.forEach((card) => cardsContainer.append(createCard(card, deleteCard, likeTheCard, openImagePopup)));

// Функция добавления своих карточек:
function addUsersCards (evt) {
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
}

// Вызовы функции открытия попапов:
profileEditBtn.addEventListener('click', () => {openPopup(profileEditPopup)});
addCardBtn.addEventListener('click', () => {openPopup(addCardPopup)});

// Вызовы функции закрытия попапов:
profileEditCloseBtn.addEventListener('click', () => {closePopup(profileEditPopup)});
addCardCloseBtn.addEventListener('click', () => {closePopup(addCardPopup)});

formElement.addEventListener('submit', handleFormSubmit);
addCardWindowForm.addEventListener('submit', addUsersCards);