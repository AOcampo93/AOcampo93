function validateName() {
    //validate the info
    var valid = 1;
    var Name = document.getElementById('Name').value;
    document.getElementById("Name").style.background = "white";

    if(Name == ""){
        document.getElementById("Name").style.background = "#ffb4a2";
    }
    else{
        valid = 0;
    }
    return valid;
}

function validateLastName() {
    //validate the info
    var valid = 1;
    var LastName = document.getElementById('LastName').value;
    document.getElementById("LastName").style.background = "white";

    if(LastName == ""){
        document.getElementById("LastName").style.background = "#ffb4a2";
    }
    else{
        valid = 0;
    }
    return valid;
}

function validatePhone() {
    //validate the info
    var valid = 1;
    var Phone = document.getElementById('Phone').value;
    document.getElementById("Phone").style.background = "white";
    // Empty Box
    if(Phone == ""){
        document.getElementById("Phone").style.background = "#ffb4a2";
    }
    else{
        valid = 0;
    }
    return valid;
}
function validateCountry() {
    //validate the info
    var valid = 1;
    var Country = document.getElementById('Country').value;
    document.getElementById("Country").style.background = "white";
    // Empty Box
    if(Country == ""){
        document.getElementById("Country").style.background = "#ffb4a2";
    }
    else{
        valid = 0;
    }
    return valid;
}

function validateEmail() {
    //validate the info
    var valid = 1;
    var Email = document.getElementById('Email').value;
    document.getElementById("Email").style.background = "white";
    // Empty Box
    if(Email == ""){
        document.getElementById("Email").style.background = "#ffb4a2";
    }
    else{
        valid = 0;
    }
    return valid;
}

//---Step2-----

function validateHotel() {
    //validate the info
    var valid = 1;
    var Hotel = document.getElementById("Hotel").value;
    document.getElementById("Hotel").style.background = "white";
    // Empty Box
    if(Hotel == "Invalid"){
        document.getElementById("Hotel").style.background = "#ffb4a2";
      }
      else{
        valid = 0;
      }
 
      return valid;
}
function validateService() {
        //validate the info
        var valid = 1;
        var Service = document.getElementById("Service").value;
        document.getElementById("Service").style.background = "white";
        // Empty Box
        if(Service == "Invalid"){
            document.getElementById("Service").style.background = "#ffb4a2";
          }
          else{
            valid = 0;
          }
     
          return valid;
}
function validateArrival() {
        //validate the info
        var valid = 1;
        var Arrival = document.getElementById("Arrival").value;
        document.getElementById("Arrival").style.background = "white";
        // Empty Box
        if(Arrival == ""){
            document.getElementById("Arrival").style.background = "#ffb4a2";
          }
          else{
            valid = 0;
          }
     
          return valid;
}
function validateDeparture() {
        //validate the info
        var valid = 1;
        var Departure = document.getElementById("Departure").value;
        document.getElementById("Departure").style.background = "white";
        // Empty Box
        if(Departure == ""){
            document.getElementById("Departure").style.background = "#ffb4a2";
          }
          else{
            valid = 0;
          }
     
          return valid;
}







//------------CTA--------------------------------------

function NextStep1() {
    var Name = validateName();
    var LastName = validateLastName();
    var Phone = validatePhone();
    var Country = validateCountry();
    var Email = validateEmail();
    
    var suma = Name + LastName + Phone + Country + Email;

    if(suma == 0) {
        document.getElementById("Step1Container").style.display = "none";
        document.getElementById("Step2Container").style.display = "block";
    }
    else{
        document.getElementById('checkStep1').innerHTML = "Please Check the fields";
    }

}

function BackStep1() {
    document.getElementById("Step1Container").style.display = "block";
    document.getElementById("Step2Container").style.display = "none";
    document.getElementById('checkStep1').innerHTML = "";
}

function BackStep2() {
    document.getElementById("Step2Container").style.display = "block";
    document.getElementById("Step3Container").style.display = "none";
    document.getElementById('checkStep2').innerHTML = "";
}

function NextStep2() {
    var Hotel = validateHotel();
    var Service = validateService();
    var Arrival = validateArrival();
    var Departure = validateDeparture();

    
    var suma = Hotel + Service + Arrival + Departure;

    if(suma == 0) {
        document.getElementById("Step2Container").style.display = "none";
        document.getElementById("Step3Container").style.display = "block";
    }
    else{
        document.getElementById('checkStep2').innerHTML = "Please Check the fields";
    }
}

function ThankyouPage() {
    window.location.assign("ThankYouPage.html")
}