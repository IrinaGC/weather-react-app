import React from "react";
import DateAndTime from "./DateAndTime";
import WeatherIcon from "./WeatherIcon";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props) {
    return (
    <div className = "Weather">
        <h1 className = "card-title current-location ">
           
           <strong>{props.data.location}</strong> {props.data.country}
        </h1>
        <h6 className = "card-title">
            <DateAndTime date={props.data.date} />
        </h6>
        <ul>
            <li className="icon"><WeatherIcon icon={props.data.icon} size={200} /></li>
            <li className="state">{props.data.state}</li>
            <li><WeatherInfo celsius={props.data.temperature} day={props.data.dayTemp} night={props.data.nightTemp} wind={props.data.wind} humidity={props.data.humidity} /></li>
        </ul>

    
    
    </div>
        );
}