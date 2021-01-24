import React, {useState} from "react";
import axios from "axios";
import Weather from "./Weather";
import ControlledTabs from "./ControlledTabs";
import "./Form.css";

export default function Form(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse (response){
        setWeatherData({
            ready: true,
            country: response.data.sys.country,
            date: new Date((response.data.dt+response.data.timezone)*1000),
            temperature: response.data.main.temp,
            icon: response.data.weather[0].icon,
            state: response.data.weather[0].description,
            dayTemp: response.data.main.temp_max,
            nightTemp: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            location: response.data.name,
        });
    }
    
    
    function handleSubmit(event) {
        event.preventDefault();
        search(city);
    }
    
    function handleChangeCity(event) {
        setCity(event.target.value);
    }
    
    function search() {
        const apiKey = "75cf8c7a314c4f9b630e483a84924871";
        let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiLink).then(handleResponse);
    }
    
    if (weatherData.ready) {
        return (
      <div className = "Form">
        <form className = "row" onSubmit={handleSubmit}>

            <div className = "col-6">
                <input type = "text"
                className = "form-control"
                autoComplete = "off"
                autoFocus = "on"
                placeholder = "Weather in..."
                onChange={handleChangeCity}  />
            </div>

            <div className = "col-1">
                <button type = "submit" className = "btn btn-outline-secondary mb-2">
                    <span role = "img" aria-label = "search">
                        🔍
                    </span> 
                </button> 
            </div>

            <div className = "col-5">
                <button type = "submit" className = "btn btn-outline-secondary mb-2">Current Location
                </button>
            </div>
        </form>
        <Weather data={weatherData} />
        <ControlledTabs data={weatherData.location} />

        </div>
    );
    } else {
    search();
    return "Loading your weather...";
    }
}