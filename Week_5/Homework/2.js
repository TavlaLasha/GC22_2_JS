function Confirm(){
    answer = confirm("გამარჯობა, გსურთ გაიგოთ ვებ გვერდის შესახებ უფრო მეტი?");

    if(answer == true){
        document.getElementById("d1").style.visibility = "visible";
    }else{
        document.getElementById("d2").style.visibility = "visible";
    }
}