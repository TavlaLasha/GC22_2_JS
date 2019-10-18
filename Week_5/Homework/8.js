function randStr(){
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 'y', "z"];
    rand = [];

    n = Number(prompt("რამდენი სიმბოლოს შეიცავდეს სიტყვა?"));

    for(var i=0; i<n; i++){
        character = chars[Math.floor(Math.random() * chars.length)];
        rand.push(character);
    }
    alert("შემთხვევითი " + n + " სიმბოლოსგან მიღებული სიტყვა: " + rand.join(''));
}