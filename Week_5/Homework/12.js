function randStrRep(){
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", 'y', "z"];
    rand = [];
    randwords = [];
    
    for(x=0; x<10; x++){
        c = Math.floor((Math.random() * 10) + 1);
        for(var i=0; i<c; i++){
            character = chars[Math.floor(Math.random() * chars.length)];
            rand.push(character);
        }
        randwords.push(rand.join(''));
        rand = [];
    }
    randoms = randwords.join(" ");
    for(n=0; n<randoms.length; n++){
        n-=1;
        final = randoms.replace(new RegExp(randoms[n], 'g'), "*")
    }
    
    alert("შემთხვევითი რაოდენობის სიმბოლოსგან დაგენერირებული და ჩანაცვლებული " + c + " სიტყვა: " + final);
}