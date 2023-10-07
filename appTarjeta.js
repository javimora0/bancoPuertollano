function cargarCabecera() {
    document.getElementById("menu").innerHTML =
        '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html" onclick="navegar()">Inicio</a></li>        <li><a href="infoCuenta.html" onclick="navegar()">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html" onclick="navegar()">Tarjetas</a></li>    </ul>';
}

var objetoPersona
var botonGuardar = document.getElementById('guardarTarjeta')
var tarjeta1
botonGuardar.addEventListener('click', function(){
    var newNumero = document.getElementById('nTarjeta')
    var newCvv = document.getElementById('cvv')
    var newActiva = document.getElementById('cb')
    console.log(newActiva.checked, newNumero.value, newCvv.value)
    tarjeta1 = new Tarjeta(newNumero.value, newActiva.checked, newCvv.value);
    objetoPersona.cuenta.tarjetas.push(tarjeta1)
    var fila = document.createElement("tr");
    fila.innerHTML = `
             <td>${objetoPersona.cuenta.iban}</td>
             <td>${objetoPersona.cuenta.tarjetas[objetoPersona.cuenta.tarjetas.length - 1].numero}</td>
             <td>${objetoPersona.cuenta.tarjetas[objetoPersona.cuenta.tarjetas.length - 1].activa ? "Sí" : "No"}</td>
         `;
    tabla.appendChild(fila);

    newNumero.value = newNumero.defaultValue;
    newCvv.value = newCvv.defaultValue
    newActiva.value = newActiva.defaultValue
})

function cargarInfo() {
    var persona = localStorage.getItem("persona")
    objetoPersona = JSON.parse(persona)
    parseInt(objetoPersona.cuenta.saldo)
}

function navegar() {
    var objetoPasado = JSON.stringify(objetoPersona);
    localStorage.setItem("persona", objetoPasado)
}
var datos = []


class Dato {
    iban = ''
    nTarjeta = 0
    activa = false
}

var tabla = document.getElementById("tablaCuentas");

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

// Definir la clase Persona
class Persona {
  nombre = "";
  apellido1 = "";
  apellido2 = "";
  nacionalidad = "";

  constructor(nombre, apellido1, apellido2, nacionalidad) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.nacionalidad = nacionalidad;
  }

  addCuenta(c) {
    this.cuenta = c;
  }
}

class Cuenta {
  iban = "";
  saldo = 0;
  tarjetas = [];

  constructor(iban, saldo) {
    this.iban = iban;
    this.saldo = saldo;
  }

  addTarjeta(tarjeta) {
    this.tarjetas.push(tarjeta);
  }
}

class Tarjeta {
    numero = 0;
    activa = false;
    cvv = 0;
  
    constructor(numero, activa, cvv) {
      this.numero = numero;
      this.activa = activa;
      this.cvv = cvv;
    }
  
  }