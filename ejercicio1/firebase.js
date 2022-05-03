import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD3yb40LvnRwKHYt5et3L7AUlXUfQi0ACE",
//   authDomain: "practica-6-27057.firebaseapp.com",
//   databaseURL: "https://practica-6-27057-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "practica-6-27057",
//   storageBucket: "practica-6-27057.appspot.com",
//   messagingSenderId: "157661183969",
//   appId: "1:157661183969:web:1eb56bfd7180a728d15ca0",
//   // measurementId: "G-1ND61FL623"
// };

const app = initializeApp(firebaseConfig);

//
const db = firebase.firestore();


/*
export const saveUser= (id,name,year,email) => {

  addDoc(collection(db, 'users'),{id,name,year,email})

}
*/

//¿Debería estar en registro?
const SaveUser = (user) => {

  db.collection("Usuarios").add({
    user
  })
  .then((docRef) => {
    MSJOK(); //si todo va bien, muestra mensaje OK
  })
  .catch((error) => {
    MSJERROR(); //si falla algo, muestra mensaje error
  });
}

const getUsers = () => getDocs(collection(db, 'users'))

const updateUser =(id, newfields)=> updateDoc(doc(db, 'users',id),newfields)
// Initialize Firebase
// const analytics = getAnalytics(app);

//Mensaje Ok con sweetalert

const MSJOK = () => {
  Swal.fire(
    'Buen trabajo!',
    'Datos guardados correctamente!',
    'success'
  )
}

const MSJERROR = () => {
  Swal.fire(
    'Ups!',
    'Los datos no fueron guardados correctamente!',
    'error'
  )
}

//BtnEnviar es el id del botón de la práctica de AJAX y Firebase
$("#btnEnviar").on('click',()=>{
  let nombre = $("#nombreFormulario").val();

  const user = {
    nombre
  }

  SaveUser(user);
})