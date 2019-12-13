var abc = document.getElementById("d1");
var input = document.querySelectorAll(".in");

function generateABC(){
    var a_z = "az";
    console.log(a_z.charCodeAt(0));
    word = "";
    for(var i=a_z.charCodeAt(0); i<= a_z.charCodeAt(1); i++){
        console.log(i);
        var button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.classList.add('abcChar');
        button.addEventListener("click", function(e){
            input[1].value += e.target.innerText;
        });
        abc.appendChild(button);
    }
    console.log(word);
}
generateABC();

document.getElementById("delete").addEventListener("click", function(){
    var delSymb = input[1].value;
    input[1].value = delSymb.substring(0, delSymb.length - 1);
});