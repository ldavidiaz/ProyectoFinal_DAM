/* 
Array que guarda la información de las pistas
*/
const songList = [
    {
        titulo: "2010 Pop",
        autor: "Akira Sora",
        cover: "2010_img.png",
        file1: "2010_Pop-Akira_Sora.mp3" ,
        file2:"2010_Pop-Akira_Sora.ogg"
    },
    {
        titulo: "Help you out",
        autor: "Leonell Cassio ft Jonathon",
        cover: "img-aud1.png",
        file1: "Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3" ,
        file2: "Help_You_Out_(ft.Jonathon)-Leonell_Cassio.ogg"
    },
    {
        titulo: "Minty Mojito",
        autor: "Szistirra ft Akira Sora",
        cover: "img-aud2.png",
        file1: "Szistirra-Minty_Mojito_ft_Akira_Sora.mp3" ,
        file2: "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg" 
    },
    {
        titulo: "Apollo",
        autor: "Mystery Mammal",
        cover: "img-aud3.png",
        file1: "Mystery_Mammal-Apollo.mp3",
        file2: "Mystery_Mammal-Apollo.ogg"
    }
];

/* 
Obtenemos todos los id's de los elementos con los que se va a interactuar 
*/
const songs = document.getElementById("ctd-lista")
const audio = document.getElementById("player")
const cover = document.getElementById("cover")
const play = document.getElementById("play")
const btnStop = document.getElementById("stop")
const randomMode = document.getElementById("random")
const repeat = document.getElementById("repeat")
const btnRewind = document.getElementById("btnRewind")
const btnForward = document.getElementById("btnForward")
const barraVolumen = document.getElementById("volumen")
const btnVolumen = document.getElementById("ctd-btn-volumen")
const muteSong = document.getElementById("btnVolumen")
const iconMute = document.getElementById("muted")

//listeners de volumen
btnVolumen.addEventListener("mouseenter",() =>{
    barraVolumen.classList.remove("hidden");
})
btnVolumen.addEventListener("mouseleave",()=>{
    barraVolumen.classList.add("hidden")
})

/* 
Actualiza el icono de volumen según el valor de la barra de volumen
*/
barraVolumen.oninput=(e)=>{
    muted = false
    audio.muted=false
    var volumen= e.target.value;
    const vol = e.target.value/100
    //console.log(vol)
    audio.volume = vol;

    var mute = "bi-volume-mute-fill";
    var sound = "bi-volume-down-fill";
    var soundUp = "bi-volume-up-fill"
    var soundOff ="bi-volume-off-fill"
    if(iconMute.classList.contains(mute)){     
        iconMute.classList.remove(mute)
        iconMute.classList.add(sound)
    }
    if(volumen==0){
        if(iconMute.classList.contains(sound)){     
            iconMute.classList.remove(sound)
            iconMute.classList.add(soundOff)
        }else if(iconMute.classList.contains(soundUp)){     
            iconMute.classList.remove(soundUp)
            iconMute.classList.add(soundOff)
        }
    }else if(volumen<45){
        if(iconMute.classList.contains(soundOff)){     
            iconMute.classList.remove(soundOff)
            iconMute.classList.add(sound)
        }else if(iconMute.classList.contains(soundUp)){     
            iconMute.classList.remove(soundUp)
            iconMute.classList.add(sound)
        }
    }else if(volumen>45){
        if(iconMute.classList.contains(soundOff)){     
            iconMute.classList.remove(soundOff)
            iconMute.classList.add(soundUp)
        }else if(iconMute.classList.contains(sound)){     
            iconMute.classList.remove(sound)
            iconMute.classList.add(soundUp)
        }
    }
}

/* 
Añade la clase del icono muted y elimina la clase del icono 
correpondiente que tenga icono de "volumen"
*/
muteSong.addEventListener("click",()=>{
    var mute = "bi-volume-mute-fill";
    var sound = "bi-volume-down-fill";
    var soundUp = "bi-volume-up-fill";
    var soundOff ="bi-volume-off-fill";
    if(iconMute.classList.contains(mute)){
        iconMute.classList.remove(mute)
        iconMute.classList.add(sound)
        barraVolumen.value=20
        if(actualSong!=null){
            muted=false
            audio.muted = false
            audio.volume = barraVolumen.value/100;
        }
    }else if(iconMute.classList.contains(sound)){
        iconMute.classList.remove(sound)
        iconMute.classList.add(mute)
        barraVolumen.value=0
        if(actualSong!=null){
            muted=true;
            audio.muted = true;
        }
    }else if(iconMute.classList.contains(soundUp)){
        iconMute.classList.remove(soundUp)
        iconMute.classList.add(mute)
        barraVolumen.value=0
        if(actualSong!=null){
            muted=true;
            audio.muted = true;
        }
    }
    else if(iconMute.classList.contains(soundOff)){
        iconMute.classList.remove(soundOff)
        iconMute.classList.add(mute)
        barraVolumen.value=0
        if(actualSong!=null){
            muted=true;
            audio.muted = true;
        }
    }
})


