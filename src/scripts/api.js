const config = {
  url: "https://nomoreparties.co/v1/wff-cohort-11/",
  headers: {
    authorization: "cb84c739-4986-447f-b45b-898c907879fa",
  }
};

export async function getUsersProfiles() {
  const response = await fetch(`${config.url}users/me`, {
    headers: config.headers,
  })
  
  return response;
}

export async function getCards() {
  const response = await fetch(`${config.url}cards`, {
    headers: config.headers,
  });

  return response;
}

const promises = [getCards(), getUsersProfiles()]

Promise.all(promises)
  .then(res => res.json())
  .then(res => console.log(res))
  // .then(data => console.log(data))
