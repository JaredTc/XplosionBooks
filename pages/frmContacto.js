
function mostrarTarjetaBienvenida(){
    
}
function IniciarSesion(event) {
    //cancelamos el envio a otra pagina del formulario
    event.preventDefault()
  
    var inputEmail = document.getElementById('email')
    localStorage.setItem('usuario', inputEmail.value)
    var tarjetaInicioDeSesion = document.getElementById('tarjeta-inicio-de-sesion')
    var tarjetaBienvenida = document.getElementById('tarjeta-bienvenida')
  
    // Ocultamos la tarjeta de inicio de sesion
    tarjetaInicioDeSesion.classList.add('d-none')
  
    // Volvemos visible la tarjeta de bienvenida
    tarjetaBienvenida.classList.remove('d-none')
}
function cerrarSesion(event){
    var tarjetaInicioDeSesion = document.getElementById
    ('tarjeta-inicio-de-sesion')
    var tarjetaBienvenida = document.getElementById('tarjeta-bienvenida')
    tarjetaBienvenida.classList.add('d-none')
    tarjetaInicioDeSesion.classList.remove('d-none')
}
function limpiarFormulario(){
    var inputEmail = document.getElementById('email')
    var inputContrasena = document.getElementById('contrasena')
    inputEmail.value = ""
    inputContrasena.value = ""

    limpiarFormulario()
}

function revisarSiYaInicioSesion(){
    var usuario = localStorage.getItem('usuario')

}