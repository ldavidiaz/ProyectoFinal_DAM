
//Elemento CANVAS
function draw() {
    // Obtenemos el elemento del lienzo 
    var canvas = document.getElementById("personaje");
    // Obtenemos el contexto 2D del lienzo
    var ctx = canvas.getContext("2d");


// Cabeza
ctx.beginPath();
ctx.arc(25, 25, 20, 0, 2 * Math.PI); // Cuerpo
ctx.fillStyle = "#1CE500"; // Color verde claro
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";

// OREJAS
// Izquierda
ctx.beginPath();
ctx.arc(12, 12, 10, 0, 2 * Math.PI); // Forma
ctx.fillStyle = "#1CE500";
ctx.fill();
//Derecha
ctx.beginPath();
ctx.arc(37, 12, 10, 0, 2 * Math.PI); // Forma
ctx.fillStyle = "#1CE500";
ctx.fill();


// Contorno de los ojos de la rana
ctx.beginPath();
ctx.arc(13, 13, 6, 0, 2 * Math.PI); // Ojo izquierdo
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(36, 13, 6, 0, 2 * Math.PI); // Ojo derecho
ctx.fillStyle = "white";
ctx.fill();

// Pupilas de los ojos
ctx.beginPath();
ctx.arc(14, 15, 4, 0, 2 * Math.PI); // Ojo izquierdo
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(36, 15, 4, 0, 2 * Math.PI); // Ojo derecho
ctx.fillStyle = "black";
ctx.fill();

// Boca de la rana
ctx.beginPath();
ctx.ellipse(25, 35, 12, 7, 0, 0, 10 ); // boca
ctx.fillStyle ="red"; //color del elemento
ctx.fill(); //colorear

}

window.onload = draw;