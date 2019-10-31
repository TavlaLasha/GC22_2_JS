function nums(){
    div = document.getElementById("d1");
    alert("Davaleba 12");
    n = prompt("Sheiyvanet maqsimaluri ricxvi");

    for(i=1; i <= n; i++){
        div.innerHTML += i + "<br>";
    }
}
function nums2(){
    div = document.getElementById("d2");
    alert("Davaleba 13");
    m = prompt("Sheiyvanet minimaluri ricxvi");
    n = prompt("Sheiyvanet maqsimaluri ricxvi");

    for(i=m; i <= n; i++){
        div.innerHTML += i + "<br>";
    }
}
function nums3(){
    div = document.getElementById("d3");
    alert("Davaleba 13");
    m = prompt("Sheiyvanet minimaluri ricxvi");
    n = prompt("Sheiyvanet maqsimaluri ricxvi");

    if(m<n){
        for(i=m; i <= n; i++){
            div.innerHTML += i + "<br>";
        }
    }
    else if(n<m) {
        for(i=m; i >= n; i--){
            div.innerHTML += i + "<br>";
        }
    }
    else {
        div.innerHTML = i;
    }
}
function table(){
    div = document.getElementById("d4");
    m = prompt("Sheiyvanet striqonebis raodenoba");
    n = prompt("Sheiyvanet svetebis raodenoba");

    table = "<table class='tb'>";
        for(i=1; i<=m; i++){
            table += "<tr>";
            for(c=1; c<=n; c++){
                table += "<td>";
                table += "</td>";
            }
            table += "</tr>";
        }
    div.innerHTML = table;
}
function table2(){
    div = document.getElementById("d5");
    m = prompt("Sheiyvanet striqonebis raodenoba");
    n = prompt("Sheiyvanet svetebis raodenoba");

    table = "<table class='tb'>";
        for(i=1; i<=m; i++){
            table += "<tr>";
            for(c=1; c<=n; c++){
                table += "<td>";
                table += i + "," + c;
                table += "</td>";
            }
            table += "</tr>";
        }
    div.innerHTML = table;
}
function table3(){
    div = document.getElementById("d6");
    m = prompt("Sheiyvanet striqonebis raodenoba");
    n = prompt("Sheiyvanet svetebis raodenoba");
    j = prompt("sheiyvanet sigane piqselebshi");
    k = prompt("sheiyvanet simagle piqselebshi");
    l = prompt("sheiyvanet ponis peri inglisurad");
    f = prompt("sheiyvanet sazgvris zoma piqselebshi");

    table = "<table border=" + f + " width=" + j + " height=" + k + " style='background-color:" + l + ";'" + ">";
        for(i=1; i<=m; i++){
            table += "<tr>";
            for(c=1; c<=n; c++){
                table += "<td>";
                table += i + "," + c;
                table += "</td>";
            }
            table += "</tr>";
        }
    div.innerHTML = table;
}