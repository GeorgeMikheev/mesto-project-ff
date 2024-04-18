import { closePopup, openPopup } from "./modal.js";
import { likeTheCard, createCard, deleteCard } from "./card.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getCards,
  getUsersProfiles,
  sendingProfileData,
  addNewCard,
  changeAvatar,
} from "./api.js";

const cardsContainer = document.querySelector(".places__list");
const addCardPopup = document.querySelector(".popup_type_new-card");
const addCardWindowForm = addCardPopup.querySelector(".popup__form");
const profileEditBtn = document.querySelector(".profile__edit-button");
const profileEditPopup = document.querySelector(".popup_type_edit");
const addCardBtn = document.querySelector(".profile__add-button");
const formElement = profileEditPopup.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const profileName = document.querySelector(".profile__title");
const profileJob = document.querySelector(".profile__description");
const nameCard = document.querySelector(".popup__input_type_card-name");
const linkToImg = document.querySelector(".popup__input_type_url");
const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");
const deleteCardPopup = document.querySelector(".popup_type_delete_card");
const deleteCardPopupBtn = deleteCardPopup.querySelector(".popup__button");
const avatar = document.querySelector(".profile__image");
const avatarBtn = avatar.querySelector(".profile__image-hover");
const avatarPopup = document.querySelector(".popup_type_avatar");
const avatarForm = avatarPopup.querySelector(".popup__form");
const avatarInput = avatarForm.querySelector(".popup__input");
const popups = document.querySelectorAll(".popup");
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

let userID = "";
const promises = [getCards(), getUsersProfiles()];

// Добавление карточек с сервера:
Promise.all(promises)
  .then(([cards, usersProfiles]) => {
    profileName.textContent = usersProfiles.name;
    profileJob.textContent = usersProfiles.about;
    avatar.style.backgroundImage = `url('${usersProfiles.avatar}')`;
    userID = usersProfiles._id;

    cards.forEach((card) => {
      cardsContainer.append(
        createCard(card, openeDeletePopup, likeTheCard, openImagePopup, userID)
      );
    });
  })
  .catch((err) => console.log(err));

// Функция замены автара пользователя:
function addNewAvatarImg(evt) {
  evt.preventDefault();
  showSaveMessage(avatarForm.querySelector(".popup__button"));
  changeAvatar(avatarInput.value);
  avatar.style.backgroundImage = `url('${avatarInput.value}')`;
  evt.target.reset();
  closePopup(avatarPopup);
}

// Функция редактирования информации профиля:
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  showSaveMessage(formElement.querySelector(".popup__button"));
  sendingProfileData(nameInput.value, jobInput.value);
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  evt.target.reset();
  closePopup(profileEditPopup);
}

// Функция добавления своих карточек:
function addUsersCards(evt) {
  evt.preventDefault();

  showSaveMessage(addCardWindowForm.querySelector(".popup__button"));

  addNewCard(nameCard.value, linkToImg.value)
    .then((res) => {
      const cardElement = createCard(
        res,
        openeDeletePopup,
        likeTheCard,
        openImagePopup,
        userID
      );
      cardsContainer.prepend(cardElement);
    })
    .catch((err) => console.log(err));

  evt.target.reset();
  closePopup(addCardPopup);
}

// Функция открытия попапа с картинкой:
function openImagePopup(src, alt) {
  popupImage.src = src;
  popupImage.alt = alt;
  popupCaption.textContent = alt;
  openPopup(popupTypeImage);
}

// Функци открытия попапа удаления карточки:
function openeDeletePopup(card) {
  openPopup(deleteCardPopup);
  deleteCardPopupBtn.addEventListener("mousedown", () =>
    deleteCard(card, closePopup, deleteCardPopup)
  );
}

// Вызовы функции открытия попапов:

// Попап радектирования информации профиля:
profileEditBtn.addEventListener("mousedown", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  formElement.querySelector(".popup__button").textContent = "Сохранить";
  openPopup(profileEditPopup);
  clearValidation(profileEditPopup, validationConfig);
});

// Попап добавления карточки:
addCardBtn.addEventListener("mousedown", () => {
  addCardWindowForm.querySelector(".popup__button").textContent = "Сохранить";
  openPopup(addCardPopup);
  clearValidation(addCardPopup, validationConfig);
});

// Попап замены аватара пользователя:
avatarBtn.addEventListener("mousedown", () => {
  avatarInput.value = "";
  avatarForm.querySelector(".popup__button").textContent = "Сохранить";
  openPopup(avatarPopup);
  clearValidation(avatarPopup, validationConfig);
});

// Вызовы функции закрытия попапов:
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (
      evt.target.classList.contains("popup_is-opened") ||
      evt.target.classList.contains("popup__close")
    ) {
      closePopup(popup);
    }
  });
});

// Улучшение UX:
function showSaveMessage(btn) {
  btn.textContent = "Сохранение...";
}

formElement.addEventListener("submit", handleProfileFormSubmit);
addCardWindowForm.addEventListener("submit", addUsersCards);
avatarForm.addEventListener("submit", addNewAvatarImg);

enableValidation(validationConfig);
