const lista_reproduccion = document.getElementById("ctd-lista");

const audioFiles = [
    ["2010_Pop-Akira_Sora.mp3", "2010_Pop-Akira_Sora.ogg"],
    ["Leonell_Cassio-Help_You_Out_(ft.Jonathon).mp3", "Leonell_Cassio-Help_You_Out_(ft.Jonathon).ogg"],
    ["Szistirra-Minty_Mojito_ft_Akira_Sora.mp3", "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg"],
    ["Technology-Makaih_Beats.mp3", "Technology-Makaih_Beats.ogg"]
];
const imgsAudios = [
    "img-aud0.png",
    "img-aud1.png",
    "img-aud2.png",
    "img-aud3.png"
];

function dibujarCtdElemLista(){
    var ctdLista = document.getElementById("ctd-lista");
    var ctdAudio = document.getElementById("ctd-Audios");

    for(let i=0;i<audioFiles.length;i++){
        var ctdDatos='<div class="ctd-lista-elem d-flex flex-row gap-0">'+
        '<div class="ctd-img-pista"><img id="img-pista'+i+'" alt="imagen de portada de pista">'+
        '<div class="play-pause-icon"><i class="bi bi-play text-light fs-2 ps-1 "></i>'+
        '</div></div>'+
        '<div class="descripcion-pista d-flex flex-column align-items-center pt-0">'+
            '<div class="lista-titulo-pista text-white-50" id="l-tit-pista'+i+'"></div>'+
            '<div class="lista-autor-pista text-white-50" id="l-autor-pista'+i+'"></div>'+
            '<div class="lista-duracion-pista text-white-50 pt-4" id="l-duracion-pista'+i+'"></div>'+
        '</div></div>' ;
        ctdLista.innerHTML += ctdDatos;
    }
    for(let i=0;i<audioFiles.length;i++){
        var elemAudio ='<audio id="pistaActual'+i+'">'+
        '<source src="../Recursos/audios/'+audioFiles[i][0]+'" type="audio/mpeg" preloaded="metadata" >'+
        '<source src="../Recursos/audios/'+audioFiles[i][1]+'" type="audio/ogg" preloaded="metadata"></audio>'
        ctdAudio.innerHTML += elemAudio;
    }
    dibujarDatosElemLista();
    imprimirDuracionesPistas();
}
function dibujarDatosElemLista(){
    var audioNames = [];
    var artistNames = [];

    audioFiles.forEach(function(files) {
        var audioName = files[0].replace(".mp3", "");

        var regex = /^(.*?)\-(.*?)$/;
        var matches = regex.exec(audioName);

        var audioTitle = matches[1];
        var artistName = matches[2];

        audioNames.push(audioTitle);
        artistNames.push(artistName);
    });
   
    for(let i=0;i<imgsAudios.length;i++){
        var img = document.getElementById(`img-pista${i}`);
        img.setAttribute("src",`../Recursos/img-audios/${imgsAudios[i]}`);
    }
 
    for(let i=0;i<audioFiles.length;i++){
        var titulo = document.getElementById(`l-tit-pista${i}`);
        var autor = document.getElementById(`l-autor-pista${i}`);
        //var titulo = document.getElementById(`#l-tit-pista${i}`);
        titulo.innerText = audioNames[i];
        autor.innerText = artistNames[i];
    }
    
}

function imprimirDuracionesPistas() {
const audElem0 =new Audio("../Recursos/audios/2010_Pop-Akira_Sora.mp3")
const audElem1 =new Audio("../Recursos/audios/Leonell_Cassio-Help_You_Out_(ft.Jonathon).mp3")
const audElem2 =new Audio("../Recursos/audios/Szistirra-Minty_Mojito_ft_Akira_Sora.mp3")
const audElem3 =new Audio("../Recursos/audios/Technology-Makaih_Beats.mp3")
const audElem4 =new Audio("../Recursos/audios/Ayakashi_Fuuji-Akira_Sora.mp3")
/*     var audioDurations = [];
    
    for (let i = 0; i < audioFiles.length; i++) {
        console.log(audioDurations);
        var duracionPista = document.getElementById(`l-duracion-pista${i}`);
        var durPistaActual = document.getElementById(`pistaActual${i}`);
        await new Promise(resolve=>{
            durPistaActual.addEventListener('loadeddata', function () {
                var duracion = durPistaActual.duration;
                var duracionFormateada = formatTime(duracion);
                audioDurations.push(duracionFormateada);
                duracionPista.innerText = 'Duración del audio: ' + audioDurations[i];
                resolve();
            });
        });
    } */
    audElem0.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista0`);
        let durationAud0 = audElem0.duration;
        var formatDuration = formatTime(durationAud0)
        duracionPista.innerText ='Duracion: '+ formatDuration;
        // The duration variable now holds the duration (in seconds) of the audio clip
    });

    audElem1.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista1`);
        let durationAud1 = audElem1.duration;
        var formatDuration = formatTime(durationAud1)
        duracionPista.innerText ='Duracion: '+ formatDuration;
    // The duration variable now holds the duration (in seconds) of the audio clip
    });
    audElem2.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista2`);
        let durationAud2 = audElem2.duration;
        var formatDuration = formatTime(durationAud2)
        duracionPista.innerText ='Duracion: '+ formatDuration;
    // The duration variable now holds the duration (in seconds) of the audio clip
    });
    audElem3.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista3`);
        let durationAud3 = audElem3.duration;
        var formatDuration = formatTime(durationAud3)
        duracionPista.innerText ='Duracion: '+ formatDuration;
    // The duration variable now holds the duration (in seconds) of the audio clip
    });  
}
function formatTime(duration) {
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration % 60);
    var minutesStr = minutes < 10 ? '0' + minutes : minutes;
    var secondsStr = seconds < 10 ? '0' + seconds : seconds;
    return minutesStr + ':' + secondsStr;
}
/*   console.log("Nombres de audio:", audioNames);
  console.log("Nombres de artistas:", artistNames); 
  duracionPista.innerText = 'Duración del audio: ' + audioDurations[i];  
  */