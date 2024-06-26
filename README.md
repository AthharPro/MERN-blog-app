# MERN Full Stack Bolg App

Link: https://mern-blog-app-lnja.onrender.com

**Front-End**<br>
Vite + React + TailwindCSS + FlowBite <br><br>

**Back-End**<br>
Express + MongoDB + 

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

<h3>Create a Sign-Up API route </h3> <hr>

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

<h3>Add middleware and functions to handle errors </h3> <hr>

`/api/utils/error.js` containes the errorHandler with the status code and the error message. <br>
`index.js` contains the middleware which can be used by `auth.controller.js` using `next`. 
```jsx
app.use((err, req, res, next) => {
   const statusCode = err.statusCode || 500;
   const message = err.message || 'Internal Server Error';
   res.status(statusCode).json({
      success: false,
      statusCode,
      message,
   });
});
```

<h3> Create SignUp page UI </h3> <hr>

`client/src/pages/SignUp.jsx` has the tailwind + react code to the sign up page.

<h3> Adding functionalities to the SignUp page </h3> <hr>

`handleChange` function is used every time a user inputs in any field.
`handleSubmit` is used only when user clicks the Sign Up button.
```jsx
const [formData, setFormData] = useState({});
const [errorMessage, setErrorMessage] = useState(null);
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
```
is used to handle Errors, show a Loading... in the button, and Navigate to `/signin` after successfully submitting the form. <br>
vite.config.js has been changed to switch the proxy to the server port.

<h3> Create and Add Footer components </h3> <hr>

`/components/Footer.jsx` contains all flowbite codes for the footer. `App.jsx` has `<Footer/>` imported from the Footer.jsx 

<h3> Create a signin API route </h3> <hr>

`auth.route.js` creates a POST api request in `/signin`. <br>
`auth.controller.js` checks for the valid email and password in the DB and saves the `jwt` cookie token. else throws an error (in json).

<h3>Create SignIn page UI</h3> <hr>

`client/src/pages/Signin.jsx` has the tailwind + react code to the sign in page.

<h3>Add redux toolkit</h3> <hr>

https://redux-toolkit.js.org/tutorials/quick-start <br>
`/src/store.js` contains userReducers. 
`main.jsx` imports the store from store.js and Provider from react-redux. <br>
`/user/userSlicer.js` has the logics to all signIn functions.<br>
use the logics in `Signin.jsx`.<br>

test the sign in page using Redux devTool extension.

<h3>Add redux Presist</h3> <hr>

Persist is used to keep current user's deatils (or cookie) even browser refreshed. <br>
Edit the store.js using `redux-persist` module. `main.js` uses the exported persistor.

<h3>Add Google OAuth functionality</h3> <hr>

Create the Ui button for google oauth in `components/Oauth.jsx`. The logic is also included.<br>
Install FireBase `npm i firebase`. Create `firebase.js` in `src` folder and initialize firebase.<br>
`auth.route.js` creates a POST API request to `/google` and `auth.controller.js` has the google backend code.

<h3>Update header components with User data</h3> <hr>

`Header.jsx` has been updated, if the currentUser exists then the signIn button is not displayed. The profilePicture of the currentUser is displayed as a dropdown button.

<h3>Complete Dark mode functionality</h3> <hr>

`/redux/theme/themeSlice.js` includes the state for the theme.
`store.js` uses themeReducer from the themeSlice.
`ThemeProvider.jsx` has the stylings for the dark and light theme.
In `Header.jsx` theme button is changed to FaMoon and FaSun

<h3>Make Dashboard Private</h3> <hr>

`/components/PrivateRoute.jsx` has the code , if the user is authenticated only then can access the `/dashborad` page, else its redirected to `/sign-in`

<h3>Complete sidebar of the dashboard</h3> <hr>

`/components/DashSidebar.jsx` gets the tab= parameter value and checks if its 'profile' or not. and activates the button.

<h3>Complete Profile page UI</h3> <hr>

`/components/DashProfile.jsx` contains the flowbite code to the Profile page UI

<h3>Complete user image upload functionality</h3> <hr>

`/components/DashProfile.jsx` contains the server code and the upload UI

<h3>Add Update User API Route</h3> <hr>

`user.route.js`
```jsx
router.put('/update/:userId',verifyToken, updateUser);
```
created a `/utils/verifyUser.js` to check the user cookie is matching. <br>
`index.js`
```jsx
import cookieParser from 'cookie-parser';
app.use(cookieParser());
```
`user.controller.js` exprots the updateUser function and handle errors and updates the user profile in the DB.

<h3>Complete user update profile page functionality</h3> <hr>

`userSlice.js` contains `updateStart` , `updateSuccess` , `updateFailure` logics. <br>
Thoes logics are used in `handleSubmit` function in `DashProfile.jsx`

<h3>Add delete user API route</h3> <hr>

`user.route.js` ans `user.controller.js` conatins the code to delete user in the DB

<h3>Complete Delete user account functionality</h3> <hr>

`DashProfile.jsx` has the Ui and the fucionality.

<h3>Add signout functionality</h3> <hr>

signout buttons functionality has been updated in `DashProfile`, `Header`, `DashSlider`

<h3>Add Admin user functionality to user</h3> <hr>

`user.model.js` has a isAdmin scheme and `auth.controller.js` cookie tokens contain the boolean value of isAdmin.

<h3>Complete create a Post page UI</h3> <hr>

`DashProfile.jsx` has the create post button.<br>
`CreatePost.jsx` has the UI code to the create-post page.<br>

