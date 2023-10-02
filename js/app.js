// @ts-nocheck
const apiKey = "f6a8a2c357bd95770a5e32bd78b3bc1b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const weatherIcon = document.querySelector(".weather-icon");
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city){
    const response = await fetch(apiUrl + `&appid=${apiKey}&q=${city}`);
    let data = await response.json();

    console.log(data, city);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " °c";
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "../images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "../images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "../images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "../images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "../images/mist.png";
    }else{
        data.weather[0];
    }

    document.querySelector('.weather').style.display = "block";
}

searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
});
