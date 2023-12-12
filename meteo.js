const APIKEY = '726d231fb8df32d6b8a21a1e07eaa88e';

var apicall = function(city){


    var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKEY + '&units=metric&lang=fr';
    
fetch(url).then((res) => res.json().then((data) => {
    console.log(data);
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#temp').innerHTML = 

    "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
    document.querySelector('#humidity').innerHTML =
    "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
    document.querySelector('#wind').innerHTML =
    "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
})
)
.catch((err) => comsole.log('Erreur : ' + err));
}

document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
var ville = document.querySelector('#inputcity').value;   

apicall(ville);
});



apicall('Paris');
