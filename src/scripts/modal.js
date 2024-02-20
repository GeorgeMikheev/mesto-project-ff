// Функция открытия попапов:
export function openPopup (popup) {
    document.addEventListener('keydown', closePopupTouchEscape);
    popup.classList.add('popup_is-opened');
}

// Функция закрытия попапов:
export function closePopup (popup) {
    document.removeEventListener('keydown', closePopupTouchEscape);
    popup.classList.remove('popup_is-opened');
}

// Функция закрытия попапов при нажатии на escape:
function closePopupTouchEscape (evt) {
    
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_is-opened');
        closePopup(openPopup);
    }
}
