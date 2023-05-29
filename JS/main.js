var posX_izq = 66; //pupila izq
var posX_der = 154; //pupila der
var posY = 70;

var canvas, ctx;

function rana(){
    canvas = document.getElementById('personaje');
    ctx = canvas.getContext('2d');
    
    // Cabeza
    //ctx.beginPath();
    ctx.arc(110, 110, 80, 0, 2 * Math.PI); // Cuerpo
    ctx.fillStyle = "#1CE500"; // Establecemos el color a pintar: verde claro
    ctx.fill(); // Pintamos el circulo 

    // OREJAS
    // Izquierda
    //ctx.beginPath();
    ctx.arc(60, 60, 41, 0, 2 * Math.PI); // Forma
    ctx.fillStyle = "#1CE500";
    ctx.fill();
    //Derecha
    ctx.beginPath();
    ctx.arc(160, 60, 41, 0, 2 * Math.PI); // Forma
    ctx.fillStyle = "#1CE500";
    ctx.fill();

    // Contorno de los ojos de la rana
    ctx.beginPath();
    ctx.arc(65, 64, 27, 0, 2 * Math.PI); // Ojo izquierdo
    ctx.fillStyle = "white";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(155, 64, 27, 0, 2 * Math.PI); // Ojo derecho
    ctx.fillStyle = "white";
    ctx.fill();

    // Pupilas de los ojos
    //function pupilas(){
    ctx.beginPath();
    ctx.arc(posX_izq, posY, 18, 0, 2 * Math.PI); // Ojo izquierdo
    ctx.fillStyle = "black";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(posX_der, posY, 18, 0, 2 * Math.PI); // Ojo derecho
    ctx.fillStyle = "black";
    ctx.fill();

    // Boca de la rana
    ctx.beginPath();
    ctx.ellipse(110, 150, 45, 30, 0, 0, 10 ); // boca
    ctx.fillStyle ="red"; //color del elemento
    ctx.fill(); //colorear

    window.requestAnimationFrame(rana);
  }
  
  window.requestAnimationFrame(rana);
  
  // Funcion que pone en movimiento nuestro dibujo
  var id;
  function mover() {
    id = setInterval(movimiento, 100); //establecemos la velocidad a la cual girará nuestro elemento
    function movimiento() {
        ctx.clearRect(0,0,225,225);
        ctx.translate(110, 110); //movemos el punto sobre el cual girara la figura
        ctx.rotate(Math.PI/30); // rotamos la figura en un angulo de 30º
        ctx.translate(-110, -110); //volvemos a su posicion inicial
    }
  }

  //Funcion para controlar si el boton se pulsa o no: va alternando la funcionalidad cada vez que se pulsa
  var isToggleOn = false;
  function handleClick() {
    if (isToggleOn) { //Pulsamos de nuevo 1
      clearInterval(id); //Detenemos la accion
      isToggleOn = false; //Reiniciamos el boton
      
    } else { // Si pulsamos el boton por primera vez
      mover(); // Iniciamos la accion 
      isToggleOn = true; //Cambiamos el estado del boton para que la siguiente vez entre en el otro bucle
    }
  }
