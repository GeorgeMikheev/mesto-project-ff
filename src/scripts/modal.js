
// Открытие и закрытие модальных окон:

// Функция открытия попапов:
export function openPopup (popup) {
    
    document.addEventListener('keydown', closePopupTauchEscape);
    document.addEventListener('mousedown', closePopupClickOverlay);
    popup.classList.add('popup_is-opened');
}

// Функция закрытия попапов:
export function closePopup (popup) {
    console.log('Check')
    document.removeEventListener('keydown', closePopupTauchEscape);
    document.removeEventListener('mousedown', closePopupClickOverlay);
    popup.classList.remove('popup_is-opened');
}


// Закрытие попапа при клике на фон:
function closePopupClickOverlay (evt) {
    
    const openPopup = document.querySelector('.popup_is-opened');

    if (evt.target === openPopup) {
        closePopup(openPopup);
    }
}

// Функция закрытия попапов при нажатии на escape:
function closePopupTauchEscape (evt) {
    
    if (evt.key === 'Escape') {
        const openPopup = document.querySelector('.popup_is-opened');
        closePopup(openPopup);
    }
}
