Alphabet = {
    ge: "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ",
    en: "abcdefghijklmnopqrstuvwxyz",
    ru: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя"
} 

function randomSymbol(lang){
        index = (Math.random()*(Alphabet[lang].length-1)).toFixed(0);
        return Alphabet[lang][index];
}
function randomWord(lang, N){
    word = "";
    for(var i=1; i<=N; i++){
        word += randomSymbol(lang);
    }
    return word;
}
function randomPhrase(lang, N, T){
    phrase = "";
    for(var i=1; i<=T; i++){
        phrase += randomWord(lang, N);
        if(i==T){
            phrase += ".";
        }else{
            phrase += " ";
        }
    }
    return phrase;
}
function randomText(lang, N, T, L){
    N = document.getElementById("i1").value;
    T = document.getElementById("i2").value;
    L = document.getElementById("i3").value;
    lang = document.getElementById("s1").value;
    div = document.getElementById("d1");
    span = document.getElementById("sp");


    text = "";
    for(var i=1; i<=L; i++){
        text += randomPhrase(lang, N, T);
        text += " ";
    }
    div.style.fontSize = "1em";
    div.style.padding = "5px";
    div.style.textAlign = "left";
    div.innerHTML = "";
    div.innerHTML = text;
}