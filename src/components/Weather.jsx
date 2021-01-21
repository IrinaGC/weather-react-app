import React from "react";
import "./Weather.css";

export default function Weather() {
    let weatherData = {
        temperature: "2",
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/rain_light.png",
        state: "Sunny",
        dayTemp: "3",
        nightTemp: "0",
        humidity: "86",
        wind: "10"
    };
    return ( 
    <div className = "Weather row">
        <p className = "card-text col-6" >
            <span className = "currentWeather" > 🌤 {weatherData.temperature} 
            <a href = "/"
            id = "celcius"
            className = "active">
                ºC
            </a>.
            <a href = "/"
            id = "fahrenheit" >
                ºF 
            </a>
            </span> 
        </p>

        <ul className = "card-text col-0.5">
            <li>
                <span id = "currentState"> {weatherData.state} </span>
            </li >
            <li>
                Day: {weatherData.dayTemp}º↑
            </li> 
            <li>
                Night: {weatherData.nightTemp}º↓
            </li>    
        </ul>

        <ul className = "card-text col-0.5">
            <li>
                Humidity: {weatherData.humidity}% 
            </li> 
            <li>
                Wind: {weatherData.wind}km / h 
            </li>
        </ul>
        
    </div>
    );
}