<p align="center"><img src="assets/logo.png" width="100"></p> 
<h2 align="center">🍿🎞️ <b>ABN+ </b> TV Show Explorer with VueJS 🎞️🍿</h2>
<p align="center">Browse shows by genre, sort by ratings, search for specific shows, and dive into detailed show pages.</p>
<p align="center"><b>Node.js Version:</b> v20.8.1 | <b>NPM Version:</b> 10.1.0</p>

## Screenshots of views and components 📸

### <p align="center">1️⃣ Dashboard</p>

<p>Here, you can browse shows categorized by genre. You can also sort them by rating (high to low, low to high) or in alphabetical order (A to Z, Z to A).</p>

<p align="center"><img src="assets/Home.png" width="80%" height="80%"></p>

### <p align="center">2️⃣ Searched Shows</p>

<p>When searching for a specific show, the first ten results that closely match your search term will be displayed. When you navigate to another page and return to the dashboard, your searched shows will still be displayed, as the search term is stored using Pinia.</p>

<p align="center"><img src="assets/Search.png" width="80%" height="80%"></p>

### <p align="center">3️⃣ Detailed Show Information</p>

<p>All the details of the show you selected will be displayed. You can also visit its official website or the platform where you can watch or stream the show. Very handy!</p>

<p align="center"><img src="assets/ShowCard.png" width="80%" height="80%"></p>

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Recommended IDE Setup & Type Support for `.vue` Imports in TS

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.
