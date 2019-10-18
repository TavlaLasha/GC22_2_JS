function randStr(){
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 'y', "z"];
    rand = [];
    randwords = [];

    n = Number(prompt("რამდენი სიმბოლოს შეიცავდეს სიტყვა?"));
    for(x=0; x<20; x++){
        for(var i=0; i<n; i++){
            character = chars[Math.floor(Math.random() * chars.length)];
            rand.push(character);
        }
        randwords.push(rand.join(''));
        rand = [];

    }
    alert("შემთხვევითი " + n + " რაოდენობის სიმბოლოსგან დაგენერირებული 20 სიტყვა: " + randwords.join(" "));
}