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
            date: new Date((response.data.dt)*1000),
            temperature: response.data.main.temp,
            icon: response.data.weather[0].icon,
            state: response.data.weather[0].description,
            dayTemp: response.data.main.temp_max,
            nightTemp: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            location: response.data.name,
            lon: response.data.coord.lon,
            lat: response.data.coord.lat,
        });
    }

    
    function search() {
        const apiKey = "75cf8c7a314c4f9b630e483a84924871";
        let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        axios.get(apiLink).then(handleResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }
    
    function handleChangeCity(event) {
        setCity(event.target.value);
    }

    function getCurrentLocation(event) {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(currentLocation);   
    }
    
    function currentLocation(response) {
        const latitude = response.coords.latitude;
        const longitude = response.coords.longitude;
        const apiKey = "75cf8c7a314c4f9b630e483a84924871";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
        
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

            <div className = "col-2">
                <button className = "btn btn-outline-secondary mb-2" onClick={getCurrentLocation}>C L
                </button>
            </div>
        </form>
        <Weather data={weatherData} />
        <ControlledTabs city={weatherData.location} lat={weatherData.lat} lon={weatherData.lon} />

        </div>
    );
    } else {
    search();
    return "Loading your weather...";
    }
}