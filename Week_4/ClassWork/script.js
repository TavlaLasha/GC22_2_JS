function testAlert(){
    alert("Hello GAU");
}
function testPrompt(id){
    div = document.getElementById(id);
    data = prompt("sheiyvaneee");
    if (data == null){
        data = "There was a problem";
    }
    div.innerHTML = data;
}
function testConfirm(){
    data = confirm("Are you in GAU?");

}
function testString(){
    text = "Misha is a boy he is good boy is a perfect boy!";
    console.log(text.length);
    console.log(text.indexOf("is"));
    console.log(text.lastIndexOf("is"));
    console.log(text.slice(3, 5));
    console.log(text.substr(3, 5));
    console.log(text.replace("boy", "man"));
    console.log(text.replace(new RegExp("boy", 'g'), "man"));
}
function testChar(){
    text = "Misha is a boy!";
    console.log(text[3]);
    console.log(text.charCodeAt(3).toString(2));
}
function numberOfAs(){
    text = document.getElementById("textid").Value;
    console.log(text);
    count = 0;
    for(i=0; i<text.length; i++){
        if(text[i]=='a'){
            count++;
        }
    }
    document.getElementById("result3").innerText = count;

}
function randString(id){
    div = document.getElementById(id);
    chars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    rand = [];
    for(var i=0; i<10; i++){
        character = chars[Math.floor(Math.random() * chars.length)];
        rand.push(character);
    }
    div.innerHTML = rand.join('');
}