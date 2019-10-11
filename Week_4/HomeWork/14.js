function randomPhoto(id, id2){
    
    const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpeg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpeg", "12.jpg", "13.jpeg", "14.jpg", "15.jpg", "16.jpg", "17.jpeg", "18.jpg", "19.jpg", "20.jpg"];
    const days = ["Orshabati", "Samshabati", "Otxshabati", "Xutshabati", "Paraskevi", "Shabati", "Kvira"];

    var randphoto = photos[Math.floor(Math.random() * photos.length)];
    document.getElementById(id).src = "Photos/" + randphoto;

    div = document.getElementsByClassName(id2);
    var randday = days[Math.floor(Math.random() * days.length)];
    div.innerHTML = randday;
    
}