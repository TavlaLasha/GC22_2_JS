function insertPhoto(K){
}
function insertTable(N, M, K){
    div = document.getElementById("d1");
    pts=[];
    for(c=1; c<=K; c++){
        pts.push(c+".JPG");
    }
    console.log(pts);
    table = "<table class='tbl'>";
    for(var n=0; n<N; n++){
        table +="<tr>";
        for(var i=0; i<M; i++){
            rand = Math.floor(Math.random()*pts.length);
            randpt = pts[rand];
            ranDbool = Math.random() >= 0.5;
            if(pts.length != 0){
                table += "<td>";
                table += "<img src='Photos/" + randpt + "' alt='IMG'>";
                table += "</td>";
            }else{
                table += "<td>";
                table += "</td>";
            }
            
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

    Nbool = false;
    Mbool = false;
    Kbool = false;

    if(N>=2 && N <=5){
        Nbool = true;
    }
    else{
        alert("Tqven sheiyvanet araswori striqonebis raodenoba. Scadet tavidan");
    }
    if(M>=2 && M <=5){
        Mbool = true;
    }
    else{
        alert("Tqven sheiyvanet araswori svetebis raodenoba. Scadet tavidan");
    }
    if(K>=1 && K <8){
        Kbool = true;
    }
    else{
        alert("Tqven sheiyvanet araswori potoebis raodenoba. Scadet tavidan");
    }
    if(Nbool && Mbool && Kbool){
        insertTable(N, M, K);
    }
}