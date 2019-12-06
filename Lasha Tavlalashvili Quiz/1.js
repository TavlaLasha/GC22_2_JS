Alphabet = {
    en: "abcdefghijklmnopqrstuvwxyz"
} 
function randSymb(){
    index = (Math.random()*(Alphabet["en"].length-1)).toFixed(0);
    return Alphabet["en"][index];
}
function randWord(){
    word = "";
    for(var i=1; i<=10; i++){
        word += randSymb();
    }
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
            //Alphabet["en"].splice(index, 1);
        }
        table +="</tr>";
    }
    table +="</table>";

    div.innerHTML = table;
}
setInterval(insertTable, 1000);
