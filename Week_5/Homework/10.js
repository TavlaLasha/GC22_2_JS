function randStr(){
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 'y', "z"];
    rand = [];
    randwords = [];

    m = Number(prompt("მაქსიმუმ რამდენი სიმბოლოს შეიცავდეს თითოეული სიტყვა?"));
    n = Number(prompt("მინიმუმ რამდენი სიმბოლოს შეიცავდეს თითოეული სიტყვა?"));
    k = Number(prompt("რამდენ სიტყვას შეიცავდეს სტრიქონი?"));

    for(x=0; x<k; x++){
        c = Math.floor(Math.random() * m) + n
        for(var i=0; i<c; i++){
            character = chars[Math.floor(Math.random() * chars.length)];
            rand.push(character);
        }
        randwords.push(rand.join(''));
        rand = [];

    }
    alert("შემთხვევითი " + n + "-" + m + " რაოდენობის სიმბოლოსგან დაგენერირებული " + k + " სიტყვა: " + randwords.join(" "));
}