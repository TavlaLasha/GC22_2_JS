function dnt(){
    year = document.getElementById("s1");
    date = document.getElementById("s2");
    tm = document.getElementById("d4");

    year.innerHTML = "";
    date.innerHTML = "";
    tm.innerHTML = "";
    time = new Date;
    year.innerHTML += time.getFullYear();
    date.innerHTML += "/" + zeroAdder(time.getMonth()) + "/" + zeroAdder(time.getDate());
    tm.innerHTML += zeroAdder(time.getHours()) + " : " + zeroAdder(time.getMinutes()) + " : " + zeroAdder(time.getSeconds());
}
function zeroAdder(time){
    if(time <= 9){
        return '0' + time;
    }
    else{
        return time;
    }
}
setInterval(dnt, 1000);