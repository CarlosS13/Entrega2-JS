// En esta primera parte del codigo de Javascript, decidi empezar haciendo la funcionalidad de la pagina de sugerencias, ya que me parecio que debia ser mas rapido.
let sugerencias = JSON.parse(sessionStorage.getItem("sugerencias")) || [];

function cargarSugerencias() {
    let container = document.getElementById("Sugerencias");
    container.innerHTML = ""; 
  
    sugerencias.forEach(sugerencia => {
        agregarSugerencia(sugerencia);
    });
}

function agregarSugerencia(sugerencia) {
    let container = document.getElementById("Sugerencias");
    let nuevoDiv = document.createElement("div");
    nuevoDiv.innerHTML = `<div><h2>${sugerencia.mensaje}</h2><p>${sugerencia.puntaje}</p></div>`;
    container.appendChild(nuevoDiv);
}

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("form");

    cargarSugerencias();
 
    form.addEventListener("submit", function(event){
        event.preventDefault();

        let mensaje = document.getElementById("mensaje").value.trim();
        let puntaje = document.getElementById("puntaje").value;
        if(mensaje === ""){
            alert("Ingresa una reseña para continuar");
            return;
        }
        if(puntaje === ""){
            alert("Selecciona un puntaje para finalizar");
            return;
        }

        let nuevaSugerencia = {
            mensaje: mensaje,
            puntaje: puntaje,
        };

        sugerencias.push(nuevaSugerencia);

        sessionStorage.setItem("sugerencias", JSON.stringify(sugerencias));

        agregarSugerencia(nuevaSugerencia);

        form.reset();
    });
});

// En esta segunda parte del codigo, realizo la funcionalidad de la agenda de turnos.
let botones = document.querySelectorAll("#botonDia");
let formulario = document.getElementById("containerDatos");
let diaSeleccionado = null;

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        diaSeleccionado = boton.textContent.trim(); 
        if (formulario.style.display === "none" || formulario.style.display === ""){
            formulario.style.display = "block";
        } else {
            formulario.style.display = "none";
        }
    });
});

// // Dejo este comentario para el profe o tutor que este corrigiendo la entrega. Tuve una semana complicada en lo laboral, estoy dando soporte como auxiliar de supervisor en mi trabajo y he tenido muchas reuniones de capacitacion, por lo que me falto tiempo para finalizar la entrega. Un compañero del curso se habia comunicado antes para pedir la extension de la entrega y le dijeron que hable hoy mismo, hable con soporte pero no sabia que no hay mas asesores en linea en este horario (tengo capturas del chat). Si es posible y no hay problema, realizo la entrega igualmente, para que en la plataforma de coderhouse figure como entregada y en el transcurso de esta noche si lo llego a finalizar o mañana a la mañana agrego el contenido que me falta y lo actualizo dentro del repositorio con otro push. Perdon y muchas gracias! Saludos!

let popup = document.getElementById("confirmacion");

let turnos = JSON.parse(localStorage.getItem("turnos")) || [];

let agregarTurno = document.getElementById("botonEnviar");

let verificarTurno = function (nuevoTurno) {
    let existente = false;
    turnos.forEach(turno => {
        if (turno.hora === nuevoTurno.hora && turno.dia === nuevoTurno.dia) {
            existente = true;
        }
    });
    return existente;
};

agregarTurno.addEventListener("click", (event) => {
    event.preventDefault();

    let nombre = document.getElementById("inputNombre").value;
    let apellido = document.getElementById("inputApellido").value;
    let email = document.getElementById("inputCorreo").value;
    let telefono = document.getElementById("inputTelefono").value;
    let hora = document.getElementById("inputHora").value;

    if (nombre === "" || apellido === "" || email === "" || telefono === "" || hora === "" || diaSeleccionado === null) {
        alert("Completa todos los campos para finalizar");
        return;
    }

    // Las validaciones para que el formato de correo y telefono sean correctos, lo tuve que googlear, no encontraba forma de hacerlo.
     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email)) {
         alert("Ingresa un correo electrónico válido");
         return;
     }
     let telefonoPattern = /^\d{10,15}$/;
     if (!telefonoPattern.test(telefono)) {
         alert("Ingresa un número de teléfono válido");
         return;
     }

    let nuevoTurno = {
        dia: diaSeleccionado,
        nombre: nombre,
        apellido: apellido,
        email: email,
        telefono: telefono,
        hora: hora,
    };

    if (verificarTurno(nuevoTurno)) {
        alert("Ya hay un turno a esa hora en ese día, selecciona otro turno");
        return;
    }

    popup.classList.add("activo");
    setTimeout(() => { popup.classList.remove("activo"); }, 3500);

    turnos.push(nuevoTurno);

    localStorage.setItem("turnos", JSON.stringify(turnos));

    formulario.style.display = "none";

    document.getElementById("formDatos").reset();
});

// localStorage.removeItem("turnos");

// Ahora si, entrega finalizada. Tengo una duda en cuanto al orden de mi forma de declarar las funciones, arranque haciendo el addeventlistener del domcontentloaded en ambos casos y si iba necesitando alguna funcion para invocar dentro del listener, la declaro encima y no despues. Esta bien o mejor declarar las funciones debajo? Gracias! Saludos!