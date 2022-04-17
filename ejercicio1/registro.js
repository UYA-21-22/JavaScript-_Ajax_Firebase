import {saveUserData, getUsers, onGetUsers} from './firebase.js';

document.addEventListener('DOMContentLoaded', async function() {
    // Se espera que el usuario pulse para actualizar la base de datos
    $("#registro").submit(function() {
        var id = $('#id').val();
        var name = $('#nombres').val();
        var year = $('#anyo_nacimiento').val();
        var email = $('#correo').val();
      saveUserData(id, name, year, email);
    });

    const userTable = $("#User-table")[0];

    // Muestra los usuarios registrados
  onGetUsers((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const user = doc.data();
      const newRowAmount = userTable.insertRow();
      newRowAmount.innerHTML = `
        <td>${user.name}</td>
      `;
    });
  });
})