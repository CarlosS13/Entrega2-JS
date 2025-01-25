// Declaro mi array, donde voy a almacenar los objetos literales que contienen los datos de mis clientes para poder guardar un turno. Estableci por defecto 2 turnos, para que la function de ver turnos sea mas completa.
const turnos= [{nombre: "Matias Torres", correo: "matitorres@gmail.com", telefono: "351677775",}, 
               {nombre: "Gabriel Arancibia", correo: "gabrielA@gmail.com", telefono: "351566443",}];

// Declaro la function encargada de agendar un nuevo turno, pidiendo los datos del mismo mediante prompt.            
function nuevoTurno(){
    var nombre= prompt("Ingresa tu nombre y apellido:");
    var correo= prompt("Ingresa tu correo electronico:");
    var telefono= prompt("Ingresa tu numero de telefono:");
    
    if(nombre && correo && telefono){
        const turno= {
            nombre: nombre,
            correo: correo,
            telefono: telefono,
        }
        turnos.push(turno);
        confirm("Turno agendado correctamente!")
    } else {
        alert("Debes completar todos los campos, intenta nuevamente.")
    }
}
// En esta parte del codigo, se busca el button declarado en html, para darle funcionalidad y que ejecute la function al hacerle click con eventListener.
const botonAgregar= document.getElementById("agregarTurno");
botonAgregar.addEventListener("click", nuevoTurno);

// Function para ver en la consola los turnos ya existentes.
function verTurnos(){
    for (let i=0; i<turnos.length; i++){
        console.log(turnos[i]);
    }
}
const botonVer= document.getElementById("verTurnos");
botonVer.addEventListener("click", verTurnos);

// Function encargada de cancelar un turno existente, recorriendo el array de turnos y comparando si los correos coinciden para eliminarlo o indicar que el turno no ha sido encontrado. 
function cancelarTurno(){
    var idTurno= prompt("Ingresa el correo electronico que asentaste en el turno:");

    for (let i=0; i<turnos.length; i++){
        if (idTurno == turnos[i].correo){
            turnos.splice(i, 1);
            alert("Turno de "+ idTurno +" cancelado correctamente.")
            return
        } 
    }
    alert("Turno no encontrado, corrobora que el correo electronico sea correcto.")
}
const botonCancelar= document.getElementById("eliminarTurno");
botonCancelar.addEventListener("click", cancelarTurno);