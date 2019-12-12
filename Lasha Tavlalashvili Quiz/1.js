Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function randSymb(){
    index = (Math.random()*(Alphabet.length-1)).toFixed(0);
    return Alphabet[index];
}
function randWord(){
    word = "";
    for(var i=1; i<=10; i++){
        word += randSymb();
        Alphabet.splice(index, 1);
    }
    Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    return word;
}

function insertTable(){
    div = document.getElementById("d1");
    table = "<table class='tbl'>";
    for(var n=0; n<2; n++){
        table +="<tr>";
        for(var i=0; i<3; i++){
            table += "<td>";
            table += randWord();
            table += "</td>";
        }
        table +="</tr>";
    }
    table +="</table>";

    div.innerHTML = table;
}
setInterval(insertTable, 1000);
