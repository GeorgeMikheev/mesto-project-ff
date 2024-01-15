// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//Переменные:

const places = document.querySelector('.places'); // Секция с карточками
const cardList = places.querySelector('.places__list'); // Список карточек
const cardTemplet = document.querySelector('#card-template').content; // Выбрал template карточки со свойством content 


//Функция создания карточки:

function addCards(card) {
    const cardElement = cardTemplet.cloneNode(true); // Клонирую содержимое карточки

    // Добавляю данные из cards.js:
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    // Добавляю карточки на страницу:
    cardList.append(cardElement);
};

//Вывод карточек:

initialCards.forEach((card) => addCards(card));

//Удаление карточки:

const deletButton = cardTemplet.querySelector('card__delete-button');

deletButton.addEventListener('click', function () {
    alert('check');
});


