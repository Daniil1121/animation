import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmixAtyTWAhuvz3Q33LXKB_nCbFWH9HNI",
  authDomain: "animations-da16e.firebaseapp.com",
  projectId: "animations-da16e",
  storageBucket: "animations-da16e.appspot.com",
  messagingSenderId: "1038358471862",
  appId: "1:1038358471862:web:c26f7569fc70ce8e6a3217",
  measurementId: "G-FX53EENHK2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
