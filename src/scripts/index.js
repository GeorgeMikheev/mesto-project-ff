import {closePopup, openPopup} from './modal.js';
import {likeTheCard, createCard, deleteCard} from './card.js';
import {initialCards} from './cards';

const cardsContainer = document.querySelector('.places__list');
const addCardPopup = document.querySelector('.popup_type_new-card');
const addCardWindowForm = addCardPopup.querySelector('.popup__form');
const profileEditBtn = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('.popup_type_edit');
const addCardBtn = document.querySelector('.profile__add-button');
const formElement = profileEditPopup.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__description');
const nameCard = document.querySelector('.popup__input_type_card-name');
const linkToImg = document.querySelector('.popup__input_type_url');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = popupTypeImage.querySelector('.popup__image');
const popups = document.querySelectorAll('.popup');

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

function handleProfileFormSubmit(evt) {
    
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
popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_is-opened')) {
            closePopup(popup);
        }

        if (evt.target.classList.contains('popup__close')) {
            closePopup(popup);
        }
    });
});

formElement.addEventListener('submit', handleProfileFormSubmit);
addCardWindowForm.addEventListener('submit', addUsersCards);
