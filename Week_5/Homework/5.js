function symbolFind() {
    var text = prompt("შეიყვანეთ ნებისმიერი სტრიქონი");
    if(Array.isArray(text.toLowerCase().match(/a/g))){
        count = text.toLowerCase().match(/a/g).length;
    }else{
        count = 0;
    }
    alert("შეყვანილი სტრიქონი შეიცავს: " + count + " a სიმბოლოს");
}