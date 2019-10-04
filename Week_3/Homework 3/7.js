function table(id){
    div = document.getElementById(id);
    var bg = prompt("sheiyvanet sasurveli poni inglisurad");
    div.style.backgroundColor = bg;
    table = "<table border=1 width="+270+" height="+270+">"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
            +"</table>"

    div.innerHTML =table;
}