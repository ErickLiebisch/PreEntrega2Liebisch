import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAVGj3Es4S0fEuFBfAtoaAhH34kK81HMBQ",
    authDomain: "entregafinal-c3f3a.firebaseapp.com",
    projectId: "entregafinal-c3f3a",
    storageBucket: "entregafinal-c3f3a.appspot.com",
    messagingSenderId: "733299965621",
    appId: "1:733299965621:web:ff19a6e95987470d9bc8fc"
  };
 initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
