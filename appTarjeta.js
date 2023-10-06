function cargarCabecera() {
    document.getElementById("menu").innerHTML =
        '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html" onclick="navegar()">Inicio</a></li>        <li><a href="infoCuenta.html" onclick="navegar()">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html" onclick="navegar()">Tarjetas</a></li>    </ul>';
}

var objetoPersona

function cargarInfo() {
    var persona = localStorage.getItem("persona")
    objetoPersona = JSON.parse(persona)
    parseInt(objetoPersona.cuenta.saldo)
}


var datos = []


class Dato {
    iban = ''
    nTarjeta = 0
    activa = false
}

function generarTabla() {

    var ibanAuxiliar = objetoPersona.cuenta.iban

    for (let index = 0; index < objetoPersona.cuenta.tarjetas.length; index++) {
        var dato1 = new Dato();
        var nTarjeta = objetoPersona.cuenta.tarjetas[index].numero
        var activa = objetoPersona.cuenta.tarjetas[index].activa
        dato1.iban = ibanAuxiliar
        dato1.nTarjeta = nTarjeta
        dato1.activa = activa
        datos[index] = dato1
    }
    console.log(objetoPersona)





    var tabla = document.getElementById("tablaCuentas");


    datos.forEach(function (dato) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
                 <td>${dato.iban}</td>
                 <td>${dato.nTarjeta}</td>
                 <td>${dato.activa ? "Sí" : "No"}</td>
             `;
        tabla.appendChild(fila);
    });
}