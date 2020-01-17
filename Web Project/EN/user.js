inputs = document.querySelectorAll("input");
document.getElementById("button").addEventListener("click", function run(){
    emailCheck();
    userNameCheck();
    passwordCheck();
    confirmCheck();
    dateCheck();
    countryCheck();
    cityCheck();
    phoneCheck();
});

function emailCheck(){
    emailForm = inputs[0];
    email = inputs[0].value;
    sBool = false;
    dBool = false;
    eBool = false;
    dotsearch = false;

    for(var i=0; i<=email.length-1; i++){
        if(String.fromCharCode(email.charCodeAt(i)) == "@"){
            sBool = true;
            console.log("sbool = true");
            dotsearch = true;
        }
        if(dotsearch){
            if(String.fromCharCode(email.charCodeAt(i)) == "."){
                dBool = true;
                console.log("dbool = true");
                cut = email.slice(0, i+1);
                if(email.length-cut.length >= 2){
                    eBool = true;
                    console.log("ebool = true");
                }
            }
        }
    }
    if(sBool && dBool && eBool){
        emailForm.style.background = "";
        emailForm.style.borderColor = "";
    }else{
        emailForm.style.background = "lightcoral";
        emailForm.style.borderColor = "red";
    }
}
function userNameCheck(){
    userForm = inputs[1];
    user = inputs[1].value;

    if(user == false){
        userForm.style.background = "lightcoral";
        userForm.style.borderColor = "red";
    }else{
        userForm.style.background = "";
        userForm.style.borderColor = "";
    }
}
function passwordCheck(){
    type = document.getElementById("passType");
    type.innerHTML = "";
    passForm = inputs[2];
    pass = inputs[2].value;
    lBool = false;
    lowBool = false;
    upBool = false;
    nBool = false;
    ab = "az";
    AB = "AZ";
    n = "09";
    passForm.style.background = "";
    passForm.style.borderColor = "";
    
    if(pass.length > 4){
        lBool = true;
    }
    for(var j=0; j<=pass.length-1; j++){
        for(var i=ab.charCodeAt(0); i<=ab.charCodeAt(1); i++){
            if(pass[j] == String.fromCharCode(i)){
                lowBool = true;
            }
        }
        for(var k=AB.charCodeAt(0); k<=AB.charCodeAt(1); k++){
            if(pass[j] == String.fromCharCode(k)){
                upBool = true;
            }
        }
        for(var c=n.charCodeAt(0); c<=n.charCodeAt(1); c++){
            if(pass[j] == String.fromCharCode(c)){
                nBool = true;
            }
        }
    }
    if(lBool){
        if(lowBool && upBool && nBool){
            type.innerHTML = "Strong";
            type.style.color = "green";
        }else if(lowBool && upBool == false && nBool || lowBool == false && upBool && nBool){
            type.innerHTML = "Medium";
            type.style.color = "darkgoldenrod";
        }else if(lowBool && upBool == false && nBool == false || lowBool == false && upBool && nBool == false || lowBool && upBool && nBool == false){
            type.innerHTML = "Weak";
            type.style.color = "red";
            passForm.style.background = "lightcoral";
            passForm.style.borderColor = "red";
        }
    }else{
        type.innerHTML = "Too Small";
        type.style.color = "red";
        passForm.style.background = "lightcoral";
        passForm.style.borderColor = "red";
        if(pass.length == 0){
            type.innerHTML = "";
        }
    }
}
function confirmCheck(){
    confirmForm = inputs[3];
    confirm = inputs[3].value;
    var eBool = false;
    var tBool = false;

    if(confirm){
        eBool = true;
    }
    if(confirm == pass){
        tBool = true;
    } 
    if(eBool && tBool){
        confirmForm.style.background = "";
        confirmForm.style.borderColor = "";
    }else{
        confirmForm.style.background = "lightcoral";
        confirmForm.style.borderColor = "red";
    }
}
function dateCheck(){
    dateForm = inputs[4];
    date = inputs[4].value;

    if(date == false){
        dateForm.style.background = "lightcoral";
        dateForm.style.borderColor = "red";
    }else{
        dateForm.style.background = "";
        dateForm.style.borderColor = "";
    }
}
function countryCheck(){
    countryForm = inputs[5];
    country = inputs[5].value;

    if(country == false){
        countryForm.style.background = "lightcoral";
        countryForm.style.borderColor = "red";
    }else{
        countryForm.style.background = "";
        countryForm.style.borderColor = "";
    }
}
function cityCheck(){
    cityForm = inputs[6];
    city = inputs[6].value;

    if(city == false){
        cityForm.style.background = "lightcoral";
        cityForm.style.borderColor = "red";
    }else{
        cityForm.style.background = "";
        cityForm.style.borderColor = "";
    }
}
function phoneCheck(){
    phoneForm = inputs[7];
    phone = inputs[7].value;

    if(phone == false){
        phoneForm.style.background = "lightcoral";
        phoneForm.style.borderColor = "red";
    }else if(isNaN(phone)){
        phoneForm.style.background = "lightcoral";
        phoneForm.style.borderColor = "red";
    } else{
        phoneForm.style.background = "";
        phoneForm.style.borderColor = "";
    }
}