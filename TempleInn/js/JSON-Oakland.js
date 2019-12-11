//JSON DATA
var OaklandCA = {"Address":"4770 Lincoln Ave Oakland CA 94602-2535 United States", "Telephone":"(1) 510-531-3200", "Services":"Clothing rental available<br>Cafeteria available<br>Patron housing available<br>Distribution center nearby", "Ordinances":{"Baptism":"5:30 AM - 7:00 AM Walk-ins and Appointments<br>7:00 AM - 5:00 PM Walk-ins and Appointments<br>5:00 PM - 9:00 PM Church Groups - Appointments Only", "Initiatory":"7:00 AM - 9:00 PM Walk-ins and Appointments", "Endowment":"5:30 AM Walk-ins and Appointments<br>6:00 AM Walk-ins and Appointments<br>7:00 AM Walk-ins and Appointments<br>8:00 AM Walk-ins and Appointments<br>9:00 AM Walk-ins and Appointments<br>10:00 AM Walk-ins and Appointments<br>11:00 AM Walk-ins and Appointments<br>12:00 PM Walk-ins and Appointments<br>1:00 PM Walk-ins and Appointments<br>2:00 PM Walk-ins and Appointments<br>3:00 PM Walk-ins and Appointments<br>4:00 PM Walk-ins and Appointments<br>5:00 PM Walk-ins and Appointments<br>6:00 PM Walk-ins and Appointments<br>7:00 PM Walk-ins and Appointments<br>8:00 PM Walk-ins and Appointments", "Sealing":"7:00 AM - 9:00 PM Walk-ins and Appointments"}};
// GENERAL INFO 
document.getElementById('addressSchedule-Oakland').innerHTML = OaklandCA.Address;
document.getElementById('telephoneSchedule-Oakland').innerHTML = OaklandCA.Telephone;
document.getElementById('servicesSchedule-Oakland').innerHTML = OaklandCA.Services;

//SEARCH ORDINANCE & TIME
function SearchOakland() {
    //Get user info
    //Get day of the week
    let dias = [1, 2, 3, 4, 5, 6, 7];

    var x = document.getElementById("Date-Oakland");
    let date = new Date(x.value);
    
    var fechaNum = date.getDate() + 1;
    var mes_name = date.getMonth();

    var WeekDay = (dias[date.getDay()]);
    var y = document.getElementById('OrdinanceType-Oakland').value;
    var output;
    //Give correct info depending of the day
    if (WeekDay == 2 || WeekDay == 3 || WeekDay == 4 || WeekDay == 5 || WeekDay == 6 ) {

        switch (y) {
            case "Baptism":
                output = OaklandCA.Ordinances.Baptism;
                break;
            case "Initiatory":
                output = OaklandCA.Ordinances.Initiatory;
                break;
            case "Endowment":
                output = OaklandCA.Ordinances.Endowment;
                break;
            case "Sealing":
                output = OaklandCA.Ordinances.Sealing;
                break;
            default:
                output = "Please Select one ordinance for do the search";
        }
    }
    else {
        output = "The temple is closed Today";
    }

    document.getElementById('ScheduleOakland').innerHTML = output;
    document.getElementById('OrdinaceOakland').innerHTML = y;
}