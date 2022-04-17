
$(document).ready(function(){

  $('#btnEnviar').mouseup(function() {
    // primero validamos los campos del formulario?
    // if(validaForm()) {
      console.log('Holi');
      $.ajax({
        // url para la petición
        url:'./dataBase.json',
        // tipo de información que se espera de respuesta
        dataType: 'json',
        // se especifica que será una petición get
        type:'GET',
        // se establece que la petición será asíncrona
        async: true,
        // información a enviar
        // serialize: transformar información de un formulario a una cadena de datos
        data: $('#form').serialize(),
       
        // código a ejecutar si la petición es satisfactoria
        // la respuesta es pasada como argumento de la función
        success: function (result){
          let str_result = "";
          var found = false;
          // Bucamos por nombre de la persona
          result.forEach((person) => {
            if (person.name == $("#nameImput").val()) {
              console.log(person);
              found = true;
              str_result += `<p>Nombre: ${person.name} <br>
              Id: ${person.id} <br>
              Name: ${person.name} <br>
              Email: ${person.email} <br>
              Year: ${person.year} <br></p>`;
            }
          });
          // Mostramos mensaje de error si no se encuentran a la persona buscada
          if(!found) $("#resultado").html(`<p>No se ha encontrado ninguna persona</p>`);
          else $('#resultado').html(str_result);
          
        },
      });
    // }
  });
  
  /*
  // función de validación del nombre
  function validarNombre() {
    let inputValueName = $("name").val();
    if(inputValueName == null || inputValueName.length == 0 || !/^[A-Z]+$/i.test(inputValueName)) {
      alert('Error. El nombre sólo contiene letras');
      return false;
    }
    return true;
  }

  // función de validación del año de nacimiento
  function validacionAnyo() {
    let inputValueAnyo = $("input").val();
      if( inputValueAnyo == null || inputValueAnyo.length == 0 ||  !/^[0-9]+$/.test(inputValueAnyo) ) {
        alert('Error. El año son números.');
        return false;
      }
      return true;
  }

  // función de validación del ID
  function validacionID() {
    let inputValueID = $("#id").val();
    if( inputValueID == null || inputValueID.length == 0 ||  !/^[0-9]+$/.test(inputValueID) ) {
      alert('Error. El ID deben ser números.');
      return false;
    }
    return true;
  }

  // funcion validación email
  function validacionEmail()  {
    let inputValueEmail = $("#email").val();
    if( inputValueEmail == null || inputValueEmail.length == 0 || !/^[^@]+@[^@]+.[a-zA-Z]{2,}$/.test(inputValueEmail) ) {
      alert('Error. Formato email incorrecto.');
      return false
    } 
    return true;
  }
  */
 
  function validaForm(){
    // Campos de texto
    let inputValueName = $("#name").val();
    // let inputValueId = $("#id").val();
    // let inputValueYear = $("#year").val();
    // let inputValueEmail = $("#email").val();
    // if(inputValueId == ""){
    //   alert("El campo ID no puede estar vacío.");
    //   $("#id").focus();
    //   return false;
    // } else if(inputValueId == null || inputValueId.length == 0 ||  !/^[0-9]+$/.test(inputValueId) ) {
    //   alert('Error. El ID deben ser números.');
    //   return false;
    // }

    if(inputValueName == null){
        alert("El campo Nombre no puede estar vacío.");
        $("#name").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
        return false;
    } else if(inputValueName == null || inputValueName.length == 0 || !/^[A-Z]+$/i.test(inputValueName)) {
      alert('Error. El nombre sólo contiene letras');
      return false;
    }

    // if(inputValueYear == ""){
    //     alert("El campo year no puede estar vacío.");
    //     $("#year").focus();
    //     return false;
    // } if( inputValueYear == null || inputValueYear.length == 0 ||  !/^[0-9]+$/.test(inputValueYear) ) {
    //   alert('Error. El año son números.');
    //   return false;
    // }

    // if(inputValueEmail == ""){
    //     alert("El campo Dirección no puede estar vacío.");
    //     $("#email").focus();
    //     return false;
    // } else if( inputValueEmail == null || inputValueEmail.length == 0 || !/^[^@]+@[^@]+.[a-zA-Z]{2,}$/.test(inputValueEmail) ) {
    //   alert('Error. Formato email incorrecto.');
    //   return false
    // } 
    return true; // Si todo está correcto
}
});