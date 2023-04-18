import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPEA9PaKw2L4mq07eZsTmSapc6oeVOgdI",
  authDomain: "semillero-timeline.firebaseapp.com",
  databaseURL: "https://semillero-timeline-default-rtdb.firebaseio.com",
  projectId: "semillero-timeline",
  storageBucket: "semillero-timeline.appspot.com",
  messagingSenderId: "215743074692",
  appId: "1:215743074692:web:d0cd6eca4ff54e56504dd1"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig); */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
