function distance(){
    days = 0;
    start = new Date('2019-01-01 00:00:00');
    year = prompt("შეიყვანეთ წელი:");
    month = prompt("შეიყვანეთ თვის რიცხვი:");
    day = prompt("შეიყვანეთ დღის რიცხვი:");

    userDate = new Date(year, month, day);

    days += (userDate.getFullYear()-start.getFullYear())*365;
    days += ((userDate.getMonth()+1)-(start.getMonth()+1)*30);
    days += (userDate.getDate()-start.getDate());
    console.log(days);
}
distance();