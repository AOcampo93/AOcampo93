//Obtención de API desde el servidor
let weatherRequestOakland = new XMLHttpRequest();
let apiURLstringOakland = 'https://api.openweathermap.org/data/2.5/weather?id=5378538&units=imperial&APPID=ce1b41bea110dc29a315acc06cc91b63';
weatherRequestOakland.open('Get',apiURLstringOakland, true);
weatherRequestOakland.send();
// JSON en variable para trabajar
weatherRequestOakland.onload =  function () {
     let weatherDataOakland = JSON.parse(weatherRequestOakland.responseText);
     //Console.log es solo para vizualizar el JSON desde inspeccionar en Google, se debe quitar una vez terminado
     console.log(weatherDataOakland);
     //Impresión de la variable deseada (desde JSON)
     document.getElementById('CurrentWeather-Oakland').innerHTML = weatherDataOakland.main.temp + " °F";
     //Obtención de la imagen desde el servidor usando el JSON 
     let iconOakland = "http://openweathermap.org/img/w/" + weatherDataOakland.weather[0].icon + ".png";
     let descOakland = weatherDataOakland.weather[0].description;
     //Impresión de imagen según el clima actual junto con los atributos src y alt 
     document.getElementById('ImgWeather-Oakland').setAttribute('src', iconOakland);
     document.getElementById('ImgWeather-Oakland').setAttribute('alt', descOakland);
}