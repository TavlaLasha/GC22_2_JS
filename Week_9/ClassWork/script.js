function testTime(){
    alert("Hello My Friend!");
}
// setTimeout(testTime, 5000);
setInterval(testTime, 5000);

d = new Date();
document.write(d);
document.write("<br>");
document.write(d.getTime());
document.write("<br>");
document.write(d.getTime()/(360*24*60*60*1000));
document.write("<br>");
document.write(d.getFullYear());
document.write("<br>");
document.write(d.getMonth()+1);
document.write("<br>");
document.write(d.getDay());
document.write("<br>");
document.write(d.getHours());
document.write("<br>");
document.write(d.getMinutes());
document.write("<br>");
document.write(d.getUTCHours());
document.write("<br>");
document.write(d.getUTCMinutes());
d.setMonth(22);
document.write("<br>");
document.write(d);