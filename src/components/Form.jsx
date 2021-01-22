import React, {useState}from "react";
import axios from "axios";
import Weather from "./Weather"
import "./Form.css";
import ControlledTabs from "./ControlledTabs";


export default function Form(props) {
    const [weatherData, setWeatherData]= useState({ready: false});
    const [city, setCity]=useState(props.defaultCity)

    function handleResponse (response){
        ControlledTabs.log(response.data)
        setWeatherData = {
            ready : true,
            city: response.data.name,
            country: response.data.sys.country,
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp,
            iconUrl: response.data.weather[0].icon,
            state: response.data.weather[0].description,
            dayTemp: response.data.main.temp_max,
            nightTemp: response.data.main.temp_min,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed
        }
    }
    
    function search () {
        const apiKey = "7f1fb29d77f5407fed4c3366666373e5";
        let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios
        .get(apiLink)
        .then(handleResponse);
    }

    function handleChangeCity(event) {
        setCity(event.target.value)
    }


    if (weatherData.ready) {
      <div className = "Form">
        <form className = "row">

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
        <Weather data={weatherData}/>
    </div>  
    } else {
    search();
    return "Your weather is LOADING..."
    }
}