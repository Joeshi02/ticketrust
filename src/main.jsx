import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRNbjxa43sfl1-I5rnZlKKHNjYCZoDZAQ",
  authDomain: "ticketrust-ac79c.firebaseapp.com",
  projectId: "ticketrust-ac79c",
  storageBucket: "ticketrust-ac79c.appspot.com",
  messagingSenderId: "181670861475",
  appId: "1:181670861475:web:7bd07239d62bf4a9e03d16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
