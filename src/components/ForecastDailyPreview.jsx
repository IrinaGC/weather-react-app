import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDailyPreview(props) {
function day(){
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let weekDays = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
  ];
    return `${weekDays[day]}`;
}
function temp() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}ºC`;
}

    return(
        <div className="col">
        {day()}
        <WeatherIcon icon={props.data.weather[0].icon} />
        {temp()}
        </div>
    );
}