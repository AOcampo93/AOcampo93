//JSON DATA
var MadridSpain = { "Address": "Calle Del Templo No 2 Madrid 28030 Madrid, Spain", "Telephone": "(34) 91-214-2607", "Services": "Clothing rental available<br>Cafeteria available<br>Patron housing available<br>Distribution center nearby<br>", "Ordinances": { "Baptism": "8:00 AM - 7:00 PM Walk-ins and Appointments", "Initiatory": "8:00 AM - 7:00 PM Walk-ins Only", "Endowment": "8:00 AM Walk-ins and Appointments<br>9:00 AM Walk-ins and Appointments<br>10:00 AM Walk-ins and Appointments<br>11:00 AM Walk-ins and Appointments", "Sealing": "8:00 AM - 7:00 PM Walk-ins Only" } };
// GENERAL INFO 
document.getElementById('addressSchedule-Madrid').innerHTML = MadridSpain.Address;
document.getElementById('telephoneSchedule-Madrid').innerHTML = MadridSpain.Telephone;
document.getElementById('servicesSchedule-Madrid').innerHTML = MadridSpain.Services;

//SEARCH ORDINANCE & TIME
function SearchMadrid() {
    //Get user info
    //Get day of the week
    let dias = [1, 2, 3, 4, 5, 6, 7];

    var x = document.getElementById("Date-Madrid");
    let date = new Date(x.value);

    var fechaNum = date.getDate() + 1;
    var mes_name = date.getMonth();

    var WeekDay = (dias[date.getDay()]);
    var y = document.getElementById('OrdinanceType-Madrid').value;
    var output;
    //Give correct info depending of the day
    if (WeekDay == 2 || WeekDay == 3 || WeekDay == 4 || WeekDay == 5 || WeekDay == 6) {

        switch (y) {
            case "Baptism":
                output = MadridSpain.Ordinances.Baptism;
                break;
            case "Initiatory":
                output = MadridSpain.Ordinances.Initiatory;
                break;
            case "Endowment":
                output = MadridSpain.Ordinances.Endowment;
                break;
            case "Sealing":
                output = MadridSpain.Ordinances.Sealing;
                break;
            default:
                output = "Please Select one ordinance for do the search";
        }
    } else {
        output = "The temple is closed Today";
    }

    document.getElementById('ScheduleMadrid').innerHTML = output;
    document.getElementById('OrdinaceMadrid').innerHTML = y;
}