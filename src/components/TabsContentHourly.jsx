import React, {useState} from "react";
import axios from "axios";

import ForecastHourlyPreview from "./ForecastHourlyPreview"
import "./TabsContentHourly.css"


export default function TabsContentHourly(props) {
    const [loaded, setLoaded]=useState(false);
    const [forecast, setForecast]=useState(null);

    function handleResponse(response) {
        setForecast(response.data);
        setLoaded(true);
        console.log(forecast)
    }

    if (loaded) {
        return (
            <div className="TabsContentHourly row">
                <ForecastHourlyPreview data={forecast.list[0]} />
            </div>
        )
    } else {
    const apiKey = "75cf8c7a314c4f9b630e483a84924871";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return(
        <div>   
            `Hello {props.data}`

        </div>

    );
    }
}