const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
progressContainer.addEventListener("click", setProgress)

//escuchar el elemento audio
audio.addEventListener("timeupdate",updateProgress)

//escuchar clicks en el boton play
play.addEventListener("click", () => {
    if (audio.paused) {
      playSong();
      window.mover()
      cover.classList.add("blink-animation");
    } else {
      pauseSong();
      window.clearInterval(id)
      cover.classList.remove("blink-animation");
    }
  });


/*  
 Añadimos listeners de tipo "click" a los botones del reproductor
*/ 
btnStop.addEventListener("click",stopSong)
randomMode.addEventListener("click",setRandom)
repeat.addEventListener("click",setRepeat)
btnForward.addEventListener("click",forward)
btnRewind.addEventListener("click", rewind)

let actualSong = null
let muted = false;
let getRandom = true;
let getRepeat = false;
let contadorRepeat = 0

/* 
Crea las etiquetas con sus atributos y contenido, uno por uno 
de forma iterativa para pintar la lista de reproducción.
*/
function loadSongs(){
    
    songList.forEach((song,index)=>{//<li><a><div><img><div><i></i></div></div><div><div></div><div></div><div></div></div>
        //Crear <li>
        const li = document.createElement("li")
        //Crear <a>
        const link = document.createElement("a")   
        const linkDescarga = document.createElement("a")
        //Crear contenido de <a>
        const contImg = document.createElement("div")
        const img = document.createElement("img")
        const contDesc = document.createElement("div")
        const contTitulo = document.createElement("div")
        const contAutor = document.createElement("div")
        const contDuracion = document.createElement("div")
        const btnDwl = document.createElement("button")
        const iconDwl = document.createElement("i")
        //hidratar elementos
        link.href= "#"
        link.setAttribute("class","d-flex")
        linkDescarga.href=songList[index].file1
        linkDescarga.setAttribute("class","link-dw")
        linkDescarga.setAttribute("download","")

        li.setAttribute("class","ctd-lista-elem d-flex flex-row gap-0")
        contImg.setAttribute("class", "ctd-img-pista")
        img.setAttribute("alt","imagen de portada de pista")
        img.src = "../Recursos/img-audios/"+song.cover

        contDesc.setAttribute("class","descripcion-pista d-flex flex-column align-items-center pt-0")

        contTitulo.setAttribute("class","lista-titulo-pista text-white-50")
        contTitulo.setAttribute("id",` l-tit-pista${index}`)
        contTitulo.textContent = song.titulo

        contAutor.setAttribute("class","lista-autor-pista text-white-50")
        contAutor.setAttribute("id",`l-autor-pista${index}`)
        contAutor.textContent = song.autor

        contDuracion.setAttribute("class","lista-duracion-pista text-white-50 pt-4")
        contDuracion.setAttribute("id",`l-duracion-pista${index}`)

        btnDwl.setAttribute("class","btnDwl")
        btnDwl.setAttribute("type","button")
        iconDwl.setAttribute("class","iconDwl bi bi-download")


        //escuchar clicks
        link.addEventListener("click",() => loadSong(index))

        //Añadir hijos a padres
        contImg.appendChild(img);

        contDesc.appendChild(contTitulo);
        contDesc.appendChild(contAutor);
        contDesc.appendChild(contDuracion);

    
        link.appendChild(contImg);
        link.appendChild(contDesc);

        btnDwl.appendChild(iconDwl)
        linkDescarga.appendChild(btnDwl)
    
        li.appendChild(link);
        li.appendChild(linkDescarga)
        // Agregar el elemento <li> al contenedor de la lista
        songs.appendChild(li)
    })
    window.imprimirDuracionesPistas();
}

