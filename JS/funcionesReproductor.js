const songList = [
    {
        titulo: "2010 Pop",
        autor: "Akira Sora",
        cover: "img-aud0.png",
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
        console.log("Aplicamos sonido")
        if(actualSong!=null){
            muted=false
            audio.muted = false
            audio.volume = barraVolumen.value/100;
        }
/*         audio.muted=false
        audio.volume = barraVolumen.value/100; */
    }else if(iconMute.classList.contains(sound)){
        iconMute.classList.remove(sound)
        iconMute.classList.add(mute)
        barraVolumen.value=0
        console.log("Quitamos sonido")
        if(actualSong!=null){
            muted=true;
            audio.muted = true;
        }
    }else if(iconMute.classList.contains(soundUp)){
        iconMute.classList.remove(soundUp)
        iconMute.classList.add(mute)
        barraVolumen.value=0
        console.log("Quitamos sonido")
        if(actualSong!=null){
            muted=true;
            audio.muted = true;
        }
    }
    else if(iconMute.classList.contains(soundOff)){
        iconMute.classList.remove(soundOff)
        iconMute.classList.add(mute)
        barraVolumen.value=0
        console.log("Quitamos sonido")
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
btnForward.addEventListener("click",forward)
btnRewind.addEventListener("click", rewind)

let actualSong = null
let muted = false;
//Creaamos li y añadimos enlace a la etiqueta li
function loadSongs(){
    
    songList.forEach((song,index)=>{//<li><a><div><img><div><i></i></div></div><div><div></div><div></div><div></div></div>
        //Crear <li>
        const li = document.createElement("li")
        //Crear <a>
        const link = document.createElement("a")   
        
        //Crear contenido de <a>
        const contImg = document.createElement("div")
        const img = document.createElement("img")
        const contDesc = document.createElement("div")
        const contTitulo = document.createElement("div")
        const contAutor = document.createElement("div")
        const contDuracion = document.createElement("div")

        //hidratar elementos
        link.href= "#"
        link.setAttribute("class","d-flex")

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

        //escuchar clicks
        link.addEventListener("click",() => loadSong(index))

        //Añadir hijos a padres
        contImg.appendChild(img);

        contDesc.appendChild(contTitulo);
        contDesc.appendChild(contAutor);
        contDesc.appendChild(contDuracion);
    
        link.appendChild(contImg);
        link.appendChild(contDesc);
    
        li.appendChild(link);
        // Agregar el elemento <li> al contenedor de la lista
        songs.appendChild(li)
    })
    window.imprimirDuracionesPistas();
}

function loadSong(songIndex){
    if(songIndex !== actualSong ){
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        try{//formato 1
            audio.src = "../Recursos/audios/"+songList[songIndex].file1
            playSong()
            //window.playPista()
            window.pintarReproductor(songList[songIndex].file1,songList[songIndex].autor,songList[songIndex].titulo);
            changeCover(songIndex)
    
        }catch{      
            try{//formato 2
                audio.src =  "../Recursos/audios/"+songList[songIndex].file2
                playSong()
                //window.playPista()
                window.pintarReproductor(songList[songIndex].file1,songList[songIndex].autor,songList[songIndex].titulo);
                changeCover(songIndex)
            }catch{
                //download file
/*                 var descarga = document.createElement("a")
                descarga.setAttribute("download")
                descarga.href = "../Recursos/audios/"+songList[songIndex].file1
                audio.appendChild(descarga) */
            }
        }
    }
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
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a");
  
    if (lastIndex !== null) {
      links[lastIndex].classList.remove("active");
      const lastLink = links[lastIndex];
      const lastSecondChild = lastLink.children[1];
  
      if (lastSecondChild && lastSecondChild.classList.contains("descripcion-pista")) {
        const lastDivs = lastSecondChild.querySelectorAll("div");
        lastDivs.forEach((div) => {
          div.classList.remove("activeText");
        });
      }
    }
  
    links[newIndex].classList.add("active");
    const newLink = links[newIndex];
    const newSecondChild = newLink.children[1];
  
    if (newSecondChild && newSecondChild.classList.contains("descripcion-pista")) {
      const newDivs = newSecondChild.querySelectorAll("div");
      newDivs.forEach((div) => {
        div.classList.add("activeText");
      });
    }
  }
  

function changeCover(index){
    cover.src="../Recursos/img-audios/"+songList[index].cover
    cover.alt="Imagen de portada"
    cover.classList.add("blink-animation")
}

function changeActiveSong(){

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
function rewind(){
    console.log("rewind")
    if(audio.currentTime > 10)
        audio.currentTime-=10
}

function forward(){
    console.log("forward")
    if(audio.currentTime+10  < audio.duration)
        audio.currentTime+=10
}


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

audio.addEventListener("ended", () => randomSong())
loadSongs()
