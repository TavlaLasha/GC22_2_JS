function randomPhoto(id){
    photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
    days = ["Orshabati", "Samshabati", "Otxshabati", "Xutshabati", "Paraskevi", "Shabati", "Kvira"];

    div = document.getElementById(id);
    
    randphoto = photos[Math.floor(Math.random() * photos.length)];
    randday = days[Math.floor(Math.random() * days.length)];
    
    output = randday + "<img alt='IMG' src='Photos/" + randphoto + "'>";
    
    div.innerHTML = output;
}
randomPhoto("img");