$(document).ready(function(){
  $('#btnEnviar').click(function() {
    var found = false;
    // primero validamos los campos del formulario
    if(validaForm()) {
      $.get('./lib/dataBase.json', function(datos) {
      var nombre = $("#nombreFormulario").val();
      datos.usuarios.forEach(cliente => {
          if ((cliente.name === nombre)) {
            found = true;
            $('#return').html('Nombre: ' + cliente.name + '\n' + 'Correo electrónico: ' + cliente.email.concat('\n') + 'Año de nacimiento: ' + cliente.year) 
          }
        });      
      });
    }
    if(!found){
      $('#return').html('Ese cliente no está en la base de datos');
    }
  });
  
  function validaForm() {
    // Campo de texto
    inputValueName = document.getElementById('nombreFormulario');

    if(inputValueName == null){
        alert("El campo Nombre no puede estar vacío.");
        $("#nombreFormulario").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return false;
    } else if(inputValueName.length == 0 || !/[^0-9]+$/.test(inputValueName)) {
      alert('Error. El nombre sólo debe contener letras');
      return false;
    }else{
      var nombre = $("#nombreFormulario").val();
      return true;
    }
  }
});