/* 
Controla la canción que se va a reproducir, comprobando que se pueda reproducir
el primer formato pasado, y en caso de error prueba con otro formato, y si vuelve a producir
un error, se pinta en el reproductor un link de descarga de la pista.
Además se llama pintarReproductor() que se le pasa como parametros la pista actual, el nombre del auto y el titulo, 
que se encarga de pintar la información de la pista en el reproductor.
También se llama la función changeCover() que se le pasa el indice de la canción para pintar su portada 
en el reproductor.
*/
function loadSong(songIndex){
    const src1 = "../Recursos/audios/" + songList[songIndex].file1;
    const src2 = "../Recursos/audios/" + songList[songIndex].file2;
    
    if (getRepeat == true || songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = src1;
        
        audio.onloadeddata = function() {
        if (audio.readyState === 4) {
            playSong()
            resetRana()
            window.pintarReproductor(audio, songList[songIndex].autor, songList[songIndex].titulo);
            changeCover(songIndex);
        }
        };
        
        audio.onerror = function() {
        // Intentar cargar el segundo src
            audio.src = src2;
            audio.onloadeddata = function() {
            if (audio.readyState === 4) {
            //console.log("2. Segundo archivo de audio cargado correctamente");
            playSong()
            resetRana()
            window.pintarReproductor(audio, songList[songIndex].autor, songList[songIndex].titulo);
            changeCover(songIndex);
            }
        };
        audio.onerror = function() {
            // Realizar otras acciones en caso de fallo
            const msgError = "Error al cargar el archivo de audio"
            document.getElementById("lbl-cancion-reproductor").innerText = msgError
            document.getElementById("lbl-artista-reproductor").innerText = ""
            const portada = document.getElementById("portada")
            cover.classList.remove("src")
            cover.classList.remove("alt")
            const descarga = document.createElement("a")
            descarga.href= "../Recursos/audios/"+songList[songIndex].file1
            descarga.setAttribute("download","true")
            descarga.textContent= "Descargar archivo"
            portada.appendChild(descarga)
        };
        };
    }    
}

/* 
Actualiza play/pause añadiendo o quitando la clase del icono correspondiente
*/
function updateControles(){
    if(audio.paused){
        play.classList.remove("bi-pause-fill")
        play.classList.add("bi-play-fill")
    }else{
        play.classList.add("bi-pause-fill")
        play.classList.remove("bi-play-fill")
    }
}

function resetRana(){
    window.clearInterval(id)
    window.ctx.reset()
    window.mover()
}

/* 
Inicia la reproduccion de la pista actual y actualiza el boton de play/pause.
Además tiene el cuenta el valor del volumen, en caso de que el botón de muteo este activo
modifica el valor de la barra de volumen y mutea la pista actual
*/
function playSong(){

    if(actualSong!==null){
        audio.play()            
        if(muted==true)
        {   
            if(audio.volume='0'){
                barraVolumen.value=0
                audio.muted=true
            }
        }         
        updateControles()
    }
}

/* 
Pausa la pista actual y actualiza el boton de play/pause
*/
function pauseSong(){
    audio.pause()
    updateControles()
}

/* 
Para/pausa la canción para poner a 0 el valor del tiempo de reproduccion de la pista
actual. Además se modifica el timer de duración actual a "00:00" y se actualiza 
el botón de play/pause.
También se controla la animación de la rana, pausandola para luego devolverla a su
estado inicial.
*/
function stopSong(){
    audio.pause()
      
    audio.currentTime = 0
    document.getElementById("lbl-inic-reproductor").innerText = "00:00";
    updateControles()

    //reseteamos rana
    window.clearInterval(id)
    window.ctx.reset()
}

/* 
Añade o elimina la clase "activeBtnBg" del botón de reproducción aleatoria.
-".activeBtnBg" cambia el valor del background-color del botón de reproducción aleatoria
*/
function setRandom(){
    if (getRandom == true){
        getRandom = false
        randomMode.classList.remove("activeBtnBg")
    }else{
        getRandom = true
        randomMode.classList.add("activeBtnBg")
    }
}

/* 
Añade o elimina la clase "activeBtnBg" del botón repeat.
-".activeBtnBg" cambia el valor del background-color del botón repeat
*/
function setRepeat(){
    if (getRepeat == true){
        getRepeat = false
        repeat.classList.remove("activeBtnBg")
    }else{
        getRepeat = true
        repeat.classList.add("activeBtnBg")
    }
}

