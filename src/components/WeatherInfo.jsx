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
    <div className = "card-text col-4" >  
        <span className="temperature currentWeather">
        {Math.round(props.celsius)}º
        </span>
        <span className="unit">
        C | {" "}<a href = "/" id = "fahrenheit" onClick={showFahrenheit}>F
        </a>
        </span>
    </div>
     <div className = "card-text col-5">   
        <ul >
            <li>
                {Math.round(props.day)}º↑ | {Math.round(props.night)}º↓
            </li>
            <li>
                Humidity: {props.humidity}% 
            </li> 
            <li>
                Wind: {Math.round(props.wind)} km/h 
            </li>
        </ul>
    </div>
    </div>

);
} else {
return (
    <div className = "WeatherInfo row">
    <div className="cart-text col-4">  
        <span className="temperature currentWeather">{Math.round(Converter(props.celsius))}º</span>
        <span className="unit">
        F | {" "}
       <a href = "/" id = "celcius" onClick={showCelsius}>
           C
        </a>
        </span>
    </div> 
    <div className = "card-text col-5">   
        <ul >
            <li>
                {Math.round(Converter(props.day))}º↑ | {Math.round(Converter(props.night))}º↓
            </li>
            <li>
                Humidity: {props.humidity}% 
            </li> 
            <li>
                Wind: {Math.round(props.wind / 1.609)} m/h 
            </li>
        </ul>
    </div>
    </div>
);
}

}            