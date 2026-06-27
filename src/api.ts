const ORIGINAL_API_URL =
  "https://script.google.com/macros/s/AKfycbz3Vya88OgxlqCDDUCVjLOLWVnxPAHsw6CaC_iCgNX397DNC49ZuwO-eCNya4oX6is6/exec";

async function requestJson(url: string, options?: RequestInit) {
  const response = await fetch(url, options);
  const text = await response.text();

  console.log("RAW RESPONSE:", text);

  try {
    return text ? JSON.parse(text) : null;
  } catch {
    return { ok: true, raw: text };
  }
}

function encodeFormBody(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

const FORM_HEADERS = {
  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
};

export async function getFilms() {
  return requestJson(`${ORIGINAL_API_URL}?action=films`);
}

export async function getVotes() {
  return requestJson(`${ORIGINAL_API_URL}?action=votes`);
}

export async function getComments() {
  return requestJson(`${ORIGINAL_API_URL}?action=comments`);
}

export async function createFilm(title: string, username: string) {
  const result = await requestJson(ORIGINAL_API_URL, {
    method: "POST",
    headers: FORM_HEADERS,
    body: encodeFormBody({
      action: "addFilm",
      title,
      username,
    }),
  });

  if (result && typeof result === "object" && "error" in result) {
    throw new Error(String(result.error));
  }

  return result ?? { ok: true };
}

export async function voteFilm(filmId: string, username: string) {
  const result = await requestJson(ORIGINAL_API_URL, {
    method: "POST",
    headers: FORM_HEADERS,
    body: encodeFormBody({
      action: "vote",
      filmId,
      username,
    }),
  });

  if (result?.ok === false) {
    return { ok: false };
  }

  return { ok: true };
}

export async function addComment(filmId: string, username: string, text: string) {
  const result = await requestJson(ORIGINAL_API_URL, {
    method: "POST",
    headers: FORM_HEADERS,
    body: encodeFormBody({
      action: "comment",
      filmId,
      username,
      text,
    }),
  });

  if (!result?.ok) {
    throw new Error(result?.error || "Failed to add comment");
  }

  return result;
}

export async function deleteFilm(filmId: string) {
  const result = await requestJson(ORIGINAL_API_URL, {
    method: "POST",
    headers: FORM_HEADERS,
    body: encodeFormBody({
      action: "deleteFilm",
      filmId,
    }),
  });

  if (!result?.ok) {
    throw new Error(result?.error || "Failed to delete film");
  }

  return result;
}

export async function updateFilm(filmId: string, title: string) {
  const result = await requestJson(ORIGINAL_API_URL, {
    method: "POST",
    headers: FORM_HEADERS,
    body: encodeFormBody({
      action: "updateFilm",
      filmId,
      title,
    }),
  });

  if (!result?.ok) {
    throw new Error(result?.error || "Failed to update film");
  }

  return result;
}