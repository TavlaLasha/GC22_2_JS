s=2;
o=1;
div = document.getElementById("slide");
dots = document.getElementsByClassName("dot");
dots[0].style.background = "rgb(117, 117, 117)";
brandList = ["BMW", "Mercedes-Benz", "VW", "Audi"];
BMWModel = ["3-series", "5-series", "7-series"];
MercModel = ["C-class", "A-class", "E-class"];
VWModel = ["Jetta", "Polo", "Golf"];
AudiModel = ["A4", "A5", "TT", "RS"];

function first(){
    dots[s-2].style.background = "white";
    s=1;
    slider();
}
function second(){
    dots[s-2].style.background = "white";
    s=2;
    slider();
}
function third(){
    dots[s-2].style.background = "white";
    s=3;
    slider();
}
function fourth(){
    dots[s-2].style.background = "white";
    s=4;
    slider();
}
function opDown(){
    if(o<=0.2){
        clearInterval(inter);
        next();
    }
    div.style.opacity = o;
    div.style.filter = 'alpha(opacity=' + o * 100 + ")";
    o -= o * 0.1;
}
function opUp(){
    if(o>=1){
        clearInterval(inter2);
        document.getElementById("prev").style.pointerEvents = "auto";
        document.getElementById("next").style.pointerEvents = "auto";
        mainInter = setInterval(slider, 5000);
    }
    div.style.opacity = o;
    div.style.filter = 'alpha(opacity=' + o * 100 + ")";
    o += o * 0.1;
}
function next(){
    if(s > 4){
        s=1;
    }
    output(s);
    s++
    clearInterval(mainInter);
    inter2 = setInterval(opUp, 10);
}
function prev(){
    dots[s-2].style.background = "white";
    s-=2;
    if(s<1){
        s=4;
    }
    clearInterval(mainInter);
    slider();
}
function output(s){
    if(s>1){
        dots[s-2].style.background = "white";
        dots[s-2].addEventListener("mouseover", function hover(){dots[s-2].style.background = "rgb(117, 117, 117)";});
        dots[s-2].addEventListener("mouseout", function hover(){dots[s-2].style.background = "white";});
    }else{
        dots[3].style.background = "white";
        dots[3].addEventListener("mouseover", function hover(){dots[3].style.background = "rgb(117, 117, 117)";});
        dots[3].addEventListener("mouseout", function hover(){dots[s-2].style.background = "white";});
    }
    dots[s-1].style.background = "rgb(117, 117, 117)";
    div.style.background = "url(../../Content/Slides/" + s + ".jpg)";
    div.style.backgroundSize = "100%";
    div.style.backgroundRepeat = "no-repeat";
    div.style.backgroundPosition = "center";
}
function slider(){
    if(o>0.9){ //exmareba rom ar gamoidzaxos tavidan garkveuli drois shemdeg
        inter = setInterval(opDown, 10);
    }
    document.getElementById("prev").style.pointerEvents = "none";
    document.getElementById("next").style.pointerEvents = "none";
}
mainInter = setInterval(slider, 5000);
hots();
function randomCar(){
    brandto=4;
    brand = brandList[Math.floor(Math.random()*brandList.length)];

    if(brand == "BMW"){
        randNum = Math.floor(Math.random()*BMWModel.length).toFixed(0);
        model = BMWModel[randNum];
        if (model == "3-series"){
            image = "BMW/3series.jpg"
        }else if (model == "5-series"){
            image = "BMW/5series.jpg"
        }else if (model == "7-series"){
            image = "BMW/7series.jpg"
        }
        BMWModel.splice(randNum, 1);
        if(BMWModel.length < 1){
            brandList.splice(brandList.indexOf("BMW"), 1);
        }
    }else if(brand == "Mercedes-Benz"){
        randNum = Math.floor(Math.random()*MercModel.length).toFixed(0);
        model = MercModel[randNum];
        if (model == "A-class"){
            image = "Mercedes/aclass.jpg"
        }else if (model == "C-class"){
            image = "Mercedes/cclass.jpg"
        }else if (model == "E-class"){
            image = "Mercedes/eclass.jpg"
        }
        MercModel.splice(randNum, 1);
        if(MercModel.length < 1){
            brandList.splice(brandList.indexOf("Mercedes-Benz"), 1);
        }
    }else if(brand == "VW"){
        randNum = Math.floor(Math.random()*VWModel.length).toFixed(0);
        model = VWModel[randNum];
        if (model == "Golf"){
            image = "VW/golf.jpg"
        }else if (model == "Polo"){
            image = "VW/polo.jpg"
        }else if (model == "Jetta"){
            image = "VW/jetta.jpg"
        }
        VWModel.splice(randNum, 1);
        if(VWModel.length < 1){
            brandList.splice(brandList.indexOf("VW"), 1);
        }
    }else {
        randNum = Math.floor(Math.random()*AudiModel.length).toFixed(0);
        model = AudiModel[randNum];
        if (model == "A4"){
            image = "Audi/a4.jpg"
        }else if (model == "A5"){
            image = "Audi/a5.jpg"
        }else if (model == "TT"){
            image = "Audi/tt.jpg"
        }else if (model == "RS"){
            image = "Audi/rs.jpg"
        }
        AudiModel.splice(randNum, 1);
        if(AudiModel.length < 1){
            brandList.splice(brandList.indexOf("Audi"), 1);
        }
    }
    // console.log(randBrand);
    // console.log(model);
}
function hots(){
    var res = document.getElementsByClassName("result");
    for(var i=0; i<= res.length-1; i++){
        res[i].innerHTML = "";
        randomCar();
        res[i].innerHTML += "<div style='background-image:url(../../Content/Cars/" + image + ")' id='image'></div>";
        res[i].innerHTML += brand + "<br> " + model;
    }
    brandList = ["BMW", "Mercedes-Benz", "VW", "Audi"];
    BMWModel = ["3-series", "5-series", "7-series"];
    MercModel = ["C-class", "A-class", "E-class"];
    VWModel = ["Jetta", "Polo", "Golf"];
    AudiModel = ["A4", "A5", "TT", "RS"];
}