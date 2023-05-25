//Array con el listado de canciones a mostrar en el reprodutor
/* const canciones = [
    ["2010_Pop-Akira_Sora.mp3", "2010_Pop-Akira_Sora.ogg"],
    ["Help_You_Out_(ft.Jonathon)-Leonell_Cassio.mp3", "Help_You_Out_(ft.Jonathon)-Leonell_Cassio.ogg"],
    ["Szistirra-Minty_Mojito_ft_Akira_Sora.mp3", "Szistirra-Minty_Mojito_ft_Akira_Sora.ogg"],
    ["Technology-Makaih_Beats.mp3", "Technology-Makaih_Beats.ogg"]
    ]
    var indiceActual = new Array(1) */
        

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
