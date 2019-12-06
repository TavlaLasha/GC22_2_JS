function insertTable(){
    div = document.getElementById("d1");
    N = document.getElementById("i1").value;
    M = document.getElementById("i2").value;
    K = document.getElementById("i3").value;
    pts=[];
    for(c=1; c<=K; c++){
        pts.push(c+".JPG");
    }
    console.log(pts);
    table = "<table class='tbl'>";
    for(var n=1; n<N; n++){
        table +="<tr>";
        for(var i=1; i<M; i++){
            rand = Math.floor(Math.random()*pts.length);
            randpt = pts[rand];
            table += "<td>";
            table += "<img src='Photos/" + randpt + "' alt='IMG'>";
            table += "</td>";
            pts.splice(rand, 1);
        }
        table +="</tr>";
    }
    table +="</table>";
    
    div.innerHTML = table;
}
function iOrnot(){
    N = document.getElementById("i1").value;
    M = document.getElementById("i2").value;
    K = document.getElementById("i3").value;
    if(N>=2 && N <=5){
        insertTable();
    }
    else{
        alert("Tqven sheiyvanet araswori striqonebis raodenoba. Scadet tavidan");
    }
    if(M>=2 && M <=5){
        insertTable();
    }
    else{
        alert("Tqven sheiyvanet araswori svetebis raodenoba. Scadet tavidan");
    }
    if(K>=1 && K <8){
        insertTable();
    }
    else{
        alert("Tqven sheiyvanet araswori potoebis raodenoba. Scadet tavidan");
    }
}