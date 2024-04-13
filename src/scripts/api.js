const config = {
  url: "https://nomoreparties.co/v1/wff-cohort-11/",
  headers: {
    authorization: "cb84c739-4986-447f-b45b-898c907879fa",
  }
};

export function getUsersProfiles() {
  return fetch(`${config.url}users/me`, {
    headers: config.headers,
  }).then(res => {
    if(res.ok) {
      return res.json();
    }

    return Promise.reject(`Error ${res.status}`);
  });
}

export function sendingProfileData(profileName, profileJob) {
  fetch(`${config.url}users/me`, {
    method: 'PATCH',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: profileName,
      about: profileJob
    })
  });
}

export function getCards() {
  return fetch(`${config.url}cards`, {
    headers: config.headers,
  }).then(res => {
    if(res.ok) {
      return res.json();
    }      
    
    return Promise.reject(`Error ${res.status}`);
  });
}

export function addNewCard(cardName, cardLink) {
  fetch(`${config.url}cards`, {
    method: 'POST',
    headers: {
      authorization: config.headers.authorization,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: cardName,
      link: cardLink
    })
  })
}
