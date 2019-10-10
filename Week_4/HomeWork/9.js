function randomNum(id){
    var min = Number(prompt("Sheiyvanet minimaluri ricxvi:"));
    var max = Number(prompt("Sheiyvanet maximaluri ricxvi:"));
    div = document.getElementById(id);
    
    lst = [];
    for(var i=0; i < 10; i++){
        numb = Math.random() * (Math.round(min), Math.round(max));
        lst.push(Math.round(numb));
    }
    div.innerHTML = lst;
}