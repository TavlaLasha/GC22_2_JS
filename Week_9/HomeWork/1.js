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
info += addZero(monthNames[d.getMonth()]);
info += (", ");
info += addZero(d.getDate());
info += (", ");
info += addZero(dayNames[d.getDay()]);
info += (", ");
info += addZero(d.getHours());
info += (":");
info += addZero(d.getMinutes());
info += (":");
info += addZero(d.getSeconds());

div.innerHTML = info;
}
function addZero(d){
  if(d <= 9){
      return '0' + d;
  }
  else{
      return d;
  }
}

date();