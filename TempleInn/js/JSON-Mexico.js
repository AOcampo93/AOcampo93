//JSON DATA
var MexicoCity = {"Address":"Avenida 510 #90 Col. San Juan de Aragon 07950 México, Distrito Federal, Mexico", "Telephone":"(52) 55-5003-3700", "Services":"Clothing rental available<br>Cafeteria available<br>Patron housing available<br>Distribution center nearby", "Ordinances":{"Baptism":"3:00 PM - 9:00 PM Church Groups - Appointments Only", "Initiatory":"8:00 AM - 7:00 PM Walk-ins and Appointments", "Endowment":"8:00 AM Walk-ins and Appointments<br>9:00 AM Walk-ins and Appointments<br>10:00 AM Walk-ins and Appointments<br>11:00 AM Walk-ins and Appointments", "Sealing":"8:00 AM - 8:00 PM Walk-ins and Appointments"}};
// GENERAL INFO 
document.getElementById('addressSchedule-Mexico').innerHTML = MexicoCity.Address;
document.getElementById('telephoneSchedule-Mexico').innerHTML = MexicoCity.Telephone;
document.getElementById('servicesSchedule-Mexico').innerHTML = MexicoCity.Services;

//SEARCH ORDINANCE & TIME
function SearchMexico() {
    //Get user info
    //Get day of the week
    let dias = [1, 2, 3, 4, 5, 6, 7];

    var x = document.getElementById("Date-Mexico");
    let date = new Date(x.value);
    
    var fechaNum = date.getDate() + 1;
    var mes_name = date.getMonth();

    var WeekDay = (dias[date.getDay()]);
    var y = document.getElementById('OrdinanceType-Mexico').value;
    var output;
    //Give correct info depending of the day
    if (WeekDay == 2 || WeekDay == 3 || WeekDay == 4 || WeekDay == 5 || WeekDay == 6 ) {

        switch (y) {
            case "Baptism":
                output = MexicoCity.Ordinances.Baptism;
                break;
            case "Initiatory":
                output = MexicoCity.Ordinances.Initiatory;
                break;
            case "Endowment":
                output = MexicoCity.Ordinances.Endowment;
                break;
            case "Sealing":
                output = MexicoCity.Ordinances.Sealing;
                break;
            default:
                output = "Please Select one ordinance for do the search";
        }
    }
    else {
        output = "The temple is closed Today";
    }

    document.getElementById('ScheduleMexico').innerHTML = output;
    document.getElementById('OrdinaceMexico').innerHTML = y;
}