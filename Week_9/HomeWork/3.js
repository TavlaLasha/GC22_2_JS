function timeToTime(){
    div = document.getElementById("d1");
    t = new Date('2016-01-01 00:00:00');
    current = new Date();
    dif = new Date(current-t);
    info = "<hr>";
    info += dif.getFullYear()-1970;
    info += "/"
    info += dif.getMonth();
    info += "<hr>";

    div.innerHTML = info;
}
timeToTime();