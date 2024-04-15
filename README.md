# MERN Full Stack Bolg App

***1st step is to install React.js using vite, TailwindCSS and create the template***

To start the app on localhost. Run the code in the terminal (client folder)
```
npm run dev
```

***2nd create Pages and Routes***

use ``` react-router-dom ``` npm package.
Import the package in App.jsx
```jsx
import { BrowserRouter, Routes, Route} from 'react-router-dom'
```
Create `<Route path='/about' element={<About />} />` for all `<Routes>` in `<BrowserRouter>` tags. Import each Route as,
```jsx
import About from './pages/About'
```

***3rd Create responsive Header components***

Using `Flowbite React`. install it.