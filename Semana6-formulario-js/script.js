const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmarPassword = document.getElementById("confirmarPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

// Funciones de validación

function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.className = "valido";
        errorNombre.textContent = "";
        return true;
    } else {
        nombre.className = "invalido";
        errorNombre.textContent = "Debe tener al menos 3 caracteres";
        return false;
    }
}

function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        correo.className = "valido";
        errorCorreo.textContent = "";
        return true;
    } else {
        correo.className = "invalido";
        errorCorreo.textContent = "Correo no válido";
        return false;
    }
}

function validarPassword() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (regex.test(password.value)) {
        password.className = "valido";
        errorPassword.textContent = "";
        return true;
    } else {
        password.className = "invalido";
        errorPassword.textContent = "Mínimo 8 caracteres, un número y un carácter especial";
        return false;
    }
}

function validarConfirmacion() {
    if (password.value === confirmarPassword.value && confirmarPassword.value !== "") {
        confirmarPassword.className = "valido";
        errorConfirmar.textContent = "";
        return true;
    } else {
        confirmarPassword.className = "invalido";
        errorConfirmar.textContent = "Las contraseñas no coinciden";
        return false;
    }
}

function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valido";
        errorEdad.textContent = "";
        return true;
    } else {
        edad.className = "invalido";
        errorEdad.textContent = "Debe ser mayor o igual a 18";
        return false;
    }
}

// Validación general
function validarFormulario() {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}

// Eventos en tiempo real
nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmarPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

// Envío del formulario
document.getElementById("registroForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Formulario enviado correctamente");
});
