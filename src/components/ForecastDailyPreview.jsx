import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastDailyPreview(props) {
function hours(){
    let date = new Date(props.data.dt * 1000);
    let dateDay = date.getDate();
    let month = date.getMonth();
    let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
    return `${dateDay} ${months[month]}`;
}
function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}ºC`;
}

    return(
        <div className="col">
        {hours()}
        <WeatherIcon icon={props.data.weather[0].icon} />
        {temperature()}
        </div>
    );
}