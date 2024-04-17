import { Promise } from "core-js";

const config = {
  url: "https://nomoreparties.co/v1/wff-cohort-11/",
  headers: {
    authorization: "cb84c739-4986-447f-b45b-898c907879fa",
    "Content-Type": "application/json",
  },
};

export function getUsersProfiles() {
  return fetch(`${config.url}users/me`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function sendingProfileData(profileName, profileJob) {
  fetch(`${config.url}users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: profileName,
      about: profileJob,
    }),
  });
}

export function getCards() {
  return fetch(`${config.url}cards`, {
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function addNewCard(cardName, cardLink) {
  return fetch(`${config.url}cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: cardName,
      link: cardLink,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function removeCard(cardID) {
  return fetch(`${config.url}cards/${cardID}`, {
    method: "DELETE",
    headers: {
      authorization: config.headers.authorization,
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function addLikes(cardID) {
  return fetch(`${config.url}cards/likes/${cardID}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function removeLikes(cardID) {
  return fetch(`${config.url}cards/likes/${cardID}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function changeAvatar(usersAvatar) {
  return fetch(`${config.url}users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: usersAvatar,
    }),
  });
}
