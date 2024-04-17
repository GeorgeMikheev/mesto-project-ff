export function enableValidation(validationConfig) {
  const { formSelector, ...formConfig } = validationConfig;
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, formConfig);
  });
}

// Функция добавления класса ошибки:
function showInputError(formElement, inputElement, errorMassage) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add("form__input_type_error");
  formError.textContent = errorMassage;
  formError.classList.add("form__input-error_active");
}

// Функция удаления класса ошибки:
function hideInputError(formElement, inputElement) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove("form__input_type_error");
  formError.textContent = "";
  formError.classList.remove("form__input-error_active");
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, validationConfig) {
  const { inactiveButtonClass } = validationConfig;

  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", "");
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

// Функция проверки валидности полей:
function isValid(formElement, inputElement) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
}

function setEventListeners(formElement, formConfig) {
  const { inputSelector, submitButtonSelector, ...validationConfig } =
    formConfig;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement, validationConfig);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
}

export function clearValidation(formElement, validationConfig) {
  const { inputSelector, submitButtonSelector } = validationConfig;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement);
  });

  toggleButtonState(inputList, buttonElement, validationConfig);
  buttonElement.setAttribute("disabled", "");
}
