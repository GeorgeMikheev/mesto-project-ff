// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

//Переменные:
const places = document.querySelector('.places'); // Секция с карточками
const cardList = places.querySelector('.places__list'); // Список карточек
const cardTemplet = document.querySelector('#card-template').content; // Выбрал template карточки со свойством content 
    



//Функция создания и удаления карточки:

function addCards(card) {
    const cardElement = cardTemplet.cloneNode(true); // Клонирую содержимое карточки
    const deletButton = cardElement.querySelector('.card__delete-button');
    

    // Добавляю данные из cards.js:
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.name;
    cardElement.querySelector('.card__title').textContent = card.name;

    // Добавляю карточки на страницу:
    cardList.append(cardElement);


    // Удаление карточки:
    
    deletButton.addEventListener('click', function () {
        deletButton.closest('.card').remove()     
    });
};

//Вывод карточек:

initialCards.forEach((card) => addCards(card));