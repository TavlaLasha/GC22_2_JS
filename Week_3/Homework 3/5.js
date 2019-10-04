function table(id){
    div = document.getElementById(id);
    var height = prompt("sheiyvanet sasurveli simagle");
    table = "<table border=1 width="+270+" height="+height+">"
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