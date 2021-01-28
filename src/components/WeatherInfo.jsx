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

function celsius() {
    let celsius = Math.round(props.celsius);
    if (celsius > 0 && celsius < 10) {
        celsius = `0${celsius}`;
    }
    return `${celsius}`
}

if (unit === "celsius") {
    return(
<div className="WeatherInfo">
<div className = "card-text">
    <ul className = "horizontal-list">
        <li className = "temperature">
            <span className="currentWeather">{celsius()}º</span>
            <span className="unit">
            C | {" "}<a href = "/" id = "fahrenheit" onClick={showFahrenheit}>F
            </a>
            </span>
        </li>
        <li className = "weather-conditions">   
            <ul >
                <li>
                    {Math.round(props.day)}º↑ {" "} | {" "} {Math.round(props.night)}º↓
                </li>
                <li>
                    Humidity: {props.humidity} % 
                </li> 
                <li>
                    Wind: {Math.round(props.wind)} km/h 
                </li>
            </ul>
        </li>
    </ul> 
    </div>
    </div>

);
} else {
return (
    <div className = "WeatherInfo">
    <div className = "card-text">
    <ul className = "horizontal-list">  
        <li className = "temperature"> 
            <span className="currentWeather">{Math.round(Converter(props.celsius))}º</span>
            <span className="unit">
            F | {" "}
            <a href = "/" id = "celcius" onClick={showCelsius}>
           C
            </a>
            </span>
        </li>
        <li className = "weather-conditions">   
            <ul >
                <li>
                {Math.round(Converter(props.day))}º↑ {" "} | {" "} {Math.round(Converter(props.night))}º↓
                </li>
                <li>
                Humidity: {props.humidity} % 
                </li> 
                <li>
                Wind: {Math.round(props.wind / 1.609)} m/h 
                </li>
            </ul>
        </li>
    </ul>
    </div>
    </div>
);
}

}            