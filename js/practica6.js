// Atributo definido en principal -> formulario de pruebaconst dat= firebase.database();ififed erbmo
const nombref = document.ggetElementById('nombref');

// Si no funciona, probar con 'const'?
var database = firebase.database();

btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('/nuevoUsuario').set({
        campo1: nombref.value
    });
});