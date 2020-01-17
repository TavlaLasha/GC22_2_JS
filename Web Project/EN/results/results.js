function resout(){
    var brand = localStorage.getItem("brand");
    var model = localStorage.getItem("model");
    var modelName = localStorage.getItem("modelName");
    if(brand == "BMW"){
        models=["3series", "5series", "7series"];
        modelNames=["3-series", "5-series", "7-series"];
    }else if (brand == "Mercedes-Benz"){
        models=["cclass", "aclass", "eclass"];
        modelNames=["C-class", "A-class", "E-class"];
        brand = "Mercedes";
    }else if (brand == "VW"){
        models=["jetta", "polo", "golf"];
        modelNames=["Jetta", "Polo", "Golf"];
    }else if (brand == "Audi"){
        models=["a4", "a5", "tt", "rs"];
        modelNames=["A4", "A5", "TT", "RS"];
    }
    if(brand == "--Choose--"){
        brandList = ["BMW", "Mercedes", "VW", "Audi"];
        document.getElementById("form").innerHTML = "";
        for(var j=0; j<=brandList.length-1; j++){
            for(var i=0; i<=models.length-1; i++){
                var div = document.createElement('div');
                var div2 = document.createElement('div');
                div2.className = "resultImage";
                div.className = "result";
                div2.style.backgroundImage = "url(../../Content/Cars/" + brandList[j] + "/" + models[i] + ".jpg)";
                div2.style.backgroundPosition = "center";
                div2.style.backgroundSize = "100%";
                div.innerHTML += div2;
                div.innerHTML += brand + "<br>" + modelNames[i];
                div.style.display = "inline-Block";
                document.getElementById("form").innerHTML += div;
            }
        }
    }else {
        if(model == 0){
            for(var i=0; i<=models.length-1; i++){
                var div = document.createElement('div');
                var div2 = document.createElement('div');
                div2.className = "resultImage";
                div.className = "result";
                div2.style.backgroundImage = "url(../../Content/Cars/" + brand + "/" + models[i] + ".jpg)";
                div2.style.backgroundPosition = "center";
                div2.style.backgroundSize = "100%";
                div.appendChild(div2);
                div.innerHTML += brand + "<br>" + modelNames[i];
                div.style.display = "inline-Block";
                document.getElementById("form").appendChild(div);
            }
        }else{
            var div = document.createElement('div');
            var div2 = document.createElement('div');
            div2.className = "resultImage";
            div.className = "result";
            div2.style.backgroundImage = "url(../../Content/Cars/" + brand + "/" + models[model-1] + ".jpg)";
            div2.style.backgroundPosition = "center";
            div2.style.backgroundSize = "100%";
            div.appendChild(div2);
            div.innerHTML += brand + "<br>" + modelName;
            document.getElementById("form").appendChild(div);
        }
    }
}
function resrun(){
    var md = document.getElementById("model");
    var model = md.options[md.selectedIndex].text;
    localStorage.setItem("brand", brand);
    localStorage.setItem("model", md.options[md.selectedIndex].value);
    localStorage.setItem("modelName", model);
    window.location.href='../results/results.html';
}
function result(){
    br = document.getElementById("brand");
    brand = br.options[br.selectedIndex].text;
    md = document.getElementById("model");
    model = md.options[md.selectedIndex].text;
    mdchange = document.getElementById("model2");

    md.disabled = false;

    if(brand == "BMW"){
        arr = ["3-series", "5-series", "7-series"];
    }else if (brand == "Mercedes-Benz"){
        arr = ["C-class", "A-class", "E-class"];
    }else if (brand == "VW"){
        arr = ["Jetta", "Polo", "Golf"];
    }else if (brand == "Audi"){
        arr = ["A4", "A5", "TT", "RS"];
    }
    md.innerHTML = "";
    opt = document.createElement('option');
    opt.value = 0;
    opt.innerHTML = "--Choose--";
    md.appendChild(opt);
    for(var i=0; i<=arr.length-1; i++){
        opt = document.createElement('option');
        opt.value = i+1;
        opt.innerHTML = arr[i];
        md.appendChild(opt);
    }
}