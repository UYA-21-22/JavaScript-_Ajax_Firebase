
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
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
  // measurementId: "G-1ND61FL623"
};

const app = initializeApp(firebaseConfig);

export const saveUser= (id,name,year,email) => {

  addDoc(collection(db, 'users'),{id,name,year,email})

}


export const getUsers = () => getDocs(collection(db, 'users'))

export const updateUser =(id, newfields)=> updateDoc(doc(db, 'users',id),newfields)
// Initialize Firebase
// const analytics = getAnalytics(app);
