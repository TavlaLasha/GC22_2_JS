function charCodeFind() {
    array = [];
    var text = prompt("შეიყვანეთ ნებისმიერი სტრიქონი");
    textf = text.replace(/\s/g, '');
    for(i=0; i<textf.length; i++){
        array.push(textf.charCodeAt(i));
    }
    alert("შეყვანილი სტრიქონი შეიცავს შემდეგ შიდა კოდებს: " + array);
}