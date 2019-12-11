//Obtención de API desde el servidor
let weatherRequestMexico = new XMLHttpRequest();
let apiURLstringMexico = 'https://api.openweathermap.org/data/2.5/weather?id=3530597&units=imperial&APPID=ce1b41bea110dc29a315acc06cc91b63';
weatherRequestMexico.open('Get',apiURLstringMexico, true);
weatherRequestMexico.send();
// JSON en variable para trabajar
weatherRequestMexico.onload =  function () {
     let weatherDataMexico = JSON.parse(weatherRequestMexico.responseText);
     //Console.log es solo para vizualizar el JSON desde inspeccionar en Google, se debe quitar una vez terminado
     console.log(weatherDataMexico);
     //Impresión de la variable deseada (desde JSON)
     document.getElementById('CurrentWeather-Mexico').innerHTML = weatherDataMexico.main.temp + " °F";
     //Obtención de la imagen desde el servidor usando el JSON 
     let iconMexico = "http://openweathermap.org/img/w/" + weatherDataMexico.weather[0].icon + ".png";
     let descMexico = weatherDataMexico.weather[0].description;
     //Impresión de imagen según el clima actual junto con los atributos src y alt 
     document.getElementById('ImgWeather-Mexico').setAttribute('src', iconMexico);
     document.getElementById('ImgWeather-Mexico').setAttribute('alt', descMexico);
}