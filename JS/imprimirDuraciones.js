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

    function pintarReproductor(src,autor,titulo){
        var lblInic = document.getElementById("lbl-inic-reproductor");
        var lblFin = document.getElementById("lbl-fin-reproductor");

        var inicDuration = 0;
        var inicDurationFormatted = formatTime(inicDuration);
        var finDuracion = formatTime(src.duration) ;
        lblInic.innerText = inicDurationFormatted;
        lblFin.innerText = finDuracion;
        var tituloPista = document.getElementById("lbl-cancion-reproductor");
        tituloPista.innerText = titulo;

        var artistaPista = document.getElementById("lbl-artista-reproductor");
        artistaPista.innerText = autor;

    }
