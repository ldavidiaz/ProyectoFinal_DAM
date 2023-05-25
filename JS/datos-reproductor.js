const lista_reproduccion = document.getElementById("ctd-lista");
const lista_idsAudios = [];
const lista_objAudios= [];
const audioFiles = [
    ["2010_Pop-Akira_Sora.mp3", "2010_Pop-Akira_Sora.ogg"],
    ["Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3", "Help_You_Out_(ft.Jonathon)-Leonell_Cassio.ogg"],
    ["Szistirra-Minty_Mojito_ft_Akira_Sora.mp3", "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg"],
    ["Technology-Makaih_Beats.mp3", "Technology-Makaih_Beats.ogg"]
];
const imgsAudios = [
    "img-aud0.png",
    "img-aud1.png",
    "img-aud2.png",
    "img-aud3.png"
];
const audioNames = [];
const artistNames = [];
const btnPlay = document.getElementById("play");
const btnStop = document.getElementById("stop");
const btnPause = document.getElementById("pause");
const btnPlayPista = document.getElementById("pistaPlay");
/* btnPlay.addEventListener('onclick', playPista(,"play"), true);
btnPause.addEventListener('onclick', playPista(,"pause"), true);
btnStop.addEventListener("onclick", playPista(,"stop"), true) */;
//btnPlayPista.addEventListener('onclick',playPista(,"play"),true);

function play(){
    //myAudio.load();
    myAudio.play();
    console.log("playing..")
}
function stop(){
    myAudio.pause();
    myAudio.currentTime = 0; 
}
function pause(){
    myAudio.pause();
}

