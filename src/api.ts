const ORIGINAL_API_URL =
  "https://script.google.com/macros/s/AKfycbyuTwtfE8IWFQyji4UgrhBiK3eCwZ18SwldTMP_DmAfMogPMH7mhuR6gAXWmb-NJaG9/exec";

// Helper to make CORS requests via corsproxy.io
function fetchViaProxy(url: string, options?: RequestInit) {
  const proxiedUrl = `https://corsproxy.io/?${encodeURIComponent(url)}`;
  return fetch(proxiedUrl, options);
}

export async function getFilms() {
  return fetchViaProxy(`${ORIGINAL_API_URL}?action=films`, { mode: 'cors' }).then(r => r.json());
}

export async function getVotes() {
  return fetchViaProxy(`${ORIGINAL_API_URL}?action=votes`, { mode: 'cors' }).then(r => r.json());
}

export async function getComments() {
  return fetchViaProxy(`${ORIGINAL_API_URL}?action=comments`, { mode: 'cors' }).then(r => r.json());
}

export async function createFilm(title: string, username: string) {
  return fetchViaProxy(ORIGINAL_API_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "addFilm",
      title,
      username,
    }),
  });
}

export async function voteFilm(filmId: string, username: string) {
  return fetchViaProxy(ORIGINAL_API_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "vote",
      filmId,
      username,
    }),
  });
}

export async function addComment(filmId: string, username: string, text: string) {
  return fetchViaProxy(ORIGINAL_API_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "comment",
      filmId,
      username,
      text,
    }),
  });
}

export async function deleteFilm(filmId: string) {
  return fetchViaProxy(ORIGINAL_API_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "deleteFilm",
      filmId,
    }),
  });
}

export async function updateFilm(filmId: string, title: string) {
  return fetchViaProxy(ORIGINAL_API_URL, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      action: "updateFilm",
      filmId,
      title,
    }),
  });
}