function randomNum(id){
    var min = Number(prompt("Sheiyvanet minimaluri ricxvi:"));
    var max = Number(prompt("Sheiyvanet maximaluri ricxvi:"));
    div = document.getElementById(id);
    numb = Math.random() * (Math.round(min), Math.round(max));
    div.innerHTML = Math.round(numb);
}