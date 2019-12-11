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
function ContactForm() {
    var Name = validateName();
    var LastName = validateLastName();
    var Email = validateEmail();
    
    var suma = Name + LastName + Email;

    if(suma == 0) {
        window.location.assign("ThankYouPage.html")
    }
}