function date(){
div = document.getElementById("d1");
d = new Date();
const monthNames = ["იანვარი", "თებერვალი", "მარტი", "აპრილი", "მაისი", "ივნისი",
  "ივლისი", "აგვისტო", "სექტემბერი", "ოქტომბერი", "ნოემბერი", "დეკემბერი"
];
const dayNames = ["კვირა", "ორშაბათი", "სამშაბათი", "ოთხშაბათი", "ხუთშაბათი", "პარასკევი",
  "შაბათი"];

info = d.getFullYear();
info += (", ");
info += (monthNames[d.getMonth()]);
info += (", ");
info += (d.getDate());
info += (", ");
info += (dayNames[d.getDay()]);
info += (", ");
info += (d.getHours());
info += (":");
info += (d.getMinutes());
info += (":");
info += (d.getSeconds());

div.innerHTML = info;
}

date();