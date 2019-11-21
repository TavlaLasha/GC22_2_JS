left = 0;
down = 0;
up = 0;
function GetDown(){
    box = document.getElementById("d2");
    down += 10;
    box.style.top = down+"px";
    if(down>=430){
        clearInterval(k);
        return down;
    }
}
function clickDown(){
    k = setInterval(GetDown, 50);
}
function GetUp(){
    box = document.getElementById("d2");
    down -= 10;
    box.style.top = down+"px";
    if(down=0){
        clearInterval(c);
    }
}
function clickUp(){
    c = setInterval(GetUp, 50);
}
function GetLeft(){
    box = document.getElementById("d2");
    left += 10;
    box.style.left = left+"px";
    if(left>=630){
        clearInterval(k);
        return down;
    }
}
function clickLeft(){
    k = setInterval(GetLeft, 50);
}
    // up = document.getElementById("i2");
    // left = document.getElementById("i3");
    // right = document.getElementById("i4");
    // down_left = document.getElementById("i5");
    // down_right = document.getElementById("i6");
    // up_left = document.getElementById("i7");
    // up_right = document.getElementById("i8");