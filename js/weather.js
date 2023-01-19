import {API_KEY} from './API_KEY.js';

function onGeoOK(position)
{
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url) // call url
    .then((response) => response.json()) 
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = data.weather[0].description;
    }); 

}

function onGeoError()
{
    alert("날씨를 찾을 수 없습니다.")
}

// PC의 현재 위치 불러옴
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

