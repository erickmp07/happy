# happy

![banner](./web/src/assets/images/banner.png)

An app to connect people and residential institutions for children.

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Technologies](#technologies)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Install

Prerequisites:

Download and install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://classic.yarnpkg.com/en/docs/install/).

- First, clone the repository:
```bash
https://github.com/erickmp07/happy.git
```

- From the root directory where the project was cloned, install its dependencies with [`yarn` command](https://classic.yarnpkg.com/en/docs/usage):
```bash
cd happy/backend
yarn
```

```bash
cd happy/web
yarn
```

## Usage

First, start the server:
```bash
cd happy/backend
yarn dev
```

To run the web app:
```bash
cd happy/web
yarn start
```

The application can be accessed at [`localhost:3000`](http://localhost:3000).

## Technologies

This project was developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com/)
- [React](https://reactjs.org/)
- [Expo](https://docs.expo.io/)
- [Leaflet](https://leafletjs.com/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/#/)
- [SQLite3](https://sqlite.org)
- [Multer](https://github.com/expressjs/multer)
- [Express-Async-Errors](https://github.com/davidbanham/express-async-errors)
- [Yup](https://github.com/jquense/yup)
- [CORS](https://github.com/expressjs/cors)
- [Axios](https://axios-http.com/)

## API

The available routes are:

```bash
# GET - List Institutions
http://localhost:{port}/institutions

# GET - Show one Institution or fail
http://localhost:{port}/institutions/:id
id: number

# POST (Multipart Form) - Create Institution
http://localhost:{port}/institutions
form: {
    "name"				"Institution's name",
	"latitude"			0.000000,
	"longitude"			0.000000,
	"about"				"Something about the institution",
	"instructions"		"Instructions for visitors",
	"opening_hours"		"Hours that the institution is open",
	"open_on_weekends"	true / false,
	"images"			File,
	"images"			File
}
```

## Contributing

PRs and stars are always welcome.

To ask a question, please [contact me](mailto:erimacedo_92@hotmail.com).

## License

Licensed under [MIT](LICENSE) license.