var abc = document.getElementById("d2");
var input = document.querySelectorAll(".in");
var access = false;
input[1].disabled = true;

function generateABC(){
    var a_z = "az";
    var o_9 = "09";
    //console.log(o_9.charCodeAt(0));
    word = "";
    for(var i=a_z.charCodeAt(0); i<= a_z.charCodeAt(1); i++){
        //console.log(i);
        var button = document.createElement("button");
        button.innerText = String.fromCharCode(i);
        button.classList.add('abcChar');
        button.addEventListener("click", function(e){
            if(access){
                input[1].value += e.target.innerText;
            }
        });
        abc.appendChild(button);
    }
    for(var j=o_9.charCodeAt(0); j<= o_9.charCodeAt(1); j++){
        //console.log(j);
        var button = document.createElement("button");
        button.innerText = String.fromCharCode(j);
        button.classList.add('abcChar');
        button.addEventListener("click", function(e){
            if(access){
                input[1].value += e.target.innerText;
            }
        });
        abc.appendChild(button);
    }
    //console.log(word);
}
generateABC();

document.getElementById("backspace").addEventListener("click", function(){
    var delSymb = input[1].value;
    input[1].value = delSymb.substring(0, delSymb.length - 1);
});
document.getElementById("clear").addEventListener("click", function(){
    input[1].value = "";
});
document.getElementById("rand").addEventListener("click", function(){
    input[0].value = randWord();
});
document.getElementById("access").addEventListener("click", function(e){
    //e.target.value = "აკრძალულია"
    if(access){
        access = false;
        infspan.innerHTML = "კლავიატურა გამორთულია";
        input[1].disabled = true;
        
    }else{
        access = true;
        infspan.innerHTML = "კლავიატურა ჩართულია";
        input[1].disabled = false;
    }
});
document.getElementById("check").addEventListener("click", function(){
    if(input[0].value == input[1].value){
        infspan.innerHTML = "კოდი სწორია"
    }else{
        infspan.innerHTML = "კოდი არ ემთხვევა"
        infspan.style.color = "red";
    }
});

function randWord(){
    var a_z = "az";
    var o_9 = "09";
    word = "";

    for(var i=0; i<=5; i++){
        randBool = Boolean(Math.round(Math.random()));
        if(randBool){
            index = Math.floor(Math.random()*(a_z.charCodeAt(1)-a_z.charCodeAt(0)));
            alpha = String.fromCharCode(index+a_z.charCodeAt(0));
        }
        else{
            index = Math.floor(Math.random()*(o_9.charCodeAt(1)-o_9.charCodeAt(0)));
            alpha = String.fromCharCode(index+o_9.charCodeAt(0));
        }
        word += alpha;
    }
    console.log(word);
    return word;
}