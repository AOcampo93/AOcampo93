//Obtención de API desde el servidor
let weatherRequestMadrid = new XMLHttpRequest();
let apiURLstringMadrid = 'https://api.openweathermap.org/data/2.5/weather?id=3117735&units=imperial&APPID=ce1b41bea110dc29a315acc06cc91b63';
weatherRequestMadrid.open('Get',apiURLstringMadrid, true);
weatherRequestMadrid.send();
// JSON en variable para trabajar
weatherRequestMadrid.onload =  function () {
     let weatherDataMadrid = JSON.parse(weatherRequestMadrid.responseText);
     //Console.log es solo para vizualizar el JSON desde inspeccionar en Google, se debe quitar una vez terminado
     console.log(weatherDataMadrid);
     //Impresión de la variable deseada (desde JSON)
     document.getElementById('CurrentWeather-Madrid').innerHTML = weatherDataMadrid.main.temp + " °F";
     //Obtención de la imagen desde el servidor usando el JSON 
     let iconMadrid = "http://openweathermap.org/img/w/" + weatherDataMadrid.weather[0].icon + ".png";
     let descMadrid = weatherDataMadrid.weather[0].description;
     //Impresión de imagen según el clima actual junto con los atributos src y alt 
     document.getElementById('ImgWeather-Madrid').setAttribute('src', iconMadrid);
     document.getElementById('ImgWeather-Madrid').setAttribute('alt', descMadrid);
}