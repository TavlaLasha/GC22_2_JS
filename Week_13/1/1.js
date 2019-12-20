var div = document.getElementById("info");
div.innerHTML = "ეს ინფორმაცია შეგიძლიათ წაშალოთ.";
document.getElementById("del").addEventListener("click", function(){
    hold = div.innerHTML;
    div.innerHTML = "";
})
document.getElementById("wrt").addEventListener("click", function(){
    div.innerHTML = hold;
})
document.getElementById("chng").addEventListener("click", function(){
    div.innerHTML = prompt("შეიყვანეთ ინფორმაცია:");
    hold = div.innerHTML;
})