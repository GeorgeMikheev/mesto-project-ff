export function getUsersProfile() {
  fetch("https://nomoreparties.co/v1/wff-cohort-7/users/me", {
    headers: {
      authorization: "c412049b-d37a-453a-a5bc-6533d1f9c86a",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
}

export function getCards(card, image) {
  fetch("https://nomoreparties.co/v1/wff-cohort-7/cards", {
    headers: {
      authorization: "c412049b-d37a-453a-a5bc-6533d1f9c86a",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      
      image.src = card.link;
      image.alt = card.name;
      card.querySelector(".card__title").textContent = card.name;

      return cardElement; // Возвращаю готовую карточку
    });
}
