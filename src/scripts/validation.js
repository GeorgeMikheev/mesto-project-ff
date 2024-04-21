export function enableValidation(validationConfig) {
  const { formSelector, ...formConfig } = validationConfig;
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, formConfig);
  });
}

// Функция добавления класса ошибки:
function showInputError(
  formElement,
  inputElement,
  errorMassage,
  validationConfig
) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.inputErrorClass);
  formError.textContent = errorMassage;
  formError.classList.add(validationConfig.errorClass);
}

// Функция удаления класса ошибки:
function hideInputError(formElement, inputElement, validationConfig) {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(validationConfig.inputErrorClass);
  formError.textContent = "";
  formError.classList.remove(validationConfig.errorClass);
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, validationConfig) {
  const { inactiveButtonClass } = validationConfig;

  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, inactiveButtonClass);
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove(inactiveButtonClass);
  }
}

// Функция проверки валидности полей:
function isValid(formElement, inputElement, validationConfig) {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      validationConfig
    );
  } else {
    hideInputError(formElement, inputElement, validationConfig);
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
      isValid(formElement, inputElement, validationConfig);
      toggleButtonState(inputList, buttonElement, validationConfig);
    });
  });
}

export function clearValidation(formElement, validationConfig) {
  const { inputSelector, submitButtonSelector } = validationConfig;
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputList.forEach((inputElement) => {
    hideInputError(formElement, inputElement, validationConfig);
  });

  disableSubmitButton(buttonElement, validationConfig);
}

function disableSubmitButton(button, config) {
  button.setAttribute("disabled", "");
  button.classList.add(config.inactiveButtonClass);
}
