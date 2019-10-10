function numRound(){
    var i = Number(prompt("sheiyvanet ricxvi"));
    if (roundType == true){
        alert(Math.ceil(i));
    }else if (roundType == false){
        alert(Math.floor(i));
    }
    // alert(Math.round(i));
}