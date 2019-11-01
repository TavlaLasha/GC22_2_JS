function table(id){
    svt = prompt("sheiyvanet svetebis raodenoba");
    strq = prompt("sheiyvanet striqonebis raodenoba");
    rd = prompt("sheiyvanet potoebis raodenoba 20-mde");
    photos = [];

    for(c=1; c<=rd; c++){
        photos.push(c + ".jpg")
    }

    div = document.getElementById(id);
    table = "<table>"
    for(i=1; i<=strq; i++){
        table += "<tr>";12
        for(n=1; n<=svt; n++){
            randphoto = photos[Math.floor(Math.random() * photos.length)];
            table += "<td>";
            table += "<img alt='IMG' src='Photos/" + randphoto + "'>";
            table += "</td>";
        }
        table += "</tr>";
    }
    table += "</table>"

    div.innerHTML = table;
}
table("div");