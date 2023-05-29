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
        titulo: "Szistirra",
        autor: "Minty Mojito ft Akira Sora",
        cover: "img-aud2.png",
        file1: "Szistirra-Minty_Mojito_ft_Akira_Sora.mp3" ,
        file2: "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg" 
    },
    {
        titulo: "Technology",
        autor: "Makaih Beats",
        cover: "img-aud3.png",
        file1: "Technology-Makaih_Beats.mp3",
        file2: "Technology-Makaih_Beats.ogg"
    }
];
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
//funciones de volumen
btnVolumen.addEventListener("mouseenter",() =>{
    barraVolumen.classList.remove("hidden");
})
btnVolumen.addEventListener("mouseleave",()=>{
    barraVolumen.classList.add("hidden")
})
/* barraVolumen.addEventListener("mouseleave",()=>{
    barraVolumen.classList.add("hidden")
}) */
/* barraVolumen.addEventListener("input", () => {
    const volume = barraVolumen.value/100;
    audio.volume = volume;
  }); */
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

muteSong.addEventListener("click",()=>{
    console.log("sonido")
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
      cover.classList.add("blink-animation");
    } else {
      pauseSong();
      cover.classList.remove("blink-animation");
    }
  });

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
//crear la lista de reproduccion
//Creaamos li y añadimos enlace a la etiqueta li
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

//pinta la lista de reproduccion
function loadSong(songIndex){
    const src1 = "../Recursos/audios/" + songList[songIndex].file1;
    const src2 = "../Recursos/audios/" + songList[songIndex].file2;
    
    if (getRepeat == true || songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex);
        actualSong = songIndex;
        audio.src = src1;
        
        audio.onloadeddata = function() {
        if (audio.readyState === 4) {
            playSong();
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
            playSong();
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
      
/*     if(getRepeat==true || songIndex !== actualSong ){
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        try{//formato 1
            audio.src = "../Recursos/audios/"+songList[songIndex].file1
            playSong()
            if(audio.readyState!=0){
                window.pintarReproductor(songList[songIndex].file1,songList[songIndex].autor,songList[songIndex].titulo);
                changeCover(songIndex)      
            }
        }catch(error){  
            console.log("second try")
            if(error.name === 'NotSupportedError' || error.name === 'NotFoundError'){
                try{//formato 2
                    audio.src =  "../Recursos/audios/"+songList[songIndex].file2
                    playSong()
                    if(audio.readyState!=0){
                        window.pintarReproductor(songList[songIndex].file1,songList[songIndex].autor,songList[songIndex].titulo);
                        changeCover(songIndex)
                    }
                }catch(e){//download file
                    console.log("im catch")
                    const portada = document.getElementById("portada")
                    cover.classList.remove("src")
                    cover.classList.remove("alt")
                    const descarga = document.createElement("a")
                    descarga.href= "../Recursos/audios/"+songList[songIndex].file1
                    descarga.setAttribute("download","true")
                    descarga.textContent= "Descargar archivo"
                    portada.appendChild(a)
                }
            }

        }
        
    } */
    
}

//actualizar play/pause
function updateControles(){
    if(audio.paused){
        play.classList.remove("bi-play-fill")
        play.classList.add("bi-pause-fill")
    }else{
        play.classList.add("bi-play-fill")
        play.classList.remove("bi-pause-fill")
    }
}

function playSong(){
    console.log(audio.readyState)
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

function pauseSong(){
    audio.pause()
    updateControles()
}

function stopSong(){
    audio.pause()
    audio.currentTime = 0
    document.getElementById("lbl-inic-reproductor").innerText = "00:00";
}

function setRandom(){
    if (getRandom == true){
        getRandom = false
        randomMode.classList.remove("activeBtnBg")
    }else{
        getRandom = true
        randomMode.classList.add("activeBtnBg")
    }
}

function setRepeat(){
    if (getRepeat == true){
        getRepeat = false
        repeat.classList.remove("activeBtnBg")
    }else{
        getRepeat = true
        repeat.classList.add("activeBtnBg")
    }
}

function changeActiveClass(lastIndex, newIndex) {
    const ctdLinks = document.querySelectorAll(".ctd-lista-elem");
  
    if (lastIndex !== null) {
      ctdLinks[lastIndex].classList.remove("active");
  
      const lastLink = ctdLinks[lastIndex];
      const lastDivs = lastLink.querySelectorAll(".activeText");
      lastDivs.forEach((div) => {
        div.classList.remove("activeText");
      });
    }
  
    const newLink = ctdLinks[newIndex];
    newLink.classList.add("active");
    const newDivs = newLink.querySelectorAll(".lista-titulo-pista, .lista-autor-pista, .lista-duracion-pista");
    newDivs.forEach((div) => {
      div.classList.add("activeText");
    });
  }
  
  

function changeCover(index){
    cover.src="../Recursos/img-audios/"+songList[index].cover
    cover.alt="Imagen de portada"
    cover.classList.add("blink-animation")
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 

    var totalSegundos = duration.toFixed(0)
    var total = window.secondsToString(totalSegundos)
    
    var actualSegundos = currentTime.toFixed(0)
    var actual = window.secondsToString(actualSegundos) // de controlador-reproductor.js
    if(currentTime>0 & actual<total)
        document.getElementById('lbl-inic-reproductor').innerText=actual;
}


// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration 
   

    audio.currentTime = current
}

//retroceder
function rewind(){
    if(audio.currentTime > 10)
        audio.currentTime-=10
}

//avanzar
function forward(){   
    if(audio.currentTime+10  < audio.duration)
        audio.currentTime+=10
}

//reproduce la siguiente cancion
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}
//seleccionar cancion aleatorio
function randRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function randomSong(){
    var nextSong = randRange(0,songList.length - 1)
    if(actualSong==nextSong){
        randomSong()
    }else{
        loadSong(nextSong)
    }
}

//Obtiene los modos de random y repeat para elegir la pista
function getModes(){
    contadorRepeat++
    console.log(contadorRepeat)
    if(contadorRepeat>1){
        /* getRepeat=false
        randomMode.classList.remove("activeBtnBg") */
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

audio.addEventListener("ended", () => getModes())
loadSongs()
