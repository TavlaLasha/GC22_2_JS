function randomNum(id){
    div = document.getElementById(id);
    numb = Math.random() * (5, 50);
    div.innerHTML = numb;
}