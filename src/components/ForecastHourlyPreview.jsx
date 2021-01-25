import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastHourlyPreview(props) {
    return(
        <div className="col">
        {new Date(props.data.dt * 1000).getHours()}:00
        <WeatherIcon icon={props.data.weather[0].icon} />
        {Math.round(props.data.main.temp)}ºC
        </div>
    );
}