function dibujarCtdElemLista(){
    var ctdLista = document.getElementById("ctd-lista");
    /* var ctdAudio = document.getElementById("ctd-Audios"); */
    var opcion = "play";
    for(let i=0;i<audioFiles.length;i++){
        var nombrePista = audioFiles[i][0];
        var ctdDatos='<li id='+i+'><div class="ctd-lista-elem d-flex flex-row gap-0">'+
        '<div class="ctd-img-pista" onclick="playPista('+i+','+opcion+')" id="pistaPlay"><img id="img-pista'+i+'" alt="imagen de portada de pista">'+
        '<div class="play-pause-icon"><i class="bi bi-pause-fill text-light fs-2 ps-0 " id="i'+i+'"></i>'+
        '</div></div>'+
        '<div class="descripcion-pista d-flex flex-column align-items-center pt-0">'+
            '<div class="lista-titulo-pista text-white-50" id="l-tit-pista'+i+'"></div>'+
            '<div class="lista-autor-pista text-white-50" id="l-autor-pista'+i+'"></div>'+
            '<div class="lista-duracion-pista text-white-50 pt-4" id="l-duracion-pista'+i+'"></div>'+
        '</div></div></li>' ;
        ctdLista.innerHTML += ctdDatos;
    }

/*     for(let i=0;i<audioFiles.length;i++){
        var idAud = 'pistaActual'+i;
        lista_idsAudios.push(idAud);
        var elemAudio ='<audio id="'+idAud+'">'+
        '<source src="../Recursos/audios/'+audioFiles[i][0]+'" type="audio/mpeg" preloaded="metadata" >'+
        '<source src="../Recursos/audios/'+audioFiles[i][1]+'" type="audio/ogg" preloaded="metadata"></audio>'
        ctdAudio.innerHTML += elemAudio;
    } */

    dibujarDatosElemLista();
    imprimirDuracionesPistas();
}
function dibujarDatosElemLista(){
/*     var audioNames = [];
    var artistNames = []; */

    audioFiles.forEach(function(files) {
        var audioName = files[0].replace(".mp3", "");

        var regex = /^(.*?)\-(.*?)$/;
        var matches = regex.exec(audioName);

        var audioTitle = matches[1].replace(/_/g, " ");
        var artistName = matches[2].replace(/_/g, " ");
/*         audioTitle.replace("_"," ");
        artistName.replace("_"," "); */
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
const audElem1 =new Audio("../Recursos/audios/Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3")
const audElem2 =new Audio("../Recursos/audios/Szistirra-Minty_Mojito_ft_Akira_Sora.mp3")
const audElem3 =new Audio("../Recursos/audios/Technology-Makaih_Beats.mp3")
const audElem4 =new Audio("../Recursos/audios/Ayakashi_Fuuji-Akira_Sora.mp3")
/* lista_objAudios.push(audElem0);
lista_objAudios.push(audElem1);
lista_objAudios.push(audElem2);
lista_objAudios.push(audElem3);
lista_objAudios.push(audElem4); */

    audElem0.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista0`);
        let durationAud0 = audElem0.duration;
        var formatDuration = formatTime(durationAud0)
        /* lista_durObjAudios.push(formatDuration); */
        lista_objAudios.push([audioFiles[0][0],formatDuration]);
        duracionPista.innerText ='Duracion: '+ formatDuration;
        // The duration variable now holds the duration (in seconds) of the audio clip
    });

    audElem1.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista1`);
        let durationAud1 = audElem1.duration;
        var formatDuration = formatTime(durationAud1)
        /* lista_durObjAudios.push(formatDuration); */
        lista_objAudios.push([audioFiles[1][0],formatDuration]);
        duracionPista.innerText ='Duracion: '+ formatDuration;
    // The duration variable now holds the duration (in seconds) of the audio clip
    });
    audElem2.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista2`);
        let durationAud2 = audElem2.duration;
        var formatDuration = formatTime(durationAud2)
        /* lista_durObjAudios.push(formatDuration); */
        lista_objAudios.push([audioFiles[2][0],formatDuration]);
        duracionPista.innerText ='Duracion: '+ formatDuration;
    // The duration variable now holds the duration (in seconds) of the audio clip
    });
    audElem3.addEventListener("loadeddata", () => {
        var duracionPista = document.getElementById(`l-duracion-pista3`);
        let durationAud3 = audElem3.duration;
        var formatDuration = formatTime(durationAud3)
        /* lista_durObjAudios.push(formatDuration); */
        lista_objAudios.push([audioFiles[3][0],formatDuration]);
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
var currentAudio = {
    element: null
};
  
function playPista(id,opc){
    var srcAudio = null;
    var autorPista = null;
    var tituloPista = null;
    srcAudio = id == 0 ? audioFiles[0][0] : id == 1 ? audioFiles[1][0] : id==2?audioFiles[2][0] : id==3?audioFiles[3][0] :undefined;
    autorPista = id == 0 ? artistNames[0] : id == 1 ? artistNames[1] : id==2?artistNames[2] : id==3?artistNames[3] :undefined;
    tituloPista = id == 0 ? audioNames[0] : id == 1 ? audioNames[1] : id==2?audioNames[2] : id==3?audioNames[3] :undefined;
    var audioPlayer = document.getElementById("player");
     // Detener la pista de audio actual si existe
    if (currentAudio.element != null) {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
       
    }  
    audioPlayer.innerHTML = "";
    var elemAudio ='<source src="../Recursos/audios/'+audioFiles[id][0]+'" type="audio/mpeg" preloaded="metadata" id="source1" >'+
    '<source src="../Recursos/audios/'+audioFiles[id][1]+'" type="audio/ogg" preloaded="metadata" id="source2">Audio no soportado</audio>'
    audioPlayer.innerHTML += elemAudio; 

    pintarReproductor(srcAudio,autorPista,tituloPista);
  // Reproducir la nueva pista de audio
/*     if(opc==play){
        //audioPlayer.load();
        audioPlayer.play();
        currentAudio.element = audioPlayer;
    }else
        currentAudio.element = null;
     */
    console.log("reprodu...")
    // Guardar la referencia a la pista de audio actual
    
}

function pintarReproductor(src,autor,titulo){
    //definir constante global de nombre y autor
    var lblInic = document.getElementById("lbl-inic-reproductor");
    var lblFin = document.getElementById("lbl-fin-reproductor");
    let listaPlana = lista_objAudios.flat();
    let indexAudio = listaPlana.findIndex((n)=> n == src);
    var inicDuration = 0;
    var inicDurationFormatted = formatTime(inicDuration);
    var finDuracion = listaPlana[indexAudio+1] ;
    lblInic.innerText = inicDurationFormatted;
    lblFin.innerText = finDuracion;
    /*  */
    var tituloPista = document.getElementById("lbl-cancion-reproductor");
    tituloPista.innerText = titulo;

    var artistaPista = document.getElementById("lbl-artista-reproductor");
    artistaPista.innerText = autor;
}