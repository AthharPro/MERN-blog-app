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

<h3>Connect to the Mongo DB </h3> <hr>

`npm i mongoose`. Using the MongoDB website get a connection string. 
The string contains username and password of DB. Store it in `.env` and hide the string from index.js.

```jsx
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGO).then(
   () => { console.log('MongoDB is connected');}
).catch((err) => {
   console.log(err);
});
```

<h3>Create user Models </h3> <hr>

Set of rules for the user in the server side of the code. `user.model.js` contains schemas and exports a model.

<h3>Create a test API route </h3> <hr>

`api/routes/user.route.js` handles GET API routes in the `/test`.<br>
`api/controllers/user.controller.js` carries the request and response of the API for each an every API.<br>
`index.js` can use those API routes. such as,
```jsx
app.use('/api/user', userRoutes);
```

To check if the API is working visit `localhost:3000/api/user/test`

<h3>Create a Sign-Up API route </h3>

`api/routes/auth.route.js` creates a POST api request in `/signup`. <br>
`api/controllers/auth.controller.js` handles the Async request and response in the body.
The password filed is encrypted and saved in the DB. `user.model.js` is also used to validate.<br>
`await newUser.save();` is used to save in the MongoDB. Small error handlings are done.<br>
`index.js` uses the API,
```jsx
app.use('/api/auth', authRoutes);
```

To check if the POST api requests are working use `insomnia`.
Send a POST `localhost:3000/api/auth/signup` request with a json body
```json
{
	"username": "user1",
	"email":"user1@gmail.com",
	"password":"password123"
}
```
Check for the response. And check the MondoDB if the data is updated.
