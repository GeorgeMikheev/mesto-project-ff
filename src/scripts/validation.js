//todo Разобраться почему не стираются сообщения об ошибки после закрытия модальных окон

import { setInterval } from "core-js";

function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.popup__form'));

    formList.forEach((formElement) => {
        setEventListeners(formElement)
    });
}

// Функция добавления класса ошибки:
const showInputError = (formElement, inputElement, errorMassage) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add('form__input_type_error');
    formError.textContent = errorMassage;
    formError.classList.add('form__input-error_active');
} 

// Функция удаления класса ошибки:
const hideInputError = (formElement, inputElement) => {
    const formError = formElement.querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove('form__input_type_error');
    formError.textContent = '';
    formError.classList.remove('form__input-error_active');
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement) => {

    if (hasInvalidInput(inputList)) {
        buttonElement.setAttribute('disabled', '');
    } else {
        buttonElement.removeAttribute('disabled');        
    }
}

// Функция проверки валидности полей: !formInput.validity.valid
const isValid = (formElement, inputElement) => {

    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(formElement, inputElement);
    }
}

function setEventListeners (formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
    const buttonElement = formElement.querySelector('.button');

    toggleButtonState(inputList, buttonElement);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement);
            toggleButtonState(inputList, buttonElement);
        });
    });
}

enableValidation();
