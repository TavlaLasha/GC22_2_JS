m = [2, 8, 6, 11];

function printM(){
    console.log(m);
}
printM();

function changeM(item=77, i=1){
    m[i] = item;
}
changeM(80, 3);
printM();

function changeRandomM(){
    var c = Math.floor(Math.random()*m.length);
    m[c] = 17;
}
changeRandomM(33);
printM();

function instertRandom(){
    m.push(Math.random())
}
changeRandomM(33);
printM();

function insertRandomNumbers(number){
    for(var i=1; i<=number; i++){
        m.push(Math.random());
    }
}
insertRandomNumbers(3);
printM();

function insertRandomNumbersB(number){
    for(var i=1; i<=number; i++){
        m.unshift(Math.random());
    }
}
insertRandomNumbersB(2);
printM();

function deleteFirst(n){
    for(var i=1; i<=n; i++){
        m.shift();
    }
}
deleteFirst(2);
printM();

function deleteElement(){
    m.splice(3, 1);
}
deleteElement();
printM();

function deleteRand(){
    m.splice(Math.floor(Math.random()*m.length), 1)
}
deleteRand();
printM();

function insetEl(){
    m.splice(2, 0, -5);
}
insetEl();
printM();

function insetFewEl(N){
    for(var i=1; i<=N; i++){
        m.splice(2, 0, Math.floor(Math.random()*m.length));
    }
}
insetFewEl(2);
printM();