//Get table values
var MexicoTemple = [8,9,10,11];
var d = new Date();
var hour = d.getHours();
var minutes = d.getMinutes();
//Compare this table with the actual hour
if(minutes >= 1){
  hour = hour + 1;
}

switch (hour) {
  case 8:
    hour = "8:00 AM";
    break;
  case 9:
    hour = "9:00 AM";
    break;
  case 10:
    hour = "10:00 AM";
    break;
  case 11:
    hour = "11:00 AM";
    break;
  default:
    hour = "There are no more sessions for today";
    break;
}
//Output the result
document.getElementById("NextSesion").innerHTML = hour;
