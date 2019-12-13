// CALLING THE JSON
const requestURL = 'https://aocampo93.github.io/CIT-230/TempleInn/js/Temples.json';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        myobj = jsonObject;

        // Search the info in JSON
        var temple = myobj.Temples[1].Temple;
        var address = myobj.Temples[1].Address;
        var Telephone = myobj.Temples[1].Telephone;

        // Loop to show the array
        var Services = myobj.Temples[1].Services;
        var LongArray = Services.length;
        var AllServices = " ";

        for (let index = 0; index < LongArray; index++) {
            AllServices += Services[index] + "<br>";
        }

        //Printing in the HTML
        document.getElementById('NameTemple').innerHTML = temple + " " + "Temple";
        document.getElementById('address').innerHTML = address;
        document.getElementById('telephone').innerHTML = Telephone;
        document.getElementById('services').innerHTML = AllServices;

    });