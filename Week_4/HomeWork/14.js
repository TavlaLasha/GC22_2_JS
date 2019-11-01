function randomPhoto(id){
    photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", 
    "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", 
    "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg"];

    days = ["Orshabati", "Samshabati", "Otxshabati", "Xutshabati", "Paraskevi", "Shabati", "Kvira"];
    div = document.getElementById(id);
    randphoto = photos[Math.floor(Math.random() * photos.length)];
    randday = days[Math.floor(Math.random() * days.length)];
    
    output = randday + "<img alt='IMG' src='Photos/" + randphoto + "'>";
    
    div.innerHTML = output;
    
}
randomPhoto("img");