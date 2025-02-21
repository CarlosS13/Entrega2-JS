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

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (formulario.style.display === "none" || formulario.style.display === ""){
            formulario.style.display = "block";
        } else {
            formulario.style.display = "none";
        }
    });
});

// // Dejo este comentario para el profe o tutor que este corrigiendo la entrega. Tuve una semana complicada en lo laboral, estoy dando soporte como auxiliar de supervisor en mi trabajo y he tenido muchas reuniones de capacitacion, por lo que me falto tiempo para finalizar la entrega. Un compañero del curso se habia comunicado antes para pedir la extension de la entrega y le dijeron que hable hoy mismo, hable con soporte pero no sabia que no hay mas asesores en linea en este horario (tengo capturas del chat). Si es posible y no hay problema, realizo la entrega igualmente, para que en la plataforma de coderhouse figure como entregada y en el transcurso de esta noche si lo llego a finalizar o mañana a la mañana agrego el contenido que me falta y lo actualizo dentro del repositorio con otro push. Perdon y muchas gracias! Saludos!