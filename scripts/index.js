// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//Переменные:

const places = document.querySelector('.places'); // Секция с карточками
const cardList = places.querySelector('.places__list'); // Список карточек
const cardTemplet = document.querySelector('#card-template').content; // Выбрал template карточки со свойством content 
const data = cardTemplet.cloneNode(true); // Клонировал содержимое карточки

//Функция создания карточки:

function addCards(data) {
    const cardElement = cardTemplet.querySelector('.places__item').cloneNode(true); 

    cardElement.querySelector('.card__image').src = data.link;
    cardElement.querySelector('.card__image').alt = data.name;
    cardElement.querySelector('.card__title').textContent = data.name;

    cardList.append(cardElement);
    return cardElement;
};

//Функция вывода карточек:

initialCards.forEach(function () { 
    addCards(data);
});


