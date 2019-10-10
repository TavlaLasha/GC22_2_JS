function randomPhoto(id){
    
    const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpeg", "7.jpg", "8.jpg", "9.jpg", "10.jpg"];

    var rand = photos[Math.floor(Math.random() * photos.length)];
    document.getElementById(id).src = "Photos/" + rand;
}