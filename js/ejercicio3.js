/**
 * Función que cuenta los elementos: lista, elementos div y párrafos de
 * la página principal
 * @param IdEtiqueta ID de la etiqueta donde se realizará el conteo de los elementos
 * @param etiquetaABuscar La etiqueta a contar
 */
function countItems(IdEtiqueta, etiquetaABuscar) {
  let etiquetaDondeBuscar = document.getElementById(IdEtiqueta);
  let i = 0, contadorElementos = 0;

  while(etiquetaDondeBuscar.getElementsByTagName(etiquetaABuscar) [i++]) contadorElementos++;
  // excribimos el contador en la página
  document.write(contadorElementos);
}
