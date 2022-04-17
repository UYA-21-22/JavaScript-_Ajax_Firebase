// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyD3yb40LvnRwKHYt5et3L7AUlXUfQi0ACE",

  authDomain: "practica-6-27057.firebaseapp.com",

  databaseURL: "https://practica-6-27057-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "practica-6-27057",

  storageBucket: "practica-6-27057.appspot.com",

  messagingSenderId: "157661183969",

  appId: "1:157661183969:web:1eb56bfd7180a728d15ca0",

  measurementId: "G-1ND61FL623"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const saveUserData = (id, name, year, email) => {
  console.log(id, name, year, email);
  if(validacionTexto() & validacionEmail()) {
  addDoc(collection(db, 'users'), {
    id: id,
    name: name,
    year: year,
    email: email
  });
  } else {
    console.log("Datos erroneos Solicitud denegada")  
  }
}

export const getUsers = () => getDocs(collection(db, 'users'))

export const onGetUsers = (callback) => onSnapshot(collection(db, 'users'), callback)