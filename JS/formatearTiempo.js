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
