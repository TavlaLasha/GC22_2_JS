function day(id){
    div =  document.getElementById(id);
    days = [];
    photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", 
    "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

    for (i=1; i<=31; i++){
        days.push(i);
    }
    randday = days[Math.floor(Math.random() * days.length)];
    randimg = photos[Math.floor(Math.random() * photos.length)];

    div.innerHTML = randday + "<br><img alt='IMG' src='Photos/" + randimg + "'>";
}
day("day");