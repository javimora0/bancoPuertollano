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
  numero = "";
  activa = false;
  cvv = 0;

  constructor(numero, activa, cvv) {
    this.numero = numero;
    this.activa = activa;
    this.cvv = cvv;
  }

}

var objetoPersona;
var cuenta;
var tarjeta1
var tarjeta2

function navegar() {
  var objetoPasado = JSON.stringify(objetoPersona);
  localStorage.setItem("persona", objetoPasado);
}

function cargarInfo() {
  var persona = localStorage.getItem("persona");
  objetoPersona = JSON.parse(persona);
}

function cargarDatos() {
  if (objetoPersona == null) {
    objetoPersona = new Persona("Fernando", "Aranzabe", "Servidor", "Turca");
    cuenta = new Cuenta("302583520349", 500);
    tarjeta1 = new Tarjeta("3423 42354 254325", false, 758);
    tarjeta2 = new Tarjeta("3742 35786 567672", true, 345);
    cuenta.addTarjeta(tarjeta1);
    cuenta.addTarjeta(tarjeta2);
    objetoPersona.addCuenta(cuenta);
  }
  

  document.getElementById("nombre").value = objetoPersona.nombre;
  document.getElementById("apellido1").value = objetoPersona.apellido1;
  document.getElementById("apellido2").value = objetoPersona.apellido2;
  document.getElementById("nacionalidad").value = objetoPersona.nacionalidad;
}

var botonModificarDatos = document.getElementById("botonDatos");

botonModificarDatos.addEventListener("click", function () {
  var nombre = document.getElementById("nombre");
  var ape1 = document.getElementById("apellido1");
  var ape2 = document.getElementById("apellido2");
  var nac = document.getElementById("nacionalidad");
  var avisoCorrecto = document.getElementById("avisoCorrecto");
  var avisoNombre = document.getElementById("avisoNombre");
  var avisoApe1 = document.getElementById("avisoApe1");
  var avisoApe2 = document.getElementById("avisoApe2");
  var avisoNacionalidad = document.getElementById("avisoNacionalidad");

  avisoCorrecto.textContent = " ";
  avisoNombre.textContent = " ";
  avisoApe1.textContent = " ";
  avisoApe2.textContent = " ";
  avisoNacionalidad.textContent = " ";

  var nombreCorrecto = false;
  var ape1Correcto = false;
  var ape2Correcto = false;
  var nacCorrecto = false;

  if (nombre.value.length < 3 || nombre.value.length > 20) {
    avisoNombre.textContent =
      "El nombre debe contener entre 3 y 20 caracteres.";
    avisoNombre.style.color = "red";
  } else {
    nombreCorrecto = true;
  }

  if (ape1.value.length < 3 || ape1.value.length > 20) {
    avisoApe1.textContent =
      "El primer apellido debe contener entre 3 y 20 caracteres.";
    avisoApe1.style.color = "red";
  } else {
    ape1Correcto = true;
  }

  if (ape2.value.length < 3 || ape2.value.length > 20) {
    avisoApe2.textContent =
      "El segundo apellido debe contener entre 3 y 20 caracteres.";
    avisoApe2.style.color = "red";
  } else {
    ape2Correcto = true;
  }

  if (nac.value.length < 3 || nac.value.length > 15) {
    avisoNacionalidad.textContent =
      "La nacionalidad debe contener entre 3 y 15 caracteres.";
    avisoNacionalidad.style.color = "red";
  } else {
    nacCorrecto = true;
  }

  if (nombreCorrecto && ape1Correcto && ape2Correcto && nacCorrecto) {
    avisoCorrecto.textContent = "Datos modificados correctamente.";
    avisoCorrecto.style.color = "green";
    objetoPersona.nombre = nombre;
    objetoPersona.apellido1 = ape1;
    objetoPersona.apellido2 = ape2;
    objetoPersona.nacionalidad = nac;
  }
});

