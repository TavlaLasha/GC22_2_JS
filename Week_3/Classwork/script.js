function numberTestOne(id){
    el = document.getElementById(id);
    el.innerHTML = Number.MAX_VALUE;
    el.innerHTML +="<br><br>";
    el.innerHTML += Number.MIN_VALUE;
    el.style.fontSize = "2em";
}
function numberTestTwo(id){
    n = document.getElementById("number").value;
    res = document.getElementById(id);
    res.style.fontSize = "2em";
    res.innerHTML = Math.floor(n);
    res.innerHTML += "<br><br>";
}
function numberTestThree(){
    return Math.random();
}