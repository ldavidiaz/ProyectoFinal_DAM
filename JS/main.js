
//Elemento CANVAS
function draw() {
    // Obtenemos el elemento del lienzo 
    var canvas = document.getElementById("personaje");
    // Obtenemos el contexto 2D del lienzo
    var ctx = canvas.getContext("2d");


// Cabeza
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI); // Cuerpo
ctx.fillStyle = "#1CE500"; // Color verde claro
ctx.fill();
ctx.lineWidth = 2;
ctx.strokeStyle = "black";

// OREJAS
// Izquierda
ctx.beginPath();
ctx.arc(50, 50, 41, 0, 2 * Math.PI); // Forma
ctx.fillStyle = "#1CE500";
ctx.fill();
//Derecha
ctx.beginPath();
ctx.arc(150, 50, 41, 0, 2 * Math.PI); // Forma
ctx.fillStyle = "#1CE500";
ctx.fill();


// Contorno de los ojos de la rana
ctx.beginPath();
ctx.arc(55, 54, 27, 0, 2 * Math.PI); // Ojo izquierdo
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(145, 54, 27, 0, 2 * Math.PI); // Ojo derecho
ctx.fillStyle = "white";
ctx.fill();

// Pupilas de los ojos
ctx.beginPath();
ctx.arc(56, 60, 18, 0, 2 * Math.PI); // Ojo izquierdo
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(144, 60, 18, 0, 2 * Math.PI); // Ojo derecho
ctx.fillStyle = "black";
ctx.fill();

// Boca de la rana
ctx.beginPath();
ctx.ellipse(100, 140, 45, 30, 0, 0, 10 ); // boca
ctx.fillStyle ="red"; //color del elemento
ctx.fill(); //colorear

}

window.onload = draw;