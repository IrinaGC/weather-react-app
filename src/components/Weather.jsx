import React from "react";

import "./Weather.css";

export default function Weather(props) {
let locationData = {
      city: "London",
      country: "UK",
      day: "Monday",
      date: "07 Dec",
      time: "21:25"
  }
  

    return (
    <div className = "Weather">
    <div className = "LocationCity">
    
    <h1 className = "card-title current-location">
        {locationData.city}, {locationData.country} 
    </h1>

    <h6 className = "card-title">
        {locationData.day}・ {locationData.date}・ {locationData.time} 
   
    </h6> 
</div>
    <div> 
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
    </div>
    );
}