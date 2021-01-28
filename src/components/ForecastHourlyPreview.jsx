import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function ForecastHourlyPreview(props) {
function hours(){
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
  }
    return `${hours}:00`;
}
function temperature() {
    let temperatureMax = Math.round(props.data.main.temp_max);
    let temperatureMin = Math.round(props.data.main.temp_min);
    return <span><strong>{temperatureMax}º</strong>/{temperatureMin}º</span>;
}

    return(
        <div className="col">
        {hours()}
        <WeatherIcon icon={props.data.weather[0].icon} size={56}/>
        {temperature()}
        </div>
    );
}