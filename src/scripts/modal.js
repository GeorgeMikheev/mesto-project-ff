import {profileEditPopup, nameInput, jobInput} from './index.js';
export {closePopupTauchEscape, openPopup, closePopup, handleFormSubmit, closePopupClickOverlay}
// Открытие и закрытие модальных окон:

// Функция закрытия попапов при нажатии на escape:
function closePopupTauchEscape (evt, popup) {
    if (evt.key === 'Escape') {
        closePopup(popup);
    }
}

// Функция открытия попапов:
function openPopup (popup) {
    document.addEventListener('keydown', (evt) => {closePopupTauchEscape(evt, popup)});
    document.addEventListener('click', (evt) => {closePopupClickOverlay(evt, popup)});
    popup.classList.add('popup_is-opened');
}

// Функция закрытия попапов:
function closePopup (popup) {
    document.removeEventListener('keydown', (evt) => {closePopupTauchEscape(evt, popup)});
    document.removeEventListener('click', (evt) => {closePopupClickOverlay(evt, popup)});
    popup.classList.remove('popup_is-opened');
}

// Добавил возможность редактирование информации профиля:

function handleFormSubmit(evt) {
    evt.preventDefault();
    document.querySelector('.profile__title').textContent = nameInput.value;
    document.querySelector('.profile__description').textContent = jobInput.value;
    nameInput.value = '';
    jobInput.value = '';
    closePopup(profileEditPopup);
}

// Закрытие попапа при клике на фон:
function closePopupClickOverlay (evt, popup) {
    if (evt.target === popup) {
        closePopup(popup);
    }
}