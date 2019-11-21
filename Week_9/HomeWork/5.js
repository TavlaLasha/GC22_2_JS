function TimeOut(){
    delay = 0;
    day = prompt("რამდენი დღე?");
    hour = prompt("რამდენი საათი?");
    minute = prompt("რამდენი წუთი?");
    second = prompt("რამდენი წამი?");

    delay += day*24*60*60*1000;
    delay += hour*60*60*1000;
    delay += minute*60*1000;
    delay += second*1000;
    
    setTimeout(visible, delay);
    time = new Date() - new Date(0, 00, day, hour, minute, second);
    
    setInterval(tme, 1000);
    
}
function visible(){
    div = document.getElementById("d1");
    div.style.visibility = "hidden";
}
function tme() {
    now = new Date();
    distance = time - now;

    days = Math.floor(distance / (1000 * 60 * 60 * 24));
    hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("d2").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}
TimeOut();