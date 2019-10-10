function randomNum(id){
    var min = Number(prompt("Sheiyvanet minimaluri ricxvi:"));
    var max = Number(prompt("Sheiyvanet maximaluri ricxvi:"));
    var n = Number(prompt("Sheiyvanet shemtxveviti ricxvebis raodenoba:"));
    div = document.getElementById(id);
    
    lst = [];
    for(var i=0; i < n; i++){
        numb = Math.random() * (Math.round(min), Math.round(max));
        lst.push(Math.round(numb));
    }
    div.innerHTML = lst;
}