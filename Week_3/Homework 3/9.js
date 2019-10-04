function table(id){
    div = document.getElementById(id);
    var brd = prompt("sheiyvanet sasurveli charchos zoma");
    var height = prompt("sheiyvanet sasurveli simagle");
    var width = prompt("sheiyvanet sasurveli sigane");
    var bg = prompt("sheiyvanet sasurveli poni inglisurad");
    div.style.backgroundColor = bg;
    table = "<table border="+brd+" width="+width+" height="+height+">"
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