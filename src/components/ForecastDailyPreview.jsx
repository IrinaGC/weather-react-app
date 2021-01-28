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
    let temperatureMax = Math.round(props.data.temp.max);
    let temperatureMin = Math.round(props.data.temp.min);
    return <span><strong>{temperatureMax}º</strong> | {temperatureMin}º</span>;
}

    return(
        <div className="col">
        {day()}
        <WeatherIcon icon={props.data.weather[0].icon} size={56} />
        {temp()}
        </div>
    );
}