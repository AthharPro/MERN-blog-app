// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4fdef.firebaseapp.com",
  projectId: "mern-blog-4fdef",
  storageBucket: "mern-blog-4fdef.appspot.com",
  messagingSenderId: "406703118491",
  appId: "1:406703118491:web:041ba188d96d08580e0e3e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);