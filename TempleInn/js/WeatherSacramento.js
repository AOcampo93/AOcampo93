//Obtención de API desde el servidor
let weatherRequestSacramento = new XMLHttpRequest();
let apiURLstringSacramento = 'https://api.openweathermap.org/data/2.5/weather?id=5389489&units=imperial&APPID=ce1b41bea110dc29a315acc06cc91b63';
weatherRequestSacramento.open('Get',apiURLstringSacramento, true);
weatherRequestSacramento.send();
// JSON en variable para trabajar
weatherRequestSacramento.onload =  function () {
     let weatherDataSacramento = JSON.parse(weatherRequestSacramento.responseText);
     //Console.log es solo para vizualizar el JSON desde inspeccionar en Google, se debe quitar una vez terminado
     console.log(weatherDataSacramento);
     //Impresión de la variable deseada (desde JSON)
     document.getElementById('CurrentWeather-Sacramento').innerHTML = weatherDataSacramento.main.temp + " °F";
     //Obtención de la imagen desde el servidor usando el JSON 
     let iconSacramento = "http://openweathermap.org/img/w/" + weatherDataSacramento.weather[0].icon + ".png";
     let descSacramento = weatherDataSacramento.weather[0].description;
     //Impresión de imagen según el clima actual junto con los atributos src y alt 
     document.getElementById('ImgWeather-Sacramento').setAttribute('src', iconSacramento);
     document.getElementById('ImgWeather-Sacramento').setAttribute('alt', descSacramento);
}