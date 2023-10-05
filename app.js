var objetoPersona

function cargarInfo(){
    var persona = localStorage.getItem("persona")
    objetoPersona = JSON.parse(persona)
    parseInt(objetoPersona.cuenta.saldo)
    document.getElementById("ibanInput").value = objetoPersona.cuenta.iban;
    document.getElementById("saldo").value = objetoPersona.cuenta.saldo;
}

  function navegar() {
    var objetoPasado = JSON.stringify(objetoPersona);
    localStorage.setItem("persona", objetoPasado)
}
  
  function cargarCabecera(dest) {
    document.getElementById(dest).innerHTML =
      '   <h1>BancoPuertollano</h1>    <ul>        <li><a href="index.html" onclick="navegar()">Inicio</a></li>        <li><a href="infoCuenta.html" onclick="navegar()">Informaci&#243;n Cuenta</a></li>             <li><a href="tarjetas.html" onclick="navegar()">Tarjetas</a></li>    </ul>';
  }

const botonRetirar = document.getElementById('botonRetirar')
const botonIngresar = document.getElementById('botonIngresar')
const saldoRetirado = document.getElementById('saldoRetirar')
const saldoIngresado = document.getElementById('saldoIngresarInput')
const mssg = document.getElementById('mensaje');
const saldo = document.getElementById('saldo')



saldoRetirado.addEventListener("focus", function () {
    saldoIngresado.value = saldoIngresado.defaultValue

})

saldoIngresado.addEventListener("focus", function () {
        saldoRetirado.value = saldoRetirado.defaultValue

})

botonIngresar.addEventListener("click", function () {
    if (saldoIngresado.value != '') {
        if (saldoIngresado.value > 0) {
            mssg.textContent = 'Ha ingresado usted ' + saldoIngresado.value + '€'
            mssg.style.color = 'Green';
            objetoPersona.cuenta.saldo += parseInt(saldoIngresado.value)
            saldo.value = objetoPersona.cuenta.saldo
        }else {
            mssg.textContent = 'El saldo a ingresar debe ser un número entero decimal'
            mssg.style.color = 'red';
        }
    }
    
    saldoIngresado.value = saldoIngresado.defaultValue
})

botonRetirar.addEventListener("click", function () {
    let control = /^[1-9]\d*$/
    if (saldoRetirado.value != '') {
        if (!control.test(saldoRetirado.value)){  
            mssg.textContent = 'El saldo a retirar debe ser mayor o igual que 0'
            mssg.style.color = 'Red';
        }else {
            if (saldoRetirado.value > parseInt(objetoPersona.cuenta.saldo)) {
                mssg.textContent = 'No hay tanto saldo disponible'
                mssg.style.color = 'Red';
            }else{
                mssg.textContent = 'Ha retirado usted ' + saldoRetirado.value + '€'
                mssg.style.color = 'Green';
                objetoPersona.cuenta.saldo -= parseInt(saldoRetirado.value)
                saldo.value = objetoPersona.cuenta.saldo
    
            }
        }
    }
    saldoRetirado.value = saldoRetirado.defaultValue
})


