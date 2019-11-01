function randomPhoto(id){
    photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpeg", "7.jpg",
     "8.jpg", "9.jpg", "10.jpg"];

    div = document.getElementById(id);
    rand = photos[Math.floor(Math.random() * photos.length)];
    div.innerHTML += "<img alt='IMG' src='Photos/" + rand + "'>";
}
randomPhoto("img");