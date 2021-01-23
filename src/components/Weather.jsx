import React from "react";
import DateAndTime from "./DateAndTime";
import "./Weather.css";

export default function Weather(props) {
    return (
    <div className = "Weather">
        <h1 className = "card-title current-location">
            {props.data.location} , {props.data.country}
        </h1>
        <h6 className = "card-title">
            <DateAndTime date={props.data.date} />
        </h6>
    <div className="row">
        <p className = "card-text col-5" >
            <span className = "currentWeather" > 
            🌤 {Math.round(props.data.temperature)}
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
                <span id = "currentState"> {props.data.state} </span>
            </li >
            <li>
                Day: {Math.round(props.data.dayTemp)}º↑
            </li> 
            <li>
                Night: {Math.round(props.data.nightTemp)}º↓
            </li>    
        </ul>

        <ul className = "card-text col-0.5">
            <li>
                Humidity: {props.data.humidity}% 
            </li> 
            <li>
                Wind: {props.data.wind}km / h 
            </li>
        </ul>
        </div>
        </div>
        );
}