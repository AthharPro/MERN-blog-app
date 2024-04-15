# MERN Full Stack Bolg App

**Front-End**<br>
Vite + React + TailwindCSS + FlowBite

<h3>Install React.js using vite, TailwindCSS and create the template</h3> <hr>

To start the app on localhost. Run the code in the terminal (client folder)
```
npm run dev
```

<h3>Create Pages and Routes </h3> <hr>

use ``` react-router-dom ``` npm package.
Import the package in App.jsx
```jsx
import { BrowserRouter, Routes, Route} from 'react-router-dom'
```
Create `<Route path='/about' element={<About />} />` for all `<Routes>` in `<BrowserRouter>` tags. Import each Route as,
```jsx
import About from './pages/About'
```

<h3>Create responsive Header components</h3> <hr>

Using `Flowbite React`. install it. <br>
https://flowbite-react.com/docs/getting-started/introduction

<h3>Create and run the server</h3> <hr>

All are done in `/` directory. Install `npm i express`. `index.js` file is in `/api`.
<br>
api/index.js

```js
import express from 'express';

const app = express();

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
```

to get continuous server updates in terminal `npm i nodemon` is used.
`package.json` is updated as...

```json
"type": "module",
"main": "index.js",
"scripts": {
   "dev": "nodemon api/index.js",
   "start": "node api/index.js"
},
```
