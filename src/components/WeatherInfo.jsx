import React, { useState } from "react";
import Converter from "../Converter";
import "./WeatherInfo.css";


export default function WeatherInfo(props){
const [unit, setUnit]=useState("celsius");

function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fanrenheit");
}

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius") {
    return(
<div className="WeatherInfo row">
    <div className = "card-text col-6" >  
        <span className="temperature currentWeather">
        {Math.round(props.celsius)}
        </span>
        <span className="unit currentWeather">
        ºC.
        <a href = "/" id = "fahrenheit" onClick={showFahrenheit}>
            ºF
        </a>
        </span>
        <ul className = "card-text col-6">
            <li>
                {Math.round(props.day)}º↑ | {Math.round(props.night)}º↓
            </li>
            <li>
                Humidity: {props.humidity}% 
            </li> 
            <li>
                Wind: {props.wind}km / h 
            </li>
        </ul>
    </div>
</div> 
);
} else {
return (
    <div className = "WeatherInfo currentWeather" >
    <span className="temperature">{Math.round(Converter(props.celsius))}</span>
    <span className="unit">
        ºF.
       <a href = "/" id = "celcius" onClick={showCelsius}>
           ºC
        </a>
    </span>
    </div>
);
}

}            