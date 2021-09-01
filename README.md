# basic-auth

## LAB - 06

### Deployment Test

**Author: Laith-Hayajneh**

- [tests report](https://github.com/Laith-Hayajneh/basic-auth/actions).
- [back-end](https://basic-auth001.herokuapp.com/).
- [pull request](https://github.com/Laith-Hayajneh/basic-auth/pull/1).

**Setup**

`.env` **requirements**

- `PORT` - Port Number

- `DATABASE_URL` = Postgres DB

**Running the app**

- `npm start`

- Endpoint: `/signup`

> `{ "username": "Ibrahim" , "password": "Swaiss" }`

- Returns Object

      {
      "id": 2,
      "username": "Ibrahim",
      "password": "$2b$10$effLuS4zQZIRZbSKhkyGTudoSRfR/pC/mhic1A1OYAITDTuqOxX/i",
      "updatedAt": "2021-08-22T18:28:51.062Z",
      "createdAt": "2021-08-22T18:28:51.062Z"
      }

- Endpoint: `/signin`

> - Username `Ibrahim`
> - Password `Swaiss`

- Returns Object

          {
          "id": 2,
          "username": "Ibrahim",
          "password": "$2b$10$effLuS4zQZIRZbSKhkyGTudoSRfR/pC/mhic1A1OYAITDTuqOxX/i",
          "createdAt": "2021-08-22T18:28:51.062Z",
          "updatedAt": "2021-08-22T18:28:51.062Z"
          }

**Tests**

- Unit Tests: `npm run test`
- Lint Tests: `npm run lint`