function classWork1(id, text){
    div = document.getElementById(id);
    // div.innerText = text;
    // div.style.fontWeight = 'bold';
    // div.style.fontStyle = 'italic';
    div.innerHTML = "<b><i><u>"+text+"</b></i></u>"
}