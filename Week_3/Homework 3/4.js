function table(id){
    div = document.getElementById(id);
    var width = prompt("sheiyvanet sasurveli sigane")
    table = "<table border=1 width="+width+" height="+270+">"
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