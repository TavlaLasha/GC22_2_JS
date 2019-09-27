function classWork6(id, width, height){
    div = document.getElementById(id);
    table = "<table border=1 width="+width+"height="+height+">"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
            +"<tr>"
            +"<td></td>"
            +"<td></td>"
            +"</tr>"
            +"</table>"
    div.innerHTML = table;
}