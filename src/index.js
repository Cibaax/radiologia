import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import firebase from 'firebase/compat/app';

import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAPEA9PaKw2L4mq07eZsTmSapc6oeVOgdI",
    authDomain: "semillero-timeline.firebaseapp.com",
    databaseURL: "https://semillero-timeline-default-rtdb.firebaseio.com",
    projectId: "semillero-timeline",
    storageBucket: "semillero-timeline.appspot.com",
    messagingSenderId: "215743074692",
    appId: "1:215743074692:web:d0cd6eca4ff54e56504dd1"
};

firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);