/* 
Añade o quita las clases "active" y "activeText" según el último(lastIndex) y primer
(newIndex) indice de la pista anterior y la actual.
-".active" se encarga de ampliar el contenedor de la pista seleccionada
y añadirle un box-shadow para resaltar
-".activeText" aumenta un poco la fuente y cambia el color del texto
de la pista seleccionada
*/
function changeActiveClass(lastIndex, newIndex) {
    const ctdLinks = document.querySelectorAll(".ctd-lista-elem");
    //comprobamos que el reproductor anteriormente haya reproducido una pista
    if (lastIndex !== null) {
      // Elimina la clase "active" del último elemento seleccionado
      ctdLinks[lastIndex].classList.remove("active");

      // Elimina la clase "activeText" de los elementos dentro del último elemento seleccionado  
      const lastLink = ctdLinks[lastIndex];
      const lastDivs = lastLink.querySelectorAll(".activeText");
      lastDivs.forEach((div) => {
        div.classList.remove("activeText");
      });
    }

    // Agrega la clase "active" al nuevo elemento seleccionado
    const newLink = ctdLinks[newIndex];
    newLink.classList.add("active");

    // Agrega la clase "activeText" a los elementos dentro del nuevo elemento seleccionado
    const newDivs = newLink.querySelectorAll(".lista-titulo-pista, .lista-autor-pista, .lista-duracion-pista");
    newDivs.forEach((div) => {
      div.classList.add("activeText");
    });
  }
  
  
/* 
Cambia la foto de portada según el indice de canción que pasamos por
parámetro. Este indice lo usamos para acceder a la posicion del array
donde se encuentra la imagen de la pista.
*/
function changeCover(index){
    cover.src="../Recursos/img-audios/"+songList[index].cover
    cover.alt="Imagen de portada"
    cover.classList.add("blink-animation")
}

/* 
Actualizar barra de progreso de la canción
*/
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100

    // Actualiza el ancho de la barra de progreso
    progress.style.width = percent + "%" 

    // Convierte el tiempo total y actual a formato de horas:minutos:segundos   
    var totalSegundos = duration.toFixed(0)
    var total = window.secondsToString(totalSegundos)
    
    var actualSegundos = currentTime.toFixed(0)
    var actual = window.secondsToString(actualSegundos)

    // Actualiza el elemento de etiqueta con el tiempo actual de reproducción
    if(currentTime>0 & actual<total)
        document.getElementById('lbl-inic-reproductor').innerText=actual;
}


/* 
Hacer la barra de progreso clicable
*/
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration 

   // Establece el tiempo de reproducción actual según la posición de la barra de progreso
    audio.currentTime = current
}

/* 
Retroceder la pista 10 segundos si ya se han reproducido 
10 segundos de la cancion
 */
function rewind(){
    if(audio.currentTime > 10)
        audio.currentTime-=10
}

/* 
Avanza la pista 10 segundos si quedan más de 10 segundos 
para que la canción finalize
 */
function forward(){   
    if(audio.currentTime+10  < audio.duration)
        audio.currentTime+=10
}

/* 
Reproduce la siguiente cancion en caso que el botón de 
reproducción aleatoria esté desactivado
*/
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

/* Devuelve un número aleatorio en el rango de los parámetros pasados
[min:max].
-min valor minimo
-max valor máximo
*/
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* 
Selecciona una cancion aleatoria por indice [0:3]
 */
function randomSong(){
    var nextSong = randRange(0,songList.length - 1)
    if(actualSong==nextSong){
        randomSong()
    }else{
        loadSong(nextSong)
    }
}

/* 
Obtiene los modos de random y repeat para elegir la pista 
siguiente que se ha de reproducir.
*/
function getModes(){
    contadorRepeat++
    console.log(contadorRepeat)
    if(contadorRepeat>1){
        setRepeat();
    }
    if(getRepeat==true){
        loadSong(actualSong)
        
    }else if(getRepeat==false && getRandom==false){
        nextSong()
    }else if(getRepeat==false && getRandom==true){
        randomSong()
    }
}

/* 
Evento que hace uso del HTML AUDIO/VIDEO DOM REFERENCE
para indicar que al finalizar la canción actual ejecute la
función que se le pasa.
*/
audio.addEventListener("ended", () => getModes())

loadSongs()
