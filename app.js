

function cargarDatos() {
    document.getElementById('idPersona').value = persona.id
    document.getElementById('nombre').value = persona.nombre
    document.getElementById('apellido1').value = persona.apellido1
    document.getElementById('apellido2').value = persona.apellido2
    document.getElementById('nacionalidad').value = persona.nacionalidad
    menu = document.getElementById('menu').innerHTML
}

function cargarCabecera(dest) {
    document.getElementById(dest).innerHTML = '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html">Inicio</a></li>        <li><a href="infoCuenta.html">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html">Tarjetas</a></li>    </ul>'
}

const botonRetirar = document.getElementById('botonRetirar')
const botonIngresar = document.getElementById('botonRetirar')
const saldoRetirado = document.getElementById('saldoRetirar')
const saldoIngresado = document.getElementById('saldoIngresarInput')

const mssg = document.getElementById('mensaje');
const saldo = document.getElementById('saldo')

botonRetirar.addEventListener("click", function () {
    if (saldoRetirado.value <= 0) {
        mssg.textContent = 'El saldo a retirar debe ser un numero positivo'
        mssg.style.color = 'red';
    } if (saldoRetirado.value > saldo.value) {
        mssg.textContent = 'El saldo a retirar es mayo que el saldo disponible'
        mssg.style.color = 'red';
    }else {
        mssg.textContent = 'Ha retirado usted ' + saldoRetirado.value + '€'
        mssg.style.color = 'Green';
    }

})

botonIngresar.addEventListener("click", function () {
    if (saldoIngresado.value <= 0) {
        mssg.textContent = 'El saldo a ingresar debe ser mayor que 0'
        mssg.style.color = 'red';
    }else{
        mssg.textContent = 'El saldo a ingresar debe ser mayor que 0'
        mssg.style.color = 'red';
    }

})

