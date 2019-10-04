function natives(id){
    list = [];
    div = document.getElementById(id);
    for(var i=0; i < 10; i+=0.5)
    if (i%1==0) list.push(i);
    div.innerHTML = list;
}