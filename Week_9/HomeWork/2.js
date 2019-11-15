function clock(){
    time = new Date();
    div = document.getElementById("d1");

    info = addZero(time.getHours());
    info += ":";
    info += addZero(time.getMinutes());
    info += ":";
    info += addZero(time.getSeconds());
    div.innerHTML = info;
}
setInterval(clock, 1000);

function addZero(time){
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}
