window.dibujarCtdElemLista();
//Array con el listado de canciones a mostrar en el reprodutor
const canciones = [
    ["2010_Pop-Akira_Sora.mp3", "2010_Pop-Akira_Sora.ogg"],
    ["Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3", "Help_You_Out_(ft.Jonathon)-Leonell_Cassio.ogg"],
    ["Szistirra-Minty_Mojito_ft_Akira_Sora.mp3", "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg"],
    ["Technology-Makaih_Beats.mp3", "Technology-Makaih_Beats.ogg"]
    ]
    var indiceActual = new Array(1)
    
    //Funcion para crear mediante javascript el listado de canciones
/*     function crearPlayList(){
        const listado = document.createElement('ol')
        listado.setAttribute("id", 'listadoMusica')
        for (let i = 0; i<canciones.length; i++){
            const item = document.createElement('li')
            item.appendChild(document.createTextNode(canciones[i])) 
            item.setAttribute("id", canciones.indexOf(canciones[i]))
            listado.appendChild(item)
        }
        return listado
    }
    document.getElementById('playList').appendChild(crearPlayList()) */
    
    var listadoMusica= document.getElementById('ctd-lista')/* <ul> */

    listadoMusica.onclick = (e) =>{
        const itemClick = e.target
        removeActive()
        itemClick.classList.add("active");
        loadMusic(itemClick.innerText)
        player.play()
        indiceActual[0]= e.target.id
        if(!isNaN(indiceActual[0]))
            classIconPlay();
    }
    //Funcion para cambiar el icono del reprodutor
    function classIconPlay(){
        var element = document.getElementById("pause")
        element.classList.remove("bi-pause-fill");
        element.classList.add("bi-play-fill");
    }
    //Funcion para control del volumen
/*     const volumen= document.getElementById("volumen")
    volumen.oninput= (e) =>{
        const vol = e.target.value
        player.volume =vol
    } */
    //Funcion para actualizar la barra de progreso del reprodutor
    const updateProgress = () =>{
        if (player.currentTime >0){
            const barra = document.getElementById('progress')
            barra.value = (player.currentTime / player.duration) * 100
            
            var duracionSegundos= player.duration.toFixed(0);
            dura=secondsToString(duracionSegundos);
            var actualSegundos = player.currentTime.toFixed(0)
            actual=secondsToString(actualSegundos);
            
            duracion= actual +' / '+ dura
            document.getElementById('lbl-inic-reproductor').innerText=actual 
            document.getElementById('lbl-fin-reproductor').innerText=dura
        }
        if (player.ended){
            nextMusic();//Reproducir la siguiente pista
        } 
    }
    //Funcion para reproducir la proxima cancion
    function nextMusic(){  
        try{
            var src1 = false;
            const source1 = document.getElementById('source1');
            var musicaActual= Number(indiceActual[0]);
            if (canciones.length == (musicaActual+1)){
                var siguiente = 0
            } else {
                var siguiente = musicaActual + 1
            }
            removeActive()
            var item=document.getElementById(siguiente)
            item.classList.add("active");
            loadMusic(canciones[siguiente][0]);
            player.play()
            indiceActual[0]= siguiente
            //reproduccionActual("Reproduciendo: "+ canciones[siguiente[0]])
            classIconPlay()
            src1=true;
            if(src1 == false){
                try{
                    const source2 = document.getElementById('source2');
                    var musicaActual= Number(indiceActual[0]);
                    if (canciones.length == (musicaActual+1)){
                        var siguiente = 0
                    } else {
                        var siguiente = musicaActual + 1
                    }
                    removeActive()
                    var item=document.getElementById(siguiente)/* <li id='siguiente'> */
                    item.classList.add("active");
                    loadMusic(canciones[siguiente][1]);
                    player.play()
                    indiceActual[0]= siguiente
                    //reproduccionActual("Reproduciendo: "+ canciones[siguiente[0]])
                    classIconPlay()
                }catch{
                    ////alert("Audio no soportado!")
                }
            }
        }catch{
           // alert("Audio no soportado!")
        }
    }

    //Funcion para reproducir la cancion anterior
    function prevMusic(){  
        try{
            var src1=false
            const source1 = document.getElementById('source1');
            var musicaActual= Number(indiceActual[0]);
            if (musicaActual==0){
                var anterior= canciones.length - 1 /* 4?3? */
            } else {
                var anterior = musicaActual - 1
            }
            removeActive()
            var item=document.getElementById(anterior)
            item.classList.add("active");
            loadMusic(canciones[anterior])[0];
            player.play()
            indiceActual[0]= anterior
            //reproduccionActual("Reproduciendo: "+ canciones[anterior])
            classIconPlay()
            src1=true
            if(src1==false){
                try{
                    const source2 = document.getElementById('source2');
                    var musicaActual= Number(indiceActual[0]);
                    if (musicaActual==0){
                        var anterior= canciones.length - 1
                    } else {
                        var anterior = musicaActual - 1
                    }
                    removeActive()
                    var item=document.getElementById(anterior)
                    item.classList.add("active");
                    loadMusic(canciones[anterior][1]);
                    player.play()
                    indiceActual[0]= anterior
                    //reproduccionActual("Reproduciendo: "+ canciones[anterior])
                    classIconPlay()
                }catch{
                    //alert("Audio no soportado!")
                }
            }
        }catch{
            //alert("Audio no soportado!")
        }
    }
    //Funcion para remover todas las clases css activas
    function removeActive(){
        var elems = document.querySelectorAll(".active");
          [].forEach.call(elems, function(el) {
            el.classList.remove("active");
          });
          return elems
    }

    //Funcion para cargar las canciones en el reproductor
    function loadMusic(ruta){
        try{
            var src1 = false
            var source1 = document.getElementById('source1')
            //var folder ="Recursos/audios";//Carpeta donde tenemos almancenada la musica
            //source1.src= folder+"/"+ruta
            source1.src
            var newLista = canciones.flatMap(function(subarray) {
                return subarray[0];
            });
            var index= indiceActual[0]= newLista.indexOf(ruta)
            removeActive()
            var item=document.getElementById(index)/* <li id=''> */
            item.classList.add("active");
            //reproduccionActual("Reproduciendo: "+ ruta)
            player.load()
            src1=true;
            if(src1==false){
                try{
                    var source1 = document.getElementById('source2')
                    var folder ="audio";//Carpeta donde tenemos almancenada la musica
                    source2.src= folder+"/"+ruta
                    var newLista = canciones.flatMap(function(subarray) {
                        return subarray[1];
                    });
                    var index= indiceActual[0]= newLista.indexOf(ruta)
                    removeActive()
                    var item=document.getElementById(index)
                    item.classList.add("active");
                    //reproduccionActual("Reproduciendo: "+ ruta)
                    player.load()
                }catch{
                    //alert("Audio no soportado!")
                }
            }
        }catch{
            //alert("Audio no soportado!")
        }
    }
    //Funcion para pausar o darle play 
    function togglePlay() {
        if (player.paused){
            toggleIcon();
            return player.play();
        } else {
            toggleIcon();
            return player.pause();
        }
    }
    //Funcion para cambiar el icono play o pause
    function toggleIcon() {
       var element = document.getElementById("play");
       element.classList.toggle("bi-pause-fill");
       element.classList.toggle("bi-play-fill");
    }
    //Funcion para que al dar click sobre la barra de progeso se permita adelantar
    progress.addEventListener('click', adelantar);
    function adelantar(e){
        const scrubTime = (e.offsetX / progress.offsetWidth) * player.duration;
        player.currentTime = scrubTime;
        //sonsole.log(e);
    }
    //Funcion para convertir segundos a minutos y horas
    function secondsToString(seconds) {
        var hour="";
        if (seconds>3600){
            hour = Math.floor(seconds / 3600);
            hour = (hour < 10)? '0' + hour : hour;
            hour+=":"
        }
       var minute = Math.floor((seconds / 60) % 60);
      minute = (minute < 10)? '0' + minute : minute;
      var second = seconds % 60;
      second = (second < 10)? '0' + second : second;
      return hour  + minute + ':' + second;
    }
    loadMusic(canciones[0])