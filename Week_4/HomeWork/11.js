function randomDay(id){
    div = document.getElementById(id);
    
    const days = ["Orshabati", "Samshabati", "Otxshabati", "Xutshabati", "Paraskevi", "Shabati", "Kvira"];
    var rand = days[Math.floor(Math.random() * days.length)];
    div.innerHTML = rand;
}