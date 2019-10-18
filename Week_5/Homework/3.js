function Dayz(){
    div = document.getElementById("d1");
    var days = ["დღეს ორშაბათია", "დღეს სამშაბათია", "დღეს ოთხშაბათია", "დღეს ხუთშაბათია", "დღეს პარასკევია", "დღეს შაბათია", "დღეს კვირაა"];
    day = prompt("შეიყვანეთ კვირის დღე (1, 2, 3, 4, 5, 6, 7)");
    day1 = day - 1;
    if (day1 >= 0 && day1 <= 6) {
        info = days[day1] + "...";
    }
    else if (day == null){
        info = "თქვენ დააჭირეთ Cancel ღილაკს." + "<br>" + "გისურვებთ ბედნიერ დღეს!!!";
        div.style.textShadow = "1px 1px lightgreen";
        div.style.fontStyle = "italic";
        div.style.color = "#cc3300";
        div.style.borderRadius = "0";
    }
    else {
        info = "ესეთი დღე არ არსებობს";
    }
    div.innerHTML = info;
}