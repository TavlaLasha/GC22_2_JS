function timeToTime(){
    div = document.getElementById("d1");
    t = new Date('2016-01-01 00:00:00');
    current = new Date();
    dif = new Date(current-t);

    info = "<hr>";
    info += Math.floor(dif/(24*60*60*1000));
    info += " დღე <br>";
    miliseconds = dif% (24*60*60*1000);
    miliSecondsInHour = 3600*1000;
    info += miliseconds/miliSecondsInHour;
    info += " საათი <br>";
    info += (miliseconds/miliSecondsInHour)*60;
    info += " წუთი <br>";
    info += (miliseconds/miliSecondsInHour)*60*60;
    info += " წამი <br>";

    div.innerHTML = info;
}
timeToTime();