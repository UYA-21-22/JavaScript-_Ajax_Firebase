let ejemploJSON = {
    "dni": "12345",
    "anyo_nacimiento": 2000,
    "num_cuenta": "987654321",
    "precioProduc1": 15.5,
    "precioProduc2": 30,
    "productos": 2,
    "descuento": 0.10, 
    "pago": "credito",
    calculoPrecio: function(precios) {
        let total;
        
        total = (ejemploJSON.precioProduc1 + ejemploJSON.precioProduc2) * ejemploJSON.descuento;
        
        /*for (let i = 0; i < precios.lenght; i++) {
            total += precios[i]
        }*/
        return total;
    }
}

function agregarImporte() {
    let date = new Date(); //imprime la fecha actual
    let dateMonth = new Date(date.getFullYear(), date.getMonth() + 1)
    let dia = date.getDate()
    let mes = date.getMonth()
    let mesIni = dateMonth.getMonth() + 1;
    let diaIni = dateMonth.getDate();
  if (ejemploJSON.pago === 'credito') {
    document.getElementById('importeTotal').innerHTML = "El importe total de la compra: " + ejemploJSON.calculoPrecio();
    document.getElementById('Fecha').innerHTML = "Fecha del pago: " +  dia + '-' + mesIni + '-' + date.getFullYear();
  } else {
    document.getElementById('importeTotal').innerHTML = "El importe total de la compra: " + ejemploJSON.calculoPrecio();
    document.getElementById('Fecha').innerHTML = "Fecha del pago: " + diaIni + '-' + mesIni + '-' + date.getFullYear();
  }
}