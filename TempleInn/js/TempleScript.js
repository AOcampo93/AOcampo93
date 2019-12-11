// CALLING THE JSON
const requestURL = '';
fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        console.table(jsonObject);
        myobj = jsonObject;

        // Search the info in JSON
        var address = myobj.temples[1].address;

        //Printing in the HTML
        document.getElementById('address').innerHTML = address;

    });