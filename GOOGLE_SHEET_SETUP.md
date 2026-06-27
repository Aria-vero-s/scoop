# Configuration de la Google Sheet pour Movie Night

Ce guide te permet de créer la feuille Google Sheets attendue par l’application.

## 1. Créer la Google Sheet

1. Ouvre Google Sheets : https://sheets.google.com/
2. Clique sur “Blank” pour créer une nouvelle feuille.
3. Donne un nom à la feuille, par exemple : `Movie Night`

## 2. Créer les trois onglets

Dans la partie basse de la feuille, crée 3 onglets avec ces noms exacts :

- `Films`
- `Votes`
- `Comments`

> Les noms doivent être exactement identiques, avec la majuscule initiale.

## 3. Structure des colonnes

### Onglet `Films`
Ajoute cette ligne en en-tête :

| A | B | C | D |
|---|---|---|---|
| id | title | author | createdAt |

Exemple :
- `id` : identifiant unique du film
- `title` : titre du film
- `author` : pseudo de la personne qui a proposé le film
- `createdAt` : date de création

### Onglet `Votes`
Ajoute cette ligne en en-tête :

| A | B | C |
|---|---|---|
| filmId | username | createdAt |

### Onglet `Comments`
Ajoute cette ligne en en-tête :

| A | B | C | D |
|---|---|---|---|
| filmId | author | text | createdAt |

## 4. Récupérer l’ID de la Google Sheet

1. Ouvre la spreadsheet
2. Copie l’URL de la page
3. L’ID est la partie entre `/d/` et `/edit`

Exemple :

https://docs.google.com/spreadsheets/d/1ABC123XYZ/edit

L’ID est :

`1ABC123XYZ`

## 5. Utiliser cet ID dans Google Apps Script

Dans ton script Apps Script, remplace la valeur de :

```javascript
const SHEET_ID = "...";
```

par l’ID de ta Google Sheet.

Exemple :

```javascript
const SHEET_ID = "1JKcOTaDa2d_elo07PKVg3F-MhspO11yTsOUYiwmOzpQ";
```

## 6. Déployer le script

1. Dans Apps Script, clique sur `Deploy`
2. Clique sur `New deployment`
3. Sélectionne `Web app`
4. Clique sur `Deploy`
5. Récupère la nouvelle URL de l’endpoint

## 7. Important

Si tu vois une erreur du type :

- `Sheet not found: Films`
- `Sheet not found: Votes`
- `Sheet not found: Comments`

alors l’un des points suivants est en cause :

- le nom de l’onglet est différent
- l’onglet n’existe pas
- l’onglet a un espace ou une majuscule différente

## 8. Exemple de contenu de départ

Tu peux laisser les feuilles vides avec seulement les en-têtes. L’application ajoutera les lignes elle-même.