<h3>Add a create a post API route</h3> <hr>

`post.model.js` contains all the rules for a post.<br>
`post.route.js` routes a POST request to `/create`. Which send the request through backend `/api/post/create`.<br>
`post.controller.js` handles all the logics and errors.

<h3>Complete Upload post image functionality</h3> <hr>

`CreatePost.jsx` has the backend logics and saves the image in the firebase.

<h3>Complete Create post functionality</h3> <hr>

`CreatePost.jsx` errors and alerts has been handled. Navigates to the post after published.

<h3>Add post section to the dashboard</h3> <hr>

Only Admin can see the Posts tab in `DashSlider.jsx`

<h3>Create get posts API route</h3> <hr>

`post.controller.js` has exported getposts function with all the logics. `/api/post/getposts` sends a GET request and get the total no. of posts. and this can be limited by `/getposts?limit=1`

<h3>Show user posts inside dashboard</h3> <hr>

All the posts has been added to a Table in `DashPosts.jsx`. Tailwind scrollbar also has been used.

<h3>Add show more functionality to the posts results of the dashboard</h3> <hr>

`DashPosts.jsx` limits 9 posts and shows the `show more` button

<h3>Add delete post functionality to the dashboard</h3> <hr>

`DashPosts.jsx` contains handleDeletePost function.<br>
`post.route` and `post.controller` sends a DELETE request to the DB.

<h3>Add update post functionality</h3> <hr>

`UpdatePost.jsx` has the UI. and `post.controller.js` handles updatepost function.

<h3>Create get users API route</h3> <hr>

`user.route.js` sends a GET request to the `/api/user/getusers` using the getUsers function in `user.controller.js`.

<h3>Show users to the admin dashboard</h3> <hr>

`Dashboard.jsx` has a tab for users. <br>
`DashSlider.jsx` has the UI code for the user tab button.<br>
`DashUser.jsx` has the code to the Users page.

<h3>Add delete user functionality to the admin user</h3> <hr>

Modified the userDelete function in `user.controller.js`. <br>
`DashUsers.jsx` has the handleDeleteUser function.

<h3>Complete post page functionality</h3> <hr>

`PostPage.jsx` has the common code to all the posts. <br>
`index.css` has the styling for it.

<h3>Add call to action to the post page</h3> <hr>

`CallToAction.jsx` got the UI code. 

<h3>Add comment section to the post page</h3> <hr>

model, route, controller is created for the backend purpose. <br>
`commentSection.jsx` has UI code.

<h3>Show the comments of a post</h3> <hr>

`commentSection.jsx` has been modified to show all the comments in live time. `moment` package has been used. <br>
`Comment.jsx` has the UI and logic for it. <br>
`user.route` and `user.controller` getUser for specific comment. <br>
`comment.route` and `comment.controller` getPostComments for specific post.

<h3>Add like functionality to the comment component</h3> <hr>

`comment.route` and `comment.controller` handles likeComment function. <br>
`CommentSection.jsx` handleLike function is created. <br>
`Comment.jsx` has the Like button UI.

<h3>Add edit functionality to the comment component</h3> <hr>

`comment.route` and `comment.controller` handles editComment function. <br>
`CommentSection.jsx` handleEdit function is created. <br>
`Comment.jsx` has the Edit button UI for the user commment and Admin.

<h3>Add delete functionality to the comment component</h3> <hr>

`comment.route` and `comment.controller` handles deleteComment function. <br>
`CommentSection.jsx` handleDelete function is created. <br>
`Comment.jsx` has the Delete button UI for the user commment and Admin.

<h3>Add recent article setion to the post page</h3> <hr>

`PostPage.jsx` import the recent posts from `PostCard.jsx`

<h3>Add comment section to the Admin dashboard</h3> <hr>

`DashComments.jsx` has the UI and logic code. Routes and Controller aslo has been handled. <br>
`DashSlider.jsx` has the comment button.

<h3>Add dashboard overview to the Admin dashboard</h3> <hr>

`DashboardComp.jsx` has the UI and logics. `DashSlider.jsx` has the Dashboard button. 

<h3>Complete the home page</h3> <hr>

`Home.jsx` is completed.

<h3>Complete search page </h3> <hr>

`Search.jsx`

<h3>Complete About page and Project page </h3> <hr>

`About.jsx` and `Projects.jsx`

<h3> Task </h3> <hr>

<b>[1] Create a CRUD Advertisment page to Admin  </b>

1. Create Ad API routes

   `ad.model.js` , `ad.conroller.js` , `ad.route.js` has been created and `/api/ad` route has been added to `index.js`

2. Create Ad button in DashSlider

   `DashSlider.jsx` has an Advertisement button in the dashboard page

3. CreateAd page added.

   `DashProfile.jsx` page has a create Ad button which links to `CreateAd.jsx` page. An Admin can create an Ad.

4. create DashAds and getAds functionality

   `/getads` route has been created to read all the Ads and display in the `DashAds.jsx` page as a tables. 

5. create DeleteAd functionality

   `/delete/:adId/:userId` route has been added to delete a specific Ad.

6. create UpdateAd functionality

   `/update/:adId/:userId` route has been added to update a specific Ad.

7. AdCard and showAd functionality added in post page

   `/show` route has been create to get the active adds with the least view count and display in the `PostPage.jsx`. The Ads are retrived in `AdCard.jsx` componetnt. 

8. Ads has been added to dashboard page

   `DashboardComp.jsx` has the summerized detail of all Ads

 ----End-----