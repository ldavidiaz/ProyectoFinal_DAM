//Elemento CANVAS
alert("Hola, soy JavaScript");
// Obtenemos el elemento del lienzo 
var canvas = document.getElementById("personaje");

// Obtenemos el contexto 2D del lienzo
var contexto = canvas.getContext("2d");

// Dibuja el círculo
contexto.beginPath();
contexto.arc(100, 100, 50, 0, 2 * Math.PI); // El centro está en (100, 100) con un radio de 50
contexto.stroke(); // Dibujamos el borde del círculo