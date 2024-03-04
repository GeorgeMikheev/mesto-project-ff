import './pages/index.css'; 
import './scripts/index.js';
import './scripts/validation.js';

const addIcon = new URL('./images/add-icon.svg', import.meta.url);
const avatar = new URL('./images/avatar.jpg', import.meta.url);
const firstCard = new URL('./images/card_1.jpg', import.meta.url);
const secondCard = new URL('./images/card_2.jpg', import.meta.url);
const therdCard = new URL('./images/card_3.jpg', import.meta.url);
const close = new URL('./images/close.svg', import.meta.url);
const deleteIcon = new URL('./images/delete-icon.svg', import.meta.url);
const editIcon = new URL('./images/edit-icon.svg', import.meta.url);
const likeAcrive = new URL('./images/like-active.svg', import.meta.url);
const likeInacrive = new URL('./images/like-inactive.svg', import.meta.url);
const logo = new URL('./images/logo.svg', import.meta.url);

const images = [
    {name: 'add-icon', link: addIcon},
    {name: 'avatar', link: avatar},
    {name: 'card-1', link: firstCard},
    {name: 'card-2', link: secondCard},
    {name: 'card-3', link: therdCard},
    {name: 'close', link: close},
    {name: 'delete-icon', link: deleteIcon},
    {name: 'edit-icon', link: editIcon},
    {name: 'like-active', link: likeAcrive},
    {name: 'like-inactive', link: likeInacrive},
    {name: 'logo', link: logo}
]