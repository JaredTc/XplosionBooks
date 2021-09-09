function mostrarTarjetaBienvenida() {
    var tarjetaInicioDeSesion = document.getElementById('tarjeta-inicio')
    var tarjetaBienvenida = document.getElementById('tarjeta-bienvenida')
  
    // Ocultamos la tarjeta de inicio de sesion
    tarjetaInicioDeSesion.classList.add('d-none')
  
    // Volvemos visible la tarjeta de bienvenida
    tarjetaBienvenida.classList.remove('d-none')
  }
  
  function iniciarSesion(event) {
    event.preventDefault()
  
    var inputEmail = document.getElementById('InputEmail1')
    var usuario = inputEmail.value
    localStorage.setItem('usuario',usuario)
  
    var tituloBienvenidaUsuario = document.getElementById('InputPassword1')
    tituloBienvenidaUsuario.innerHTML = usuario
  
    mostrarTarjetaBienvenida()
  }
  

  function CerrarSesion(event){

   var tarjetaInicioDeSesion = document.getElementById('tarjeta-inicio')
    var tarjetaBienvenida = document.getElementById('tarjeta-bienvenida')
     // Ocultamos la tarjeta de inicio de sesion
     tarjetaInicioDeSesion.classList.remove('d-none')
  
     // Volvemos visible la tarjeta de bienvenida
     tarjetaBienvenida.classList.add('d-none')

     limpiarFormulario()
  }


  function limpiarFormulario() {
    var inputEmail = document.getElementById('InputEmail1')
    var inputContrasena = document.getElementById('InputPassword1')
  
    inputEmail.value = ""
    inputContrasena.value = ""
  }