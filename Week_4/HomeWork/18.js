function table(id){
    photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", 
    "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", 
    "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"];

    div = document.getElementById(id);
    table = "<table>"
    for(i=1; i<=4; i++){
        table += "<tr>";
        for(n=1; n<=3; n++){
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