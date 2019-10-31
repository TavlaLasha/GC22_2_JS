function paintIMG(){
    div = document.getElementById("d1");

    trNumber = 3;
    tdNumber = 4;

    
    
    table = "<table class='mytable'>";
    for(n=0; n<trNumber; n++){
        table +="<tr>";
        for(i=0; i<tdNumber; i++){
            r = Math.ceil(Math.random() * 5);
            table += "<td>";
            table += "<img src='img/" + r + ".png'>"
            table += "</td>";
        }
        table +="</tr>";
    }
    table +="</table>";
    div.innerHTML = table;
}