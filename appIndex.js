// Definir la clase Persona
class Persona {

    nombre = ""
    apellido1 = ""
    apellido2 = ""
    nacionalidad = ""


    constructor(nombre, apellido1, apellido2, nacionalidad ) {
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
    tarjetas = []

    constructor(iban, saldo) {
        this.iban = iban;
        this.saldo = saldo;
    }

    addTarjeta(tarjeta) {
        this.tarjetas.push(tarjeta);
    }

    addDatosCuenta() {
        this.iban = "ES252374528954843"
        this.saldo = 500;
    }
}

class tarjeta {
    numero = 0;
    activa = false;

    constructor(numero, activa) {
        this.numero = numero;
        this.activa = activa;
    }
}


var persona
var cuenta

function cargarDatos() {
    if (persona == null) {
        persona = new Persona("Fernando", "Arabzabe", "php", "Española");
        cuenta = new Cuenta("302583520349", 500);
        persona.addCuenta(cuenta);
    }
    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("apellido1").value = persona.apellido1;
    document.getElementById("apellido2").value = persona.apellido2;
    document.getElementById("nacionalidad").value = persona.nacionalidad;


}

var botonModificarDatos = document.getElementById('botonIngresar');

botonModificarDatos.addEventListener("click", function() {
    var nombre1 = document.getElementById('nombre').value
    var ape1 = document.getElementById('apellido1').value
    var ape2 = document.getElementById(apellido2).value
    var nac = document.getElementById('nacionalidad').value
    persona.nombre = nombre1;
    persona.apellido1 = ape1;
    persona.apellido2 = ape2;
    persona.nac = nac;
})




function navegar() {
    var co = JSON.stringify(persona);
    localStorage.setItem("persona", co)
    // window.location.href = 'index.html'
}