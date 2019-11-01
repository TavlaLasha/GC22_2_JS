function day(id){
    div =  document.getElementById(id);
    days = [];

    for (i=1; i<=31; i++){
        days.push(i);
    }
    randday = days[Math.floor(Math.random() * days.length)];
    div.innerHTML = randday;
}
day("day");