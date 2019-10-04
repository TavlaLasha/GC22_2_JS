function table(id){
    div = document.getElementById(id);
    var brd = prompt("sheiyvanet sasurveli charchos zoma");
    table = "<table border="+brd+" width="+270+" height="+270+">"
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