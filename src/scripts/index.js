import {closePopup, openPopup} from './modal.js';
import {likeTheCard, createCard, deleteCard} from './card.js';
import {initialCards} from "./cards";

export const cardsContainer = document.querySelector('.places__list');
export const addCardPopup = document.querySelector('.popup_type_new-card');
export const addCardWindowForm = addCardPopup.querySelector('.popup__form');


export const profileEditBtn = document.querySelector('.profile__edit-button');
export const profileEditPopup = document.querySelector('.popup_type_edit');
export const addCardBtn = document.querySelector('.profile__add-button');
export const formElement = profileEditPopup.querySelector('.popup__form');
export const nameInput = formElement.querySelector('.popup__input_type_name');
export const jobInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const nameCard = document.querySelector('.popup__input_type_card-name');
const linkToImg = document.querySelector('.popup__input_type_url');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const closeButtons = document.querySelectorAll('.popup__close');

initialCards.forEach((card) => cardsContainer.append(createCard(card, deleteCard, likeTheCard, openImagePopup)));

// Функция добавления своих карточек:
function addUsersCards (evt) {
    
    evt.preventDefault();
    const card = {
        name: nameCard.value,
        link: linkToImg.value
    }

    const cardElement = createCard(card, deleteCard, likeTheCard, openImagePopup);
    cardsContainer.prepend(cardElement);

    evt.target.reset();
    closePopup(addCardPopup);
}

// Добавил возможность редактирование информации профиля:

function handleFormSubmit(evt) {
    
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    evt.target.reset();
    closePopup(profileEditPopup);
}

// Функция открытия попапа с картинкой:
function openImagePopup (src, alt) {
    
    popupImage.src = src;
    popupImage.alt = alt;
    popupTypeImage.querySelector('.popup__caption').textContent = alt;

    openPopup(popupTypeImage);
}


// Вызовы функции открытия попапов:
profileEditBtn.addEventListener('mousedown', () => {
    
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    openPopup(profileEditPopup);
});

addCardBtn.addEventListener('mousedown', () => {openPopup(addCardPopup)});

// Вызовы функции закрытия попапов:
closeButtons.forEach((button) => {
    
    const popup = button.closest('.popup');
    button.addEventListener('click', () => closePopup(popup));
});

formElement.addEventListener('submit', handleFormSubmit);
addCardWindowForm.addEventListener('submit', addUsersCards);
