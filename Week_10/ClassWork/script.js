ge = "აბგდევზთიკლმნოპჟრსტუფქღყშცძწჩხჯჰ";
eng = "abcdefghijklmnopqrstuvwxyz";
ru = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";



// text =
// {
//     name: "Misha",
//     last: "Arushanian",
//     age: 21,
//     x: 18,
//     9: "Hello",
//     y: 34.9
// };

function randomSymbol(lang){
    
    if(lang == "ge"){
        info="";
        for(i=1; i<=(Math.floor(Math.random()*20)); i++){
            index = (Math.random()*31).toFixed(0);
            info += ge[index];
            
        };
        console.log(info);
        
    }else if (lang == "en"){
        info="";
        for(i=1; i<=(Math.floor(Math.random()*20)); i++){
            index = (Math.random()*26).toFixed(0);
            info += eng[index];
            
        };
        console.log(info);
    }else if (lang == "ru"){
        info="";
        for(i=1; i<=(Math.floor(Math.random()*20)); i++){
            index = (Math.random()*33).toFixed(0);
            info += ru[index];
            
        };
        console.log(info);
    }
}
randomSymbol("ge");
randomSymbol("en");
randomSymbol("ru");

Alphabet = {
    ge: "აბგდევზთიკლმნოპჟრსტუფქღყშცძწჩხჯჰ",
    en: "abcdefghijklmnopqrstuvwxyz",
    ru: "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
} 

function randSymb(lang, N){
    info = "";
    for(i=1; i<=N; i++){
        index = (Math.random()*Alphabet[lang].length-1).toFixed(0);
        info += Alphabet[lang][index];
    }
    
    console.log(info);
}
randSymb("ge", 7);