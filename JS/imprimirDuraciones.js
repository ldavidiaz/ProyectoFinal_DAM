const lista_objAudios= [];
const audioFiles = [
    ["2010_Pop-Akira_Sora.mp3", "2010_Pop-Akira_Sora.ogg"],
    ["Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3", "Help_You_Out_(ft.Jonathon)-Leonell_Cassio.ogg"],
    ["Szistirra-Minty_Mojito_ft_Akira_Sora.mp3", "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg"],
    ["Technology-Makaih_Beats.mp3", "Technology-Makaih_Beats.ogg"]
];
const audioNames = [];
const artistNames = [];

    function imprimirDuracionesPistas() {
        const audElem0 =new Audio("../Recursos/audios/2010_Pop-Akira_Sora.mp3")
        const audElem1 =new Audio("../Recursos/audios/Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3")
        const audElem2 =new Audio("../Recursos/audios/Szistirra-Minty_Mojito_ft_Akira_Sora.mp3")
        const audElem3 =new Audio("../Recursos/audios/Technology-Makaih_Beats.mp3")
        const audElem4 =new Audio("../Recursos/audios/Ayakashi_Fuuji-Akira_Sora.mp3")

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
  
/* function playPista(id){
    var srcAudio = null;
    var autorPista = null;
    var tituloPista = null;
    srcAudio = id == 0 ? audioFiles[0][0] : id == 1 ? audioFiles[1][0] : id==2?audioFiles[2][0] : id==3?audioFiles[3][0] :undefined;
    autorPista = id == 0 ? artistNames[0] : id == 1 ? artistNames[1] : id==2?artistNames[2] : id==3?artistNames[3] :undefined;
    tituloPista = id == 0 ? audioNames[0] : id == 1 ? audioNames[1] : id==2?audioNames[2] : id==3?audioNames[3] :undefined;
    var audioPlayer = document.getElementById("player");
    pintarReproductor(srcAudio,autorPista,tituloPista);

} */

    function pintarReproductor(src,autor,titulo){

        var lblInic = document.getElementById("lbl-inic-reproductor");
        var lblFin = document.getElementById("lbl-fin-reproductor");
        let listaPlana = lista_objAudios.flat();
        let indexAudio = listaPlana.findIndex((n)=> n == src);
        var inicDuration = 0;
        var inicDurationFormatted = formatTime(inicDuration);
        var finDuracion = listaPlana[indexAudio+1] ;
        lblInic.innerText = inicDurationFormatted;
        lblFin.innerText = finDuracion;
        var tituloPista = document.getElementById("lbl-cancion-reproductor");
        tituloPista.innerText = titulo;

        var artistaPista = document.getElementById("lbl-artista-reproductor");
        artistaPista.innerText = autor;
        console.log("reprodu...")
    }
