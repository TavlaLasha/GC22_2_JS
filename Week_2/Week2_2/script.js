function textInDiv(id, text) {
    div = document.getElementById(id);
    div.innerText = text;
}
function htmlInDiv(id, text){
    div = document.getElementById(id);
    div.innerHTML = "<h2>"+text+"</h2>";
    div.style.borderBottom = "solid green 3px";
}