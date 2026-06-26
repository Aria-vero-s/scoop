const API_URL =
  "https://script.google.com/macros/s/AKfycbyuTwtfE8IWFQyji4UgrhBiK3eCwZ18SwldTMP_DmAfMogPMH7mhuR6gAXWmb-NJaG9/exec";

export async function getFilms() {
  return fetch(`${API_URL}?action=films`).then(r => r.json());
}

export async function getVotes() {
  return fetch(`${API_URL}?action=votes`).then(r => r.json());
}

export async function getComments() {
  return fetch(`${API_URL}?action=comments`).then(r => r.json());
}

export async function createFilm(title: string, username: string) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "addFilm",
      title,
      username,
    }),
  });
}

export async function voteFilm(filmId: string, username: string) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "vote",
      filmId,
      username,
    }),
  });
}

export async function addComment(filmId: string, username: string, text: string) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "comment",
      filmId,
      username,
      text,
    }),
  });
}

export async function deleteFilm(filmId: string) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "deleteFilm",
      filmId,
    }),
  });
}

export async function updateFilm(filmId: string, title: string) {
  return fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "updateFilm",
      filmId,
      title,
    }),
  });
}