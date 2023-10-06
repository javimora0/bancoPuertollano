function cargarCabecera() {
    document.getElementById("menu").innerHTML =
        '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html" onclick="navegar()">Inicio</a></li>        <li><a href="infoCuenta.html" onclick="navegar()">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html" onclick="navegar()">Tarjetas</a></li>    </ul>';
}

var objetoPersona

function cargarInfo() {
    var persona = localStorage.getItem("persona")
    objetoPersona = JSON.parse(persona)
    parseInt(objetoPersona.cuenta.saldo)
    document.getElementById("ibanInput").value = objetoPersona.cuenta.iban;
    document.getElementById("saldo").value = objetoPersona.cuenta.saldo;
}

function generarTabla() {
    // Ejemplo de datos
    var datos = [
        { cuenta: "1234567890", tarjeta: "23423421234", activa: true },

        { cuenta: "9876543210", tarjeta: "2342342345678", activa: false }
    ];

    for (let index = 0; index < objetoPersona.cuenta.tarjetas.length -1; index++) {
        datos[index].cuenta.push(objetoPersona.cuenta.iban)
        datos[index].tarjeta.push(objetoPersona.cuenta.tarjetas[index].numero)
        datos[index].activa.push(objetoPersona.persona.cuenta.tarjetas[index].activa)
    }

    // Obtén la referencia a la tabla
    var tabla = document.getElementById("tablaCuentas");

    // Agrega filas a la tabla basadas en los datos
    datos.forEach(function (dato) {
        var fila = document.createElement("tr");
        fila.innerHTML = `
                <td>${dato.cuenta}</td>
                <td>${dato.tarjeta}</td>
                <td>${dato.activa ? "Sí" : "No"}</td>
            `;
        tabla.appendChild(fila);
    });
}