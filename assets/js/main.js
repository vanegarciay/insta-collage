/*VALIDACIONES PARA FORMULARIO*/

var inicioSesion = document.getElementById("iniciarSesion");
var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("input-password");

inicioSesion.addEventListener("click", validateForm);
usernameInput.addEventListener("keyup", function(){
    validateUsername(usernameInput.value);
}, false);
passwordInput.addEventListener("keypress", function(){
    validatePass(passwordInput.value);
}, false);

function validateForm(){
    var username = usernameInput.value;
    var constrasenia = passwordInput.value;

    validateUsername(username);
    validatePass(constrasenia);

    login();
}

function login() {
    var errores = document.getElementsByClassName("error")[0];

    if (errores == null) {
        location.href = "dragdrop.html";
    }
}

function validateUsername(username) {
    if(validateEmpty(username)){
        cleanError("username-container");
    } else {
        showError("username-container", 'Debes ingresar tu nombre de usuario');
    }
}

function validatePass(constrasenia) {
    if(constrasenia.length >= 6 && constrasenia != "123456" && validateEmpty(constrasenia)){
        cleanError("password-container");
    } else {
        showError("password-container", 'Debe ingresar con una contraseña segura');
    }
}

function validateEmpty(dato){
    var respuesta = false;
    if (dato != "") {
        respuesta = true;
    }
    return respuesta;
}

function showError(clase,mensaje){
    var padre = document.getElementsByClassName(clase)[0];
    var span = document.getElementById(clase);
    
    if(span==null) {
        var span_mensaje = document.createElement("span");
        span_mensaje.setAttribute("id", clase);
        span_mensaje.setAttribute("class", "error");
        var texto = document.createTextNode(mensaje);
        padre.appendChild(span_mensaje);
        span_mensaje.appendChild(texto);
    }
}

function cleanError(clase){
    var padre = document.getElementsByClassName(clase)[0];
    var span = document.getElementById(clase);
    
    if(span!=null) {
        padre.removeChild(span);
    }
}