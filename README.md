# Lesson 62 — Express Template Engines Homework

A small Node.js and Express.js MVC application demonstrating server-side rendering with two different template engines:

- **PUG** for user pages.
- **EJS** for article pages.

The project also serves a shared CSS file from the `public` directory and keeps the existing text-based modification routes from the previous Express homework.

## Requirements

- Node.js 18 or newer
- npm

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the Server

Start the application:

```bash
npm start
```

For development with Node.js watch mode:

```bash
npm run dev
```

The server runs on:

```text
http://localhost:3000
```

## Project Structure

```text
lesson-62-express-templates-homework/
├── public/
│   └── css/
│       └── styles.css
├── src/
│   ├── controllers/
│   │   ├── articlesController.js
│   │   ├── rootController.js
│   │   └── usersController.js
│   ├── middlewares/
│   │   ├── errorMiddleware.js
│   │   └── loggingMiddleware.js
│   ├── models/
│   │   ├── articlesModel.js
│   │   └── usersModel.js
│   ├── routes/
│   │   ├── articlesRoutes.js
│   │   ├── rootRoutes.js
│   │   └── usersRoutes.js
│   ├── app.js
│   └── server.js
├── views/
│   ├── articles/
│   │   ├── details.ejs
│   │   └── index.ejs
│   └── users/
│       ├── details.pug
│       └── index.pug
├── .gitignore
├── package.json
└── README.md
```

## Template Engine Configuration

Both template engines are registered in `src/app.js`:

- `.pug` files are rendered with PUG.
- `.ejs` files are rendered with EJS.

The controllers use explicit template extensions so both engines can work in the same Express application.

Static CSS files are served from the `public` directory with `express.static()`.

## Routes

### Root

| Method | Route | Response |
| --- | --- | --- |
| GET | `/` | Plain text: `Get root route` |

### Users — PUG

| Method | Route | Response |
| --- | --- | --- |
| GET | `/users` | PUG-rendered page with the list of users |
| GET | `/users/:userId` | PUG-rendered page with details of one user |
| POST | `/users` | Plain text: `Post users route` |
| PUT | `/users/:userId` | Plain text containing the user ID |
| DELETE | `/users/:userId` | Plain text containing the user ID |

Example pages:

```text
http://localhost:3000/users
http://localhost:3000/users/1
```

An unknown user ID returns `404 User not found`.

### Articles — EJS

| Method | Route | Response |
| --- | --- | --- |
| GET | `/articles` | EJS-rendered page with the list of articles |
| GET | `/articles/:articleId` | EJS-rendered page with details of one article |
| POST | `/articles` | Plain text: `Post articles route` |
| PUT | `/articles/:articleId` | Plain text containing the article ID |
| DELETE | `/articles/:articleId` | Plain text containing the article ID |

Example pages:

```text
http://localhost:3000/articles
http://localhost:3000/articles/1
```

An unknown article ID returns `404 Article not found`.

## MVC Architecture

The application follows the MVC approach:

- **Models** contain demo user and article data and data-access functions.
- **Views** are PUG and EJS templates rendered on the server.
- **Controllers** prepare data and choose the appropriate response or view.
- **Routes** map HTTP methods and URLs to controllers.
- **Middleware** handles request logging and centralized errors.

## Styling

Both PUG and EJS pages use the same stylesheet:

```text
/public/css/styles.css
```

The stylesheet adds responsive cards, navigation, lists, buttons, and detail layouts without any external CSS framework.

## Testing in the Browser

After starting the server, open:

```text
http://localhost:3000/users
http://localhost:3000/users/1
http://localhost:3000/articles
http://localhost:3000/articles/1
```

The user routes are rendered by **PUG**, while the article routes are rendered by **EJS**.

## Publishing to Git

Create a repository and push the project:

```bash
git init
git add .
git commit -m "Complete lesson 62 Express templates homework"
git branch -M main
git remote add origin <your-repository-url>
git push -u origin